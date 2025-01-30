import ScrollToNextScreen from "@/components/ScrollToNextScreen";

const LibraryWelcomeBlock = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center gap-[30px] pb-[50px] max-w-[914px]">
        <h3 className="typography-gradient-title">Library</h3>

        <div className="f-40 typography-title">
          Explore our comprehensive library of books to understand our vision,
          goals, and predictions, shaping the future.
        </div>
      </div>

      <ScrollToNextScreen text="scroll down" />
    </div>
  );
};

export default LibraryWelcomeBlock;
