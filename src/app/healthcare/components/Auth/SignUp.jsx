"use client";
import { X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthType,
  setAuthModalOpen,
} from "../../redux/slice/authSlice";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import axios from "../../lib/axiosInstance";
import { loginSuccess } from "../../redux/slice/userSlice";
import Cookie from "js-cookie";
import DashICO from "@public/dash.svg"

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const isButtonDisabled = !email.trim() || !password.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("/auth/login", {
        email,
        password,
      });
      const userData = response.data.user;
      const cookies = response.data.cookie;

      dispatch(loginSuccess(userData));
      if (response.status === 200) {
        Cookie.set("token", cookies.token, {
          expires: 1,
        });
        Cookie.set("userObject", JSON.stringify(cookies.userObject), {
          expires: 1,
        });
        dispatch(setAuthModalOpen());
        router.push("/healthcare");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Invalid email or password");
        setTimeout(() => {
          setError("");
        }, 2000);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="relative w-full max-w-lg p-10 bg-[#1e233d] rounded-3xl">
          <button
            className="absolute right-4 top-4 bg-white bg-opacity-10 rounded-full p-2"
            onClick={() => dispatch(setAuthModalOpen())}
          >
            <X size={20} />
          </button>

          <h1 className="font-cera text-3xl font-semibold text-white mb-8 text-center">
            Sign in
          </h1>
          {error && <div className="mb-4 text-red-500 text-center">{error}</div>}

          <form className="space-y-2" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full px-4 py-5 bg-[#353D5A] rounded-[50px] text-white font-medium placeholder-[#717EAC] border-2 border-[#717EAC] focus:outline-none focus:ring-2 text-center placeholder:text-center"
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-5 bg-[#353D5A] rounded-[50px] text-white font-medium placeholder-[#717EAC] border-2 border-[#717EAC] focus:outline-none focus:ring-2 text-center placeholder:text-center"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
              >
                <img
                  src={`${showPassword ? "/eye-close.svg" : "/eye-open.svg"}`}
                />
              </button>
            </div>

            <button
              type="submit"
              disabled={isButtonDisabled}
              className={`w-full py-5 px-4 bg-gradient-to-r from-[#11F4D1] to-[#7C1DCE] hover:bg-gradient-to-r hover:from-[#7C1DCE] hover:to-[#11F4D1] text-white rounded-[50px] font-cera font-medium hover:opacity-90 transition-opacity flex justify-center items-center ${
                isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              SIGN IN
              <img src="/arrow-right.svg" className="ml-2" />
            </button>
          </form>
          <div className="text-white font-medium font-cera flex justify-center items-center border-white border-t-2 border-opacity-5 mt-8 pt-3">
            Don't have an account yet?
            <button
              className="text-teal-400 hover:underline ml-2 flex items-center justify-center"
              onClick={() => dispatch(setAuthType("signup"))}
            >
              Sign up <img src="/arrow-right-blue.svg" className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  let referral = "";
  if (typeof window !== "undefined") {
    referral = localStorage.getItem("ref") || "";
  }

  const navigate = useRouter();

  const isButtonDisabled =
    !email.trim() || !password.trim() || !repeatPassword.trim();
  const [step, setStep] = useState(1); // 1: signup, 2: OTP, 3: confirmed
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [countdown, setCountdown] = useState(60);
  const otpRefs = useRef([]);

  useEffect(() => {
    if (step === 2 && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, step]);

  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Move to next input if current field is filled
    if (element.value && index < 5) {
      otpRefs.current[index + 1].focus();
    }

    // Check if all digits are entered
    if (newOtp.every((digit) => digit !== "") && newOtp.join("").length === 6) {
      // Verify OTP
      verifyOtp(newOtp.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1].focus();
    }
  };

  const verifyOtp = async (otpString) => {
    try {
      const response = await axios.post('/auth/verify-otp', {
        email, // Use the email entered during signup
        otp: otpString,
      });
      if (response.status === 200) {
        setStep(3);
      }
    } catch (error) {
      setError(error.response?.data?.message || "Invalid OTP code");
      setTimeout(() => {
        setError("")
      }, 2000);
    }
  };

  const resendOtp = async () => {
    try {
      await axios.post('/auth/resend-otp', { email });
      setCountdown(60);
    } catch (error) {
      setError('Failed to resend OTP. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(password !== repeatPassword) {
      setError(
        "Password and Repeat Passwords should be same"
      );
      setTimeout(() => {
        setError("")
      }, 3000);
      return;
    }

    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,20}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be 8-20 characters long and include at least one letter, one number, and one special character"
      );
      setTimeout(() => {
        setError("")
      }, 3000);
      return;
    }

    try {
      const response = await axios.post("/auth/signup", {
        email,
        password,
        name,
        referral,
      });

      const userData = response.data.user;
      const cookies = response.data.cookie;
      dispatch(loginSuccess(userData));

      if (response.status == 201) {
        Cookie.set("token", cookies.token, {
          expires: 1,
        });
        Cookie.set("userObject", JSON.stringify(cookies.userObject), {
          expires: 1,
        });
        // dispatch(setAuthModalOpen())
        navigate.push("/healthcare");
        setStep(2); // Move to OTP step after successful signup
      }
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
      setTimeout(() => {
        setError("")
      }, 3000);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <form className="space-y-2" onSubmit={handleSubmit}>
              {/* Your existing form fields */}
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="w-full px-4 py-5 bg-[#353D5A] rounded-[50px] text-white font-medium placeholder-[#717EAC] border-2 border-[#717EAC] focus:outline-none focus:ring-2 text-center placeholder:text-center"
                />
              </div>
              {/* ... other fields ... */}
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full px-4 py-5 bg-[#353D5A] rounded-[50px] text-white font-medium placeholder-[#717EAC] border-2 border-[#717EAC] focus:outline-none focus:ring-2 text-center placeholder:text-center"
                />
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-5 bg-[#353D5A] rounded-[50px] text-white font-medium placeholder-[#717EAC] border-2 border-[#717EAC] focus:outline-none focus:ring-2 text-center placeholder:text-center"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  <img
                    src={`${showPassword ? "/eye-close.svg" : "/eye-open.svg"}`}
                  />
                </button>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  placeholder="Repeat password"
                  className="w-full px-4 py-5 bg-[#353D5A] rounded-[50px] text-white font-medium placeholder-[#717EAC] border-2 border-[#717EAC] focus:outline-none focus:ring-2 text-center placeholder:text-center"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  <img
                    src={`${showPassword ? "/eye-close.svg" : "/eye-open.svg"}`}
                  />
                </button>
              </div>
              <button
                type="submit"
                className="w-full py-5 px-4 bg-gradient-to-r from-[#11F4D1] to-[#7C1DCE] hover:bg-gradient-to-r hover:from-[#7C1DCE] hover:to-[#11F4D1] text-white rounded-[50px] font-cera font-medium"
              >
                CONFIRM
                <img src="/arrow-right.svg" className="ml-2 inline" />
              </button>
            </form>
            <div className="text-white font-medium font-cera flex justify-center items-center border-white border-t-2 border-opacity-5 mt-8 pt-3">
              Do you have an account?
              <button
                className="text-teal-400 hover:underline ml-2 flex items-center justify-center"
                onClick={() => dispatch(setAuthType("signin"))}
              >
                Sign in <img src="/arrow-right-blue.svg" className="ml-2" />
              </button>
            </div>
          </>
        );

      case 2:
        return (
          <div className="space-y-6">
            <p className="text-white text-center">
              The confirmation code was sent to
              <br />
              <span className="text-[#11F4D1]">{email}</span>. Enter the code in
              the following fields:
            </p>
            <div className="flex justify-center gap-2">
              {otp.map((digit, index) => (
                <>
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  ref={(el) => (otpRefs.current[index] = el)}
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-12 text-center bg-[#353D5A] rounded-lg text-white border-2 border-[#717EAC] focus:border-[#11F4D1] focus:outline-none"
                />
                {index == 2 && <span className="flex items-center"><DashICO className="h-4 w-4"/></span>}
                </>
              ))}
            </div>
            <div className="text-center text-white text-sm">
              Didn't receive an email? Wait {countdown} seconds and
              <button
                className={`${countdown ? "text-white opacity-30" : "text-[#11F4D1] hover:underline"} ml-1`}
                disabled={countdown > 0}
                onClick={resendOtp}
              >
                Send again
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-center space-y-6">
            <h2 className="text-white text-xl">
              Your email address (
              <span className="text-[#11F4D1]">{email}</span>) is now confirmed!
            </h2>
            <button
              onClick={() => {
                dispatch(setAuthModalOpen())
              }}
              className="w-full py-5 px-4 bg-gradient-to-r from-[#11F4D1] to-[#7C1DCE] hover:bg-gradient-to-r hover:from-[#7C1DCE] hover:to-[#11F4D1] text-white rounded-[50px] font-cera font-medium"
            >
              SIGN IN
              <img src="/arrow-right.svg" className="ml-2 inline" />
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative w-full max-w-lg p-10 bg-[#1e233d] rounded-3xl">
        <button
          className="absolute right-4 top-4 bg-white bg-opacity-10 rounded-full p-2"
          onClick={() => dispatch(setAuthModalOpen())}
        >
          <X size={20} />
        </button>

        <h1 className="font-cera text-3xl font-semibold text-white mb-8 text-center">
          Sign up
        </h1>

        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}

        {renderStep()}
      </div>
    </div>
  );
};

const Auth = () => {
  const { authType, authModalOpen } = useSelector((state) => state.auth);

  return (
    <>
      {authModalOpen && (
        <motion.section
          className="top-0 w-full h-full fixed z-50 backdrop-blur-[2px]"
          initial={{ y: 300 }}
          animate={{ y: 0 }}
        >
          {authType === "signin" ? <SignIn /> : <SignUp />}
        </motion.section>
      )}
    </>
  );
};

export default Auth;
