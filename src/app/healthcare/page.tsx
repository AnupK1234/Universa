"use client";
import SectionThree from "./components/sections/section-three";
import SectionOne from "./components/sections/section-one";
import SectionTwo from "./components/sections/section-two";
import SectionFour from ".//components/sections/section-four";
import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import SectionFive from "./components/sections/section-five";
import SectionSix from "./components/sections/section-six";
import { Image } from "./components/atoms/image";
import SectionSeven from "./components/sections/section-seven";
import SectionEight from "./components/sections/section-eight";
import SectionNine from "./components/sections/section-nine";
import SectionTen from "./components/sections/section-ten";
import { Button, ButtonWrapper, CustomButton } from "./components/atoms/button";
import Chatbot from "./components/sections/chatbot.section";
import Link from "next/link";
import {
  useHealthCareSettingsStore,
  useHealthCareStore,
} from "./lib/store/healthcare";
import { SnapSection } from "./components/molecules/snap-section";
import { useOutsideClick } from "./lib/hooks/useOutsideClick";

const sections = [
  {
    id: "section-one",
    image: "url('/healthcare/images/section-one.jpeg')",
    content: <SectionOne />,
  },
  {
    id: "section-two",
    content: <SectionTwo />,
    image: "url('/healthcare/images/section-two.jpeg')",
  },
  {
    id: "section-three",
    content: <SectionThree />,
    image: "url('/healthcare/images/section-three.jpeg')",
  },
  {
    id: "section-four",
    content: <SectionFour />,
    image: "url('/healthcare/images/section-four.jpeg')",
  },
  {
    id: "section-five",
    content: <SectionFive />,
    image: "url('/healthcare/images/section-five.jpeg')",
  },
  {
    id: "section-six",
    content: <SectionSix />,
    image: "url('/healthcare/images/section-six.jpeg')",
  },
  {
    id: "section-seven",
    content: <SectionSeven />,
    image: "url('/healthcare/images/section-seven.jpeg')",
  },
  {
    id: "section-eight",
    content: <SectionEight />,
    image: "url('/healthcare/images/section-eight.jpeg')",
  },
  {
    id: "section-nine",
    content: <SectionNine />,
    image: "url('/healthcare/images/section-nine.jpeg')",
  },
  {
    id: "section-ten",
    content: <SectionTen />,
    image: "url('/healthcare/images/section-ten.jpeg')",
  },
];

const SnapScrollWithFixedBackground = () => {
  const [currentImage, setCurrentImage] = useState(sections[0].image);
  const { setChatBotOpened } = useHealthCareStore();

  const isMobile = () =>
    /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
      navigator.userAgent
    );

  const hideAddressBar = () => {
    if (isMobile()) {
      // On first user interaction (touch event), hide the address bar
      const handleTouchStart = () => {
        window.scrollTo(0, 1); // Hide the address bar
        document.removeEventListener("mouseup", handleTouchStart); // Remove event listener after it's triggered
      };
      document.addEventListener("mouseup", handleTouchStart);
    }
  };

  useEffect(() => {
    hideAddressBar(); // Trigger on initial render
    // Add resize listener to handle screen resize events
    const resizeListener = () => hideAddressBar();
    window.addEventListener("resize", resizeListener);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const scrollToFirstSection = () => {
    const firstSection = document.getElementById(sections[0].id);
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: "smooth" });
      setCurrentImage(sections[0].image);
      hideAddressBar(); // Ensure the address bar is hidden after scroll
    }
  };

  return (
    <div className="h-screen w-full flex flex-col relative  scrollbar-none">
      <AnimatePresence>
        {/* Fixed Background */}
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: currentImage }}
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1,
            type: "tween",
            ease: "easeInOut",
          }}
        ></motion.div>
      </AnimatePresence>

      {/* Snap Sections */}
      <div className="relative z-10 ">
        {sections.map((section) => (
          <SnapSection
            key={section.id}
            id={section.id}
            content={section.content}
            onVisible={() => {
              setCurrentImage(section.image);
            }}
          />
        ))}
      </div>

      {/* Scroll to First Section Button */}
      <ButtonWrapper
        className="z-10 fixed top-12 left-12"
        onClick={scrollToFirstSection}
      >
        <Image
          className="w-[6rem] h-[6rem] mobile:w-[5.5rem] mobile:h-[5.5rem]"
          src="/universa-logo.svg"
        />
      </ButtonWrapper>

      <AnimatePresence>
        {currentImage === sections[0].image ? null : (
          <motion.div
            className="fixed bottom-10 mobile:bottom-8 right-10 z-10"
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 200, opacity: 0 }}
            transition={{ duration: 0.4, type: "tween", ease: "easeInOut" }}
          >
            <ButtonWrapper
              onClick={scrollToFirstSection}
              className="bg-healthcare-accent w-24 h-24 mobile:w-16 mobile:h-16 flex flex-col items-center justify-center rounded-full desktop:hover:bg-gradient-to-br from-healthcare-accent to-cyan-400"
            >
              <Image className="w-6 h-6" src="/arrow-up.svg" />
            </ButtonWrapper>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Doctor Button */}
      <AnimatePresence>
        {currentImage !== sections[9].image && (
          <motion.div
            className="fixed z-10 bottom-10 mobile:bottom-8 self-center"
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 200, opacity: 0 }}
            transition={{ duration: 0.4, type: "tween", ease: "easeInOut" }}
          >
            <Button
              className="py-8 mobile:py-4 px-12 font-cera font-medium w-fit bg-healthcare-accent text-black flex flex-col h-fit rounded-full text-xl"
              text="CHAT TO AI DOCTOR"
              onClick={() => {
                setChatBotOpened(true);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`w-full h-full left-0 fixed top-0 ${
          currentImage === sections[0].image
            ? "bg-[#1C293C]/50"
            : "bg-[#1C293C]/30"
        } z-0`}
      />
    </div>
  );
};



const customPlayIcon = (
  <div
    style={{
      padding: 20,
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      cursor: "pointer",
    }}
  >
    <Image src="/play-icon.svg" className="w-20 h-20" />
  </div>
);

export default function Home() {
  const { isChatBotOpened, setChatBotOpened } = useHealthCareStore();
  const { showVideo, setShowVideo } = useHealthCareSettingsStore();
  const [canShowVideo, setCanShowVideo] = useState(false);
  const [isVideoPlaying, setVideoPlaying] = useState(false);
  // localStorage.setItem("isUserFirstTime", JSON.stringify(true))
  // alert(isUserFirstTime)

  const parentRef = useRef<HTMLDivElement>(null);


  const isMobile = () =>
    /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
      navigator.userAgent
    );

  const componentRef = useOutsideClick<HTMLDivElement>(() =>
    setChatBotOpened(false),
  );

  useEffect(() => {
    setTimeout(() => {
      setCanShowVideo(true);
     
    }, 1000);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center scrollbar-none"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <SnapScrollWithFixedBackground />

      {isChatBotOpened && (
        <motion.button
          whileTap={{ opacity: 0.5 }}
          onClick={() => {
            setChatBotOpened(false);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "tween", duration: 1 }}
          className="bg-healthcare-accent w-24 h-24 mobile:w-20 mobile:h-20 desktop:hidden fixed top-7 mobile-sm:right-4 tablet:right-10 flex flex-col items-center justify-center rounded-full z-40 desktop:hover:bg-gradient-to-br from-healthcare-accent to-cyan-400"
        >
          <Image src="/exit-icon.svg" />
        </motion.button>
      )}

      <AnimatePresence>
        {isChatBotOpened && (
          <motion.div
            className="w-full h-full mobile:h-screen bg-healthcare-blur-background bg-opacity-50 fixed z-20 flex flex-col desktop-qhd:flex-row desktop-lg:flex-row desktop:flex-row items-center justify-center"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", bounce: 0.3, duration: 1 }}
          >
            <div
              ref={componentRef}
              className="w-[90%] h-[90%] mobile:h-full desktop-lg:w-fit desktop-qhd:w-fit flex flex-col desktop-qhd:flex-row desktop-lg:flex-row desktop:flex-row items-center justify-center"
            >
              <Chatbot />
              <motion.button
                // whileTap={{ opacity: 0.5 }}
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // exit={{ opacity: 0 }}
                // transition={{ type: "tween", duration: 1 }}
                onClick={() => {
                  setChatBotOpened(false);
                }}
                className="bg-healthcare-accent w-24 h-24 desktop-qhd:relative desktop-lg:relative desktop-lg:flex hidden desktop-qhd:flex desktop:flex flex-col items-center justify-center rounded-full z-40 desktop:hover:bg-gradient-to-br from-healthcare-accent to-cyan-400 self-start desktop:ml-[-40px] desktop:mt-[-10px]"
              >
                <Image src="/exit-icon.svg" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* <div className="w-full h-full fixed top-0 bg-[#1C293C]/50 z-0" /> */}

      <AnimatePresence>
        {showVideo && canShowVideo ? (
          <motion.div
            className="w-full h-full mobile:top-0 flex flex-col items-center justify-center bg-healthcare-blur-background backdrop-blur-lg bg-opacity-70 fixed z-50"
            initial={{ y: 400, opacity: 1 }}
            animate={{ y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
          >
            <ButtonWrapper
              onClick={() => {
                setShowVideo(false);
              }}
              className="bg-healthcare-accent w-24 h-24 mobile:w-20 mobile:h-20 fixed top-7 right-16 mobile:right-4 flex flex-col items-center justify-center rounded-full z-40 desktop:hover:bg-gradient-to-br from-healthcare-accent to-cyan-400"
              style={{ zIndex: 2000 }}
            >
              <Image src="/exit-icon.svg" />
            </ButtonWrapper>
            <motion.video
              src="/healthcare/videos/Automatic.MP4"
              className="w-[80%] h-[80%] desktop-qhd:w-[180rem] mobile:w-[90%] mobile:h-auto desktop:object-cover z-50 rounded-3xl mt-7 self-center"
              controls
              playsInline
              autoPlay
              onPlay={() => {
                setVideoPlaying(true);
              }}
              onPause={() => {
                setVideoPlaying(false);
              }}
              onEnded={() => {
                setShowVideo(false);
                setVideoPlaying(false);
              }}
            />

            {!isVideoPlaying && (
              <img
                src="/play-icon.svg"
                className="bg-white/5 backdrop-blur-xl p-10 rounded-full absolute self-center z-50 w-40 h-40 mobile:hidden"
              />
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

