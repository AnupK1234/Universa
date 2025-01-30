import AnchorLink from "@/components/AnchorLink";
import SmallArrowDownIcon from "@/components/icons/SmallArrowDownIcon";
import ScrollToNextScreen from "@/components/ScrollToNextScreen";
import { Button } from "@nuahorg/universa-ui-kit";

const AboutWelcomeBlock = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center gap-[30px] pb-[50px] max-w-[914px] screen-1023:pb-[30px]">
        <h3 className="typography-gradient-title">About UNIVERSA</h3>

        <div className="f-40 typography-title">
          UNIVERSA aims to drive AGI development, unleashing AI&apos;s global
          transformative potential.
        </div>

        <AnchorLink href="#introduction">
          <Button
            schema="gradient"
            size="large"
            suffix={<SmallArrowDownIcon />}
          >
            Explore
          </Button>
        </AnchorLink>
      </div>

      <ScrollToNextScreen href="#introduction" text="scroll down" />
    </div>
  );
};

export default AboutWelcomeBlock;
