import VideoBg from "@/components/VideoBg";
import SolutionsWelcomeBlock from "./components/SolutionsWelcomeBlock";
import { SOLUTIONS_INTRODUCTION_CARDS } from "@/constants/solutions";
import SimpleGradientBorderCardWithIcon from "@/components/SimpleGradientBorderCardWithIcon";
import SimpleGradientBorderCard from "@/components/SimpleGradientBorderCard";
import { Button, Divider, IconArrowRightAlt } from "@nuahorg/universa-ui-kit";
import TopBorderedCard from "@/components/TopBorderedCard";
import Link from "next/link";

export default function Solutions() {
  return (
    <>
      <VideoBg
        videoUrl="https://storage.googleapis.com/nuah-assets/videos/universa/solutions-bg.mp4"
        videoTabletUrl="https://storage.googleapis.com/nuah-assets/videos/universa/solutions-mobile-bg.mp4"
      />

      <main className="container text-white">
        <SolutionsWelcomeBlock />

        <div className="pt-[100px] pb-[150px] flex flex-col gap-[150px] screen-1365:pt-[100px] screen-1365:pb-[100px] screen-1365:gap-[100px] screen-767:pt-[70px] screen-767:pb-[70px] screen-767:gap-[70px] screen-479:pt-[70px] screen-479:pb-[70px] screen-389:gap-[50px] screen-389:pt-[50px] screen-389:pb-[50px]">
          <div className="flex flex-col gap-[100px]">
            <div className="flex flex-col gap-[50px] text-center self-center max-w-[914px] items-center">
              <div className="flex flex-col gap-[30px] items-center">
                <h3 className="typography-gradient-title">introduction</h3>
                <h2 className="typography-title text-crop">
                  The Future is Now – Don’t Get Left Behind
                </h2>
              </div>
              <p className="typography-paragraph text-crop">
                In an ever-changing economy, businesses that fail to adapt are
                quickly left behind. Our world-class AI transformation service
                audits your current processes, proposes tailored AI solutions,
                and seamlessly integrates them to ensure you stay competitive in
                this fast-evolving landscape. This is not just an upgrade –
                it&quot;s a complete evolution of your business model.
              </p>
            </div>
          </div>

          <Divider />

          <div className="flex flex-col gap-[100px] screen-767:gap-[70px] screen-389:gap-[50px]">
            <div className="flex flex-col gap-[50px] text-center self-center max-w-[914px] items-center">
              <div className="flex flex-col gap-[30px] items-center">
                <h3 className="typography-gradient-title">
                  Innovative AI Agents
                </h3>
                <h2 className="typography-title text-crop">
                  Your Expert AI Strategy Awaits
                </h2>
              </div>
              <p className="typography-paragraph text-crop">
                Unlock advanced AI strategies tailored to your business needs,
                including (but not limited to):
              </p>
            </div>

            <div className="grid grid-cols-2 gap-[10px] screen-1023:gap-[5px] screen-1023:grid-cols-1">
              <TopBorderedCard
                red_line="Predictive Customer Service: "
                content="Anticipate and resolve issues before they happen, boosting customer satisfaction and loyalty."
              />

              <TopBorderedCard
                red_line="Personalized Marketing at Scale: "
                content="Deliver targeted, data-driven marketing that speaks directly to individual customer preferences, increasing engagement and maximizing ROI."
              />

              <TopBorderedCard
                red_line="AI-Driven Talent Acquisition: "
                content="Streamline and optimize the recruitment process, ensuring faster, smarter hiring decisions."
              />

              <TopBorderedCard
                red_line="AI-Powered E-Commerce Solutions: "
                content="Transform your e-commerce strategy with AI-driven insights, from personalized shopping experiences to dynamic pricing and inventory management, enhancing both customer experience and operational efficiency."
              />
            </div>

            <p className="typography-paragraph text-crop text-center">
              And many more sectors poised for AI transformation.
            </p>
          </div>

          <Divider direction="rtl" />

          <div className="flex flex-col gap-[100px] screen-767:gap-[70px] screen-389:gap-[50px]">
            <div className="flex flex-col gap-[50px] text-center self-center max-w-[914px] items-center">
              <div className="flex flex-col gap-[30px] items-center">
                <h3 className="typography-gradient-title text-crop">
                  Unlock Untapped Potential
                </h3>
                <h2 className="typography-title text-crop">
                  Discover the Hidden Potential within Your Company
                </h2>
              </div>
              <p className="typography-paragraph text-crop">
                By utilizing artificial intelligence, you can automate routine
                tasks, optimize operational efficiency, and drastically reduce
                costs)  Our AI solutions are custom-designed to work with your
                unique business needs, creating new revenue streams and freeing
                up your team to focus on what truly matters.
                <br />
                <br />
                Why AI-Driven Transformation?
              </p>
            </div>

            <div className="grid grid-cols-2 gap-[10px] screen-1023:gap-[5px] screen-1023:grid-cols-1">
              <TopBorderedCard
                content={
                  <>
                    <span className="text-nuah-green">
                      Increase Efficiency:
                    </span>{" "}
                    Automate repetitive tasks, streamline workflows, and achieve
                    more with fewer resources.
                  </>
                }
              />

              <TopBorderedCard
                content={
                  <>
                    <span className="text-nuah-green">Boost Growth:</span>{" "}
                    Leverage predictive insights and data-driven strategies to
                    unlock new markets and customer segments.
                  </>
                }
              />

              <TopBorderedCard
                content={
                  <>
                    <span className="text-nuah-green">Stay Competitive:</span>{" "}
                    AI keeps your business agile and adaptable, allowing you to
                    outperform competitors and anticipate changes before they
                    happen.
                  </>
                }
              />

              <TopBorderedCard
                content={
                  <>
                    <span className="text-nuah-green">Save Costs:</span> Reduce
                    operational costs by up to{" "}
                    <span className="text-nuah-error">[X]</span>% and reinvest
                    those savings into scaling your business.
                  </>
                }
              />
            </div>
          </div>

          <Divider />

          <div className="flex flex-col gap-[100px] screen-767:gap-[70px] screen-389:gap-[50px]">
            <div className="flex flex-col gap-[50px] text-center self-center max-w-[914px] items-center">
              <div className="flex flex-col gap-[30px] items-center">
                <h3 className="typography-gradient-title text-crop">??????</h3>
                <h2 className="typography-title text-crop">
                  A Proven Path to Success
                </h2>
              </div>
              <p className="typography-paragraph text-crop">
                We&quot;ve transformed businesses across industries, helping
                them achieve key performance goals, drive growth, and increase
                profitability. Clients are seeing measurable improvements within
                months:
              </p>
            </div>

            <div className="grid grid-cols-3 gap-[10px] screen-1023:gap-[5px] screen-1023:grid-cols-1">
              <SimpleGradientBorderCard
                content={
                  <div className="flex flex-col gap-[30px] items-center">
                    <div className="typography-title text-crop text-nuah-green-light">
                      20%
                    </div>
                    Reduction in operational costs
                  </div>
                }
              />
              <SimpleGradientBorderCard
                content={
                  <div className="flex flex-col gap-[30px] items-center">
                    <div className="typography-title text-crop text-nuah-green-light">
                      30%
                    </div>
                    Improvement in process efficiency
                  </div>
                }
              />
              <SimpleGradientBorderCard
                content={
                  <div className="flex flex-col gap-[30px] items-center">
                    <div className="typography-title text-crop text-nuah-green-light">
                      Up to 40%
                    </div>
                    Faster decision-making with AI insights
                  </div>
                }
              />
            </div>

            <p className="typography-paragraph text-crop text-center">
              Let our expertise work for you. We guide you through every step,
              from the initial audit to full AI integration and support.
            </p>
          </div>

          <Divider direction="rtl" />

          {/* <div className="grid grid-cols-2 gap-[80px_50px] screen-1023:grid-cols-1 screen-1023:gap-[50px]">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-crop typography-block-title">
                Make the Leap
              </h3>

              <p className="text-crop text-[18px] screen-1365:text-[16px]">
                Our projects begin where others&apos; limits end. With contracts
                starting at $10 million USD and the capacity to scale into the
                billions, UNIVERSA Solutions is uniquely positioned to undertake
                and successfully execute projects of unprecedented scope and
                impact. This grandeur is not just in our projects&apos; scale
                but also in their ambition to drive significant, transformative
                change.
              </p>
            </div>

            <div className="flex flex-col gap-[30px]">
              <h3 className="text-crop typography-block-title">
                Unwavering Commitment to Delivery
              </h3>

              <p className="text-crop text-[18px] screen-1365:text-[16px]">
                Our promise is straightforward: we deliver precisely what&apos;s
                agreed upon in the contract. Our compensation model is designed
                around successful outcomes, with 90% of our fee contingent on
                fulfilling the contract&apos;s objectives. This ensures our
                interests are aligned with delivering the results you envision.
              </p>
            </div>

            <div className="flex flex-col gap-[30px]">
              <h3 className="text-crop typography-block-title">
                Commitment to Impact and Ethics
              </h3>

              <p className="text-crop text-[18px] screen-1365:text-[16px]">
                Choosing UNIVERSA Solutions means more than just accessing
                advanced AI technology; it&apos;s a step towards realizing
                projects with the potential to significantly impact your
                industry and society at large. Our focus on ethical AI ensures
                that these innovations promote sustainability and positive
                social outcomes.
              </p>
            </div>

            <div className="flex flex-col gap-[30px]">
              <h3 className="text-crop typography-block-title">
                Join Us in Pioneering the Future
              </h3>

              <p className="text-crop text-[18px] screen-1365:text-[16px]">
                We invite industry leaders to collaborate with our Visionary
                Architects and explore how the UNIVERSA framework can bring your
                boldest ideas to life. Whether aiming to redefine your industry
                or solve global challenges, UNIVERSA Solutions is your partner
                in achieving moonshot success.
              </p>
            </div>
          </div>

          <Divider /> */}

          <div className="flex flex-col gap-[50px] text-center self-center max-w-[914px] items-center">
            <div className="flex flex-col gap-[30px] items-center">
              <h3 className="typography-gradient-title text-crop">
                Make the Leap
              </h3>
              <h2 className="typography-title text-crop">
                Secure Your Future. The time to act is now.
              </h2>
              <p className="typography-paragraph text-crop">
                Your competitors are already adopting AI-driven strategies to
                future-proof their businesses. The decision is clear: choose
                transformation, choose growth, and choose to lead in your
                industry. The only thing standing between you and the future is
                a chat.
                <br />
                <br />
                How It Works:
              </p>
            </div>
            <div className="grid grid-cols-2 gap-[10px] screen-1023:gap-[5px] screen-1023:grid-cols-1">
              <TopBorderedCard
                red_line="Audit: "
                content="We analyze your current business processes, identifying areas where AI can have the most impact."
              />

              <TopBorderedCard
                red_line="Propose: "
                content="We design a custom AI solution tailored to your business goals."
              />

              <TopBorderedCard
                red_line="Implement: "
                content="Our team seamlessly integrates AI into your existing systems, with no downtime."
              />

              <TopBorderedCard
                red_line="Support: "
                content="We offer ongoing monitoring and optimization to ensure the AI solutions evolve with your business."
              />
            </div>
          </div>
          <Divider />
          <div className="flex flex-col gap-[50px] text-center self-center max-w-[914px] items-center">
            <div className="flex flex-col gap-[30px] items-center">
              <h3 className="typography-gradient-title text-crop">?????</h3>
              <h2 className="typography-title text-crop">
                SecureThe Only AI Transformation Partner You’ll Ever Need
              </h2>
              <p className="typography-paragraph text-crop">
                We don&quot;t just offer solutions – we deliver results. With a
                flexible KPI-based rewards system, our interests are aligned
                with your success. When you grow, we grow. Work with the
                world&quot;s leading AI transformation experts, Oxford
                University graduates, and top-tier AI engineers to drive your
                business forward.
                <br />
                <br />
                Meet the Team:
              </p>
            </div>
            <div className="grid grid-cols-2 gap-[10px] screen-1023:gap-[5px] screen-1023:grid-cols-1">
              <TopBorderedCard
                red_line="Audit: "
                content="We analyze your current business processes, identifying areas where AI can have the most impact."
              />

              <TopBorderedCard
                red_line="Propose: "
                content="We design a custom AI solution tailored to your business goals."
              />

              <TopBorderedCard
                red_line="Implement: "
                content="Our team seamlessly integrates AI into your existing systems, with no downtime."
              />

              <TopBorderedCard
                red_line="Support: "
                content="We offer ongoing monitoring and optimization to ensure the AI solutions evolve with your business."
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
