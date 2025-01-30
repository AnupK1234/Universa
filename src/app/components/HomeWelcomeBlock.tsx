import ScrollToNextScreen from "@/components/ScrollToNextScreen";
import NavItem from "./NavItem";

const HomeWelcomeBlock = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-[60px] relative screen-1511:gap-[40px] screen-1365:gap-[30px] screen-1023:gap-[50px] screen-389:gap-[30px] screen-767:min-h-[auto] screen-767:pt-[110px] screen-479:pt-[90px]">
      <div className="flex flex-col items-center gap-[40px] max-w-[900px] screen-1511:gap-[30px] screen-1365:gap-[20px] screen-1023:gap-[30px] screen-479:gap-[25px] screen-389:gap-[20px]">
        <h4 className="f-30 font-[500]">Welcome to</h4>

        <h1 className="f-60 font-[800] font-yapari">UNIVERSA</h1>

        <p className="f-30 font-[500] text-center">
          An ambitious open-source initiative aimed at transcending traditional
          AI development.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-[10px] screen-1023:grid-cols-2 screen-767:grid-cols-1 screen-767:gap-[5px]">
        <NavItem
          link="https://aga.universa.org"
          title="AGA"
          text="Discover the Artificial Guardian Angel"
        />

        <NavItem
          link="https://movement.universa.org"
          title="Movement"
          text="Join the UNIVERSA community as AI enthusiast"
        />

        <NavItem
          link="https://nuah.universa.org"
          title="NUAH"
          text="Get your AI empowered money"
          disabled
        />

        <NavItem
          link="#"
          title="AI Agent Creator"
          text="Create your own UNIVERSA AI Agent"
          disabled
        />
      </div>

      <ScrollToNextScreen text="Play video" hideOnScroll={false} />
    </div>
  );
};

export default HomeWelcomeBlock;
