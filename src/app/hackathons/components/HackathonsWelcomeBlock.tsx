import AnchorLink from "@/components/AnchorLink";
import SmallArrowDownIcon from "@/components/icons/SmallArrowDownIcon";
import ScrollToNextScreen from "@/components/ScrollToNextScreen";
import { Button } from "@nuahorg/universa-ui-kit";

const HackathonsWelcomeBlock = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center gap-[30px] pb-[50px] max-w-[914px] screen-1365:max-w-[720px] screen-1023:pb-0">
        <h3 className="typography-gradient-title">Hackathons</h3>

        <div className="f-40 typography-title">
          Pioneering AGI&apos;s future through innovative engineering
          challenges, advancing the boundaries of AI.
        </div>

        <AnchorLink href="#upcoming-events">
          <Button
            schema="gradient"
            size="large"
            suffix={<SmallArrowDownIcon />}
          >
            Upcoming Events
          </Button>
        </AnchorLink>

        <ScrollToNextScreen text="scroll down" />
      </div>
    </div>
  );
};

export default HackathonsWelcomeBlock;
