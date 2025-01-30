import VideoBg from "@/components/VideoBg";
import HackathonsWelcomeBlock from "./components/HackathonsWelcomeBlock";
import { Button, Divider, IconArrowRightAlt } from "@nuahorg/universa-ui-kit";
import HackathonsList from "./components/HackathonsList";
import TopBorderedCard from "@/components/TopBorderedCard";
import { cmsApi } from "@/lib/cms.provider";
import { HackathonCalendar } from "./components/HackathonCalendar";
import ToolItem from "./components/ToolItem";
import { SocialCard } from "./components/SocialCard";
import { RegistrationForm } from "./components/RegistrationForm";
export const fetchCache = "force-no-store";

export default async function Hackathons() {
  const display = await cmsApi.getDisplayHackathons();
  const hackathons = await cmsApi.getHackathonList();
  return (
    <>
      <VideoBg
        videoUrl="https://storage.googleapis.com/nuah-assets/videos/universa/hackathons-bg.mp4"
        videoTabletUrl="https://storage.googleapis.com/nuah-assets/videos/universa/hackathons-mobile-bg.mp4"
      />

      <main className="container text-white">
        <HackathonsWelcomeBlock />

        <div className="pt-[150px] pb-[150px] flex flex-col gap-[150px] screen-1365:pt-[100px] screen-1365:pb-[100px] screen-1365:gap-[100px] screen-767:pt-[30px] screen-767:pb-[30px] screen-767:gap-[70px] screen-479:pt-[20px] screen-479:pb-[20px] screen-389:gap-[50px]">
          <div className="flex flex-col gap-[50px] text-center self-center items-center">
            <div className="flex flex-col gap-[30px] items-center">
              <h3 className="typography-gradient-title text-crop">
                introduction
              </h3>
              <h2 className="typography-title text-crop max-w-[914px]">
                Accelerate Your Journey to Top Developer: Tackle Real-World AI
                Challenges
              </h2>
            </div>
            <p className="typography-paragraph text-crop">
              Why Join Our Hackathons?
            </p>
            <div className="grid grid-cols-5 gap-[10px] screen-1023:gap-[5px] screen-1023:grid-cols-1">
              {[
                "Hands-on experience with the latest Generative AI models",
                "Global collaboration with senior developers",
                "Portfolio growth",
                "Prizes ranging from $150 to $1000 USD",
                "Real-world problem-solving opportunities",
              ].map((item, i) => (
                <TopBorderedCard
                  className="text-start"
                  key={i}
                  content={item}
                />
              ))}
            </div>
            <p className="typography-paragraph text-crop">
              The participation process is simple:
            </p>

            <div className="grid grid-cols-4 gap-[10px] screen-1023:gap-[5px] screen-1023:grid-cols-1">
              <TopBorderedCard
                className="text-start flex-shrink-0"
                content={
                  <div className="flex flex-col gap-[30px] h-full">
                    Select bounty challenges aligned with your interests.
                    <div>
                      <Button>Go to challenge list</Button>
                    </div>
                  </div>
                }
              />
              <TopBorderedCard
                className="text-start"
                content={
                  <div className="flex flex-col gap-[30px] h-full">
                    <p>
                      Check the dates.
                      <div className="opacity-0">
                        <span>asdasdas</span>
                      </div>
                    </p>
                    <div>
                      <Button>Go to calendar</Button>
                    </div>
                  </div>
                }
              />
              <TopBorderedCard
                className="text-start"
                content={
                  <div className="flex flex-col gap-[30px] h-full">
                    Fill out our form to secure your spot.
                    <div>
                      <Button>Join the challenge</Button>
                    </div>
                  </div>
                }
              />
              <TopBorderedCard
                className="text-start"
                content={
                  <div className="flex flex-col gap-[30px] h-full">
                    If you meet the requirements, we will send a welcome email
                    or notify you if your application is rejected.
                  </div>
                }
              />
            </div>
            <p className="typography-paragraph text-crop">
              Watch the video explaining our goals:
            </p>
          </div>

          <Divider />

          <div className="flex flex-col gap-[50px] text-center self-center max-w-[914px] items-center">
            <div className="flex flex-col gap-[30px] items-center">
              {/* <h3 className="typography-gradient-title text-crop">aga</h3> */}
              <h2 className="typography-title text-crop">
                Minimum Requirements
              </h2>
            </div>
            <div className="grid grid-cols-4 gap-[10px] screen-1023:gap-[5px] screen-1023:grid-cols-1 text-start">
              {[
                "Proficiency in Python",
                "Basic understanding of computer science fundamentals",
                "Experience in building applications",
                "Submission of a resume or portfolio here",
              ].map((text, i) => (
                <TopBorderedCard key={i} content={text} />
              ))}
            </div>
          </div>

          <Divider direction="rtl" />

          <div className="flex flex-col gap-[50px] text-center self-center items-center w-full">
            <div className="flex flex-col gap-[30px] items-center max-w-[914px]">
              <h3 className="typography-gradient-title text-crop">Join us</h3>
              <h2 className="typography-title text-crop">
                Find the Next Hackathon and Join the Game
              </h2>
            </div>

            <p className="typography-paragraph text-crop max-w-[914px]">
              We offer 48-hour Bounties challenges for beginners and 1-month
              challenges with higher prizes, exclusively for participants of our
              48-hour Bounties challenges and for senior developers.
              <br />
              <br />
              All challenges:
            </p>

            <HackathonsList hackathons={display.hackathons} />

            <div className="flex flex-col gap-[30px] items-center max-w-[914px]">
              <h2 className="typography-title text-crop">Check the calendar</h2>
            </div>
            <HackathonCalendar hackathons={hackathons} />
            <div className="flex flex-col gap-[30px] items-center max-w-[914px]">
              <h2 className="typography-title text-crop">Registration form</h2>
            </div>
            <RegistrationForm hackathons={display.hackathons} />
          </div>

          <Divider />

          <div className="flex flex-col gap-[50px] text-center self-center items-center">
            <div className="flex flex-col gap-[30px] items-center max-w-[914px] ">
              <h3 className="typography-gradient-title text-crop">
                Tools & Resources
              </h3>
              <h2 className="typography-title text-crop">
                Essential Tools for AI Engineers
              </h2>
            </div>

            <p className="typography-paragraph text-crop max-w-[914px] ">
              A summary of various tools and platforms useful for AI engineers,
              covering development assistance, model creation, and workflow
              automation.
            </p>

            <div className="grid grid-cols-2 gap-[10px] screen-1023:gap-[5px] screen-1023:grid-cols-1 text-start w-full">
              {display.tools.map((tool, i) => (
                <ToolItem key={i} tool={tool} />
              ))}
            </div>

            {/* <Button
              schema="gradient"
              size="large"
              suffix={<SmallArrowDownIcon />}
            >
              upcoming events
            </Button> */}
          </div>

          <Divider direction="rtl" />

          <div className="flex flex-col gap-[100px] screen-767:gap-[70px] screen-389:gap-[50px]">
            <div className="flex flex-col gap-[30px] items-center">
              <h3 className="typography-gradient-title text-crop">
                contact us
              </h3>
              <h2 className="typography-title text-crop">
                For any questions, feel free to contact us!
              </h2>

              <Button
                schema="gradient"
                size="large"
                suffix={<IconArrowRightAlt />}
              >
                Write us
              </Button>
            </div>
          </div>

          <Divider />
          <div className="flex flex-col gap-[100px] screen-767:gap-[70px] screen-389:gap-[50px]">
            <div className="flex flex-col gap-[30px] items-center">
              <h3 className="typography-gradient-title text-crop">
                Connect with us
              </h3>
              <h2 className="typography-title text-crop">Stay updated!</h2>
              <div className="grid grid-cols-3 gap-[10px] screen-1023:gap-[5px] screen-1023:grid-cols-1 text-start w-full">
                <SocialCard type="twitter" link={display.twitter_link} />
                <SocialCard type="github" link={display.github_link} />
                <SocialCard type="discord" link={display.discord_link} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
