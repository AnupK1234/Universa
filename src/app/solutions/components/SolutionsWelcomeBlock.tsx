import ScrollToNextScreen from "@/components/ScrollToNextScreen";

const SolutionsWelcomeBlock = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center gap-[30px] pb-[50px] max-w-[914px]">
        <h3 className="typography-gradient-title f-22">AI Solutions</h3>

        <div className="f-40 typography-title">
          Transform your business for the future. Stay competitive. Grow faster.
          Become AI native.
        </div>
      </div>

      <ScrollToNextScreen text="scroll down" />
    </div>
  );
};

export default SolutionsWelcomeBlock;
