import ScrollToNextScreen from "@/components/ScrollToNextScreen";

const TeamWelcomeBlock = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center gap-[30px] pb-[50px] max-w-[820px]">
        <h3 className="typography-gradient-title">UNIVERSA team</h3>

        <div className="f-40 typography-title">
          Meet the visionaries behind our mission: a diverse team of experts
          dedicated to advancing AI for the greater good.
        </div>
      </div>

      <ScrollToNextScreen text="scroll down" />
    </div>
  );
};

export default TeamWelcomeBlock;
