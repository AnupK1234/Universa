import AnchorLink from "@/components/AnchorLink";
import ScrollToNextScreen from "@/components/ScrollToNextScreen";
import { Button, IconArrowRightAlt } from "@nuahorg/universa-ui-kit";

const HackathonWelcomeBlock = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center gap-[30px] pb-[50px] max-w-[914px]">
        <h3 className="typography-gradient-title">Hackathon details</h3>

        <div className="f-40 typography-title">Hackathon: Bali, Indonesia</div>

        <p className="text-crop typography-title">15-17/03/2024</p>

        <AnchorLink href="#join">
          <Button schema="gradient" size="large" suffix={<IconArrowRightAlt />}>
            Join Hackathon
          </Button>
        </AnchorLink>

        <ScrollToNextScreen text="scroll down" />
      </div>
    </div>
  );
};

export default HackathonWelcomeBlock;
