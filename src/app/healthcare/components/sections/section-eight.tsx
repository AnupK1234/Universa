import React from "react";
import { Text } from "../atoms/text";

export default function SectionEight() {
  return (
    <main className="flex flex-col items-center backdrop-blur-xl bg-healthcare-blur-background/10 w-[60%] mobile:w-[90%] desktop-lg:w-[90vh] desktop-qhd:w-[80vh] mobile:mt-[58vh] p-10 py-14 desktop:py-24  gap-y-10 rounded-3xl desktop:mt-72 desktop:mb-64 desktop-qhd:mt-0 mb-10 mobile:p-5 overflow-clip mobile:pt-16 mobile:pb-14">
      <Text
        className="text-5xl desktop-qhd:text-6xl font-semibold text-center"
        text="AI-Driven Healthcare Solutions"
      />

      <span className="flex flex-col gap-y-2">
        <Text className="w-full py-7 px-7 text-center rounded-3xl bg-healthcare-blur-color/50 flex flex-col gap-y-4">
          <p className="text-healthcare-accent font-bold">AI Interactions</p>
          Speak directly with the AI doctor to analyze your medical conditions
          or explore enhancements to your body. The AI provides tailored advice,
          guiding you every step of the way.
        </Text>
        <Text className="w-full py-7 px-7 text-center rounded-3xl bg-healthcare-blur-color/50  flex flex-col gap-y-4">
          <p className="text-healthcare-accent font-bold">AI Nodes</p>
          Dedicated AI nodes work tirelessly to solve medical conditions,
          discovering cures and treatments that are immediately made open-source
          for global use. These interconnected nodes create a synergistic
          network, accelerating medical advancements at an unprecedented pace.
        </Text>
        <Text className="w-full py-7 px-7 text-center rounded-3xl bg-healthcare-blur-color/50  flex flex-col gap-y-4">
          <p className="text-healthcare-accent font-bold"> AI Medicine and Treatments</p>
          AI-driven research discovers new medicines and treatments, providing
          solutions that are revolutionary, accessible, and transformative for
          patients worldwide.
        </Text>
        <Text className="w-full py-7 px-7 text-center rounded-3xl bg-healthcare-blur-color/50  flex flex-col gap-y-4">
          <p className="text-healthcare-accent font-bold"> AI Surgery</p>
          Precision robotic surgeries, powered by AGI, deliver unmatched
          accuracy and safety, adhering to the highest standards of quality (Six
          Sigma). This approach minimizes risks and ensures optimal outcomes for
          patients.
        </Text>
        <Text className="w-full py-7 px-7 text-center rounded-3xl bg-healthcare-blur-color/50  flex flex-col gap-y-4">
          <p className="text-healthcare-accent font-bold"> Human Oversight</p>
          To ensure the utmost safety and reliability, all AI-driven
          recommendations and treatments are reviewed and verified by
          experienced human doctors, providing a dual layer of consultation.
        </Text>
      </span>
    </main>
  );
}
