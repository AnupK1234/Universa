import VideoBg from "@/components/VideoBg";
import TeamWelcomeBlock from "./components/TeamWelcomeBlock";
import TeamList from "./components/TeamList";

export default function Team() {
  return (
    <>
      <VideoBg
        videoUrl="https://storage.googleapis.com/nuah-assets/videos/universa/team-bg.mp4"
        videoTabletUrl="https://storage.googleapis.com/nuah-assets/videos/universa/team-mobile-bg.mp4"
      />

      <main className="container text-white">
        <TeamWelcomeBlock />

        <div className="pt-[100px] pb-[150px] flex flex-col gap-[150px] screen-1365:pt-[100px] screen-1365:pb-[100px] screen-1365:gap-[100px] screen-767:pt-[70px] screen-767:pb-[70px] screen-767:gap-[70px] screen-479:pt-[70px] screen-479:pb-[70px] screen-389:gap-[50px] screen-389:pt-[50px] screen-389:pb-[50px]">
          <TeamList />
        </div>
      </main>
    </>
  );
}
