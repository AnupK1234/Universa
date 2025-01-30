import ScrollToNextScreen from "@/components/ScrollToNextScreen";

const FaqWelcomeBlock = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center gap-[30px] pb-[50px] max-w-[820px]">
        <h3 className="typography-gradient-title">FAQ</h3>

        <div className="f-40 typography-title">
          Don&apos;t get it all yet? Check our Frequently Asked Questions and
          get knowledge.
        </div>
      </div>

      <ScrollToNextScreen text="scroll down" />
    </div>
  );
};

export default FaqWelcomeBlock;
