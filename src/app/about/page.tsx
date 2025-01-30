import VideoBg from "@/components/VideoBg";
import AboutWelcomeBlock from "./components/AboutWelcomeBlock";
import VideoPlayer from "@/components/VideoPlayer";
import { Divider } from "@nuahorg/universa-ui-kit";
import TopBorderedCard from "@/components/TopBorderedCard";
import GradientBorderCardWithIcon from "@/components/GradientBorderCardWithIcon";
import { ABOUT_BIG_CARDS } from "@/constants/about";
import NavItem from "../components/NavItem";

export default function About() {
  return (
    <>
      <VideoBg
        videoUrl="https://storage.googleapis.com/nuah-assets/videos/universa/about-bg.mp4"
        videoTabletUrl="https://storage.googleapis.com/nuah-assets/videos/universa/about-mobile-bg.mp4"
      />

      <main className="container text-white">
        <AboutWelcomeBlock />

        <div className="pt-[100px] pb-[150px] flex flex-col gap-[150px] screen-1365:pt-[100px] screen-1365:pb-[100px] screen-1365:gap-[100px] screen-767:pt-[70px] screen-767:pb-[70px] screen-767:gap-[70px] screen-479:pt-[70px] screen-479:pb-[70px] screen-389:gap-[50px] screen-389:pt-[50px] screen-389:pb-[50px] relative">
          <div
            className="absolute opacity-0 top-[-50px]"
            id="introduction"
          ></div>
          <div className="flex flex-col gap-[50px]">
            <div className="flex flex-col gap-[30px] items-center">
              <h3 className="typography-gradient-title">Introduction</h3>
              <h2 className="typography-title text-crop">
                Engineering the Future with AGI.
              </h2>
            </div>

            <p className="text-crop typography-paragraph text-center max-w-[914px] m-auto">
              UNIVERSA drives Artificial General Intelligence (AGI) development,
              aiming to unleash AI&apos;s transformative potential worldwide. We
              focus on the UNIVERSA framework, crafting advanced AI agents to
              tackle complex global challenges.
            </p>

            <div className="screen-1511:max-w-[924px] screen-1365:max-w-[734px] w-full m-auto">
              <VideoPlayer
                videoCode="9B0xao_jB-k"
                videoPlaceholderUrl="/img/about-video-placeholder.jpeg"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[50px] text-center self-center max-w-[914px] items-center">
            <div className="flex flex-col gap-[30px] items-center">
              <h3 className="typography-gradient-title">AGA</h3>
              <h2 className="typography-title text-crop">
                The Artificial Guardian Angel
              </h2>
            </div>
            <p className="typography-paragraph text-crop">
              Central to our mission is the creation of the Artificial Guardian
              Angel (AGA), a pioneering project aimed at developing a
              superintelligence focused on benevolence and global betterment.
              AGA’s purpose transcends conventional AI applications, aspiring to
              be an ally to humanity by promoting benevolent, intelligent
              solutions that benefit all aspects of society and the environment.
            </p>
          </div>

          <div className="flex flex-col gap-[80px]">
            <Divider />

            <div className="flex flex-col gap-[50px]">
              <h3 className="typography-block-title text-crop text-center">
                UNIVERSA is committed to:
              </h3>

              <div className="flex gap-[10px] screen-1023:flex-col screen-1023:gap-[3px]">
                <TopBorderedCard content="AGI Solutions Development: We're building adaptable, intelligent systems that learn and evolve to address a broad spectrum of problems." />

                <TopBorderedCard content="Collaborative Innovation: UNIVERSA collaborates with developers, industries, and organizations to leverage AI for impactful applications." />

                <TopBorderedCard content="Promoting Benevolent AI: Our approach prioritizes the development and deployment of AI technologies under the strictest benevolent guidelines." />
              </div>
            </div>

            <Divider direction="rtl" />
          </div>

          <div className="flex flex-col gap-[100px] screen-767:gap-[70px] screen-389:gap-[50px]">
            <div className="flex flex-col gap-[30px] items-center">
              <h3 className="typography-gradient-title">milestones</h3>
              <h2 className="typography-title text-crop text-center">
                The main objectives of UNIVERSA
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-[10px] screen-1023:gap-[5px] screen-1023:grid-cols-1">
              {ABOUT_BIG_CARDS.map((item, index) => (
                <GradientBorderCardWithIcon
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[50px]">
            <div className="flex flex-col gap-[50px] text-center self-center max-w-[914px] items-center screen-767:gap-[40px]">
              <div className="flex flex-col gap-[30px] items-center">
                <h3 className="typography-gradient-title">Join UNIVERSA</h3>
                <h2 className="typography-title text-crop">
                  Unlock AI&apos;s potential for global advancement
                </h2>
              </div>

              <p className="typography-paragraph text-crop">
                We invite those who envision a future where AI enhances human
                potential in harmony with our world to join UNIVERSA. Together,
                we can realize a vision where AI, through UNIVERSA and AGA, acts
                as a steward of humanity, guiding us toward a smarter, more
                sustainable, and empathetic future.
              </p>

              <div className="grid grid-cols-2 gap-[10px] text-start w-full screen-767:grid-cols-1 screen-479:gap-[5px]">
                <NavItem
                  link="https://aga.universa.org"
                  title="Aga"
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
