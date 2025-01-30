import DiscordIcon from "@/components/icons/DiscordIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import VideoBg from "@/components/VideoBg";
import { Button, Divider, IconArrowRightAlt } from "@nuahorg/universa-ui-kit";
import Link from "next/link";
import HackathonWelcomeBlock from "./components/HackathonWelcomeBlock";
import { notFound } from "next/navigation";

export default function Hackathon({ params }: { params: { slug: string } }) {
  if (params.slug !== "bali-indonesia-2024-03-25") {
    return notFound();
  }

  return (
    <>
      <VideoBg
        videoUrl="https://storage.googleapis.com/nuah-assets/videos/universa/hackathons-bg.mp4"
        videoTabletUrl="https://storage.googleapis.com/nuah-assets/videos/universa/hackathons-mobile-bg.mp4"
      />

      <main className="container text-white">
        <HackathonWelcomeBlock />

        <div className="pt-[100px] pb-[150px] flex flex-col gap-[150px] screen-1365:pt-[100px] screen-1365:pb-[100px] screen-1365:gap-[100px] screen-767:pt-[70px] screen-767:pb-[70px] screen-767:gap-[70px] screen-479:pt-[70px] screen-479:pb-[70px] screen-389:gap-[50px] screen-389:pt-[50px] screen-389:pb-[50px]">
          <div className="grid grid-cols-3 gap-[20px] screen-1023:grid-cols-1 screen-1023:gap-[10px]">
            <div className="card p-[40px] rounded-[20px] bg-[rgba(208,123,255,0.1)] backdrop-blur-[20px] screen-1511:p-[40px_20px]">
              <div className="relative h-full flex flex-col gap-[30px] items-center">
                <div className="text-nuah-green text-crop text-[28px] font-bold screen-1511:text-[22px]">
                  Date
                </div>

                <div className="w-full h-[1px] bg-white/20"></div>

                <div className="text-crop text-[16px] font-[700]">
                  15-17/03/2024
                </div>
              </div>
            </div>

            <div className="card p-[40px] rounded-[20px] bg-[rgba(208,123,255,0.1)] backdrop-blur-[20px] screen-1511:p-[40px_20px]">
              <div className="relative h-full flex flex-col gap-[30px] items-center">
                <div className="text-nuah-green text-crop text-[28px] font-bold screen-1511:text-[22px]">
                  Location
                </div>

                <div className="w-full h-[1px] bg-white/20"></div>

                <div className="text-crop text-[16px] font-[700]">
                  15-17/03/2024
                </div>
              </div>
            </div>

            <div className="card p-[40px] rounded-[20px] bg-[rgba(208,123,255,0.1)] backdrop-blur-[20px] screen-1511:p-[40px_20px]">
              <div className="relative h-full flex flex-col gap-[30px] items-center">
                <div className="text-nuah-green text-crop text-[28px] font-bold screen-1511:text-[22px]">
                  Theme
                </div>

                <div className="w-full h-[1px] bg-white/20"></div>

                <div className="text-crop text-[16px] font-[700]">
                  15-17/03/2024
                </div>
              </div>
            </div>
          </div>

          <Divider />

          <div className="flex flex-col gap-[50px] text-center self-center max-w-[914px] items-center">
            <div className="flex flex-col gap-[30px] items-center">
              <h3 className="typography-gradient-title">description</h3>
              <h2 className="typography-title text-crop">
                Advancing the Frontiers of AGI
              </h2>
            </div>
            <p className="typography-paragraph text-crop">
              Description text Maecenas sed diam eget risus varius blandit sit
              amet non magna. Morbi leo risus, porta ac consectetur ac,
              vestibulum at eros. Vivamus sagittis lacus vel augue laoreet
              rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus
              commodo, tortor mauris condimentum nibh, ut fermentum massa justo
              sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas
              eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
              eros.
            </p>
          </div>

          <Divider direction="rtl" />

          <div className="flex flex-col gap-[50px] text-center self-center max-w-[914px] items-center">
            <div className="flex flex-col gap-[30px] items-center">
              <h3 className="typography-gradient-title">Recources</h3>
              <h2 className="typography-title text-crop">
                Check out the materials prepared for the event
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-[5px] w-full">
              <div className="p-[30px_0] bg-white/[0.03] rounded-[10px] backdrop-blur-[20px] text-[16px] text-crop font-[500]">
                Lorem ipsum dolor sit amet (PDF)
              </div>

              <div className="p-[30px_0] bg-white/[0.03] rounded-[10px] backdrop-blur-[20px] text-[16px] text-crop font-[500]">
                Lorem ipsum dolor sit amet (PDF)
              </div>

              <div className="p-[30px_0] bg-white/[0.03] rounded-[10px] backdrop-blur-[20px] text-[16px] text-crop font-[500]">
                Lorem ipsum dolor sit amet (PDF)
              </div>
            </div>
          </div>

          <Divider />

          <div className="flex flex-col gap-[50px] text-center self-center max-w-[914px] items-center">
            <div className="flex flex-col gap-[30px] items-center">
              <h3 className="typography-gradient-title">
                Partnerships and Support
              </h3>
              <h2 className="typography-title text-crop">
                Together we create this event
              </h2>
            </div>

            <p className="typography-paragraph text-crop">
              Description text Maecenas sed diam eget risus varius blandit sit
              amet non magna. Morbi leo risus, porta ac consectetur ac,
              vestibulum at eros. Vivamus sagittis lacus vel augue laoreet
              rutrum faucibus dolor auctor.
            </p>

            <div className="flex gap-[10px] justify-center screen-767:flex-col">
              <div className="rounded-[20px] bg-white/[0.03] p-[20px] w-[150px] h-[150px] backdrop-blur-[20px]"></div>

              <div className="rounded-[20px] bg-white/[0.03] p-[20px] w-[150px] h-[150px] backdrop-blur-[20px]"></div>

              <div className="rounded-[20px] bg-white/[0.03] p-[20px] w-[150px] h-[150px] backdrop-blur-[20px]"></div>
            </div>
          </div>

          <Divider direction="rtl" />

          <div className="flex flex-col gap-[50px] text-center self-center max-w-[914px] items-center">
            <div className="flex flex-col gap-[30px] items-center">
              <h3 className="typography-gradient-title">Join hackathon</h3>
              <h2 className="typography-title text-crop">
                Join this event and let’s explore the world together.
              </h2>
            </div>
            <Button
              schema="gradient"
              size="large"
              suffix={<IconArrowRightAlt />}
            >
              Join hackathon
            </Button>
          </div>

          <Divider />

          <div className="flex flex-col gap-[100px] screen-767:gap-[70px] screen-389:gap-[50px]">
            <div className="flex flex-col gap-[30px] items-center">
              <h3 className="typography-gradient-title">Upcoming hackathons</h3>
              <h2 className="typography-title text-crop">
                Find the Next Hackathon and Join the Game
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-[20px] screen-1023:grid-cols-1 screen-1023:gap-[10px]">
              <div className="card p-[40px] bg-white/5 backdrop-blur-[20px] rounded-[20px] screen-1511:p-[40px_20px]">
                <div className="relative h-full flex flex-col gap-[30px] items-center">
                  <div className="text-nuah-green text-crop text-[28px] font-bold screen-1511:text-[22px]">
                    Twitter
                  </div>

                  <div className="w-full h-[1px] bg-white/20"></div>

                  <div className="flex-1 text-crop text-center text-[16px]">
                    Follow us{" "}
                    <Link
                      className="text-nuah-green"
                      href="https://twitter.com/UniversaAI"
                      target="_blank"
                    >
                      @UniversaAI
                    </Link>{" "}
                    for the latest updates, discussions, and highlights from our
                    hackathons.
                  </div>

                  <div className="w-full h-[1px] bg-white/20"></div>

                  <div className="text-crop text-[16px]">Go to Twitter:</div>

                  <Link
                    className="w-[70px] h-[70px] rounded-full backdrop-blur-[20px] flex items-center justify-center bg-white/10 transition-all hover:bg-white/20"
                    href="https://twitter.com/UniversaAI"
                    target="_blank"
                  >
                    <TwitterIcon className="text-nuah-green" />
                  </Link>
                </div>
              </div>

              <div className="card p-[40px] bg-white/5 backdrop-blur-[20px] rounded-[20px] screen-1511:p-[40px_20px]">
                <div className="relative h-full flex flex-col gap-[30px] items-center">
                  <div className="text-nuah-green text-crop text-[28px] font-bold screen-1511:text-[22px]">
                    GitHub
                  </div>

                  <div className="w-full h-[1px] bg-white/20"></div>

                  <div className="flex-1 text-crop text-center text-[16px]">
                    Dive into our open source projects, contribute, and
                    collaborate on GitHub/UniversaAGI to be at the forefront of
                    AGI development.
                  </div>

                  <div className="w-full h-[1px] bg-white/20"></div>

                  <div className="text-crop text-[16px]">Go to GitHub:</div>

                  <Link
                    className="w-[70px] h-[70px] rounded-full backdrop-blur-[20px] flex items-center justify-center bg-white/10 transition-all hover:bg-white/20"
                    href="https://github.com/ArtificialGuardianAngel/A.G.A.-0.1"
                    target="_blank"
                  >
                    <GithubIcon />
                  </Link>
                </div>
              </div>

              <div className="card p-[40px] bg-white/5 backdrop-blur-[20px] rounded-[20px] screen-1511:p-[40px_20px]">
                <div className="relative h-full flex flex-col gap-[30px] items-center">
                  <div className="text-nuah-green text-crop text-[28px] font-bold screen-1511:text-[22px]">
                    Discord
                  </div>

                  <div className="w-full h-[1px] bg-white/20"></div>

                  <div className="flex-1 text-crop text-center text-[16px]">
                    Join our vibrant community on Discord for real-time
                    conversations, networking, and collaborative opportunities
                    in the AGI space.
                  </div>

                  <div className="w-full h-[1px] bg-white/20"></div>

                  <div className="text-crop text-[16px]">Go to Discord:</div>

                  <Link
                    className="w-[70px] h-[70px] rounded-full backdrop-blur-[20px] flex items-center justify-center bg-white/10 transition-all hover:bg-white/20"
                    href="https://discord.gg/UzWYN2PXPP"
                    target="_blank"
                  >
                    <DiscordIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
