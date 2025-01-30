import React from "react";
import { Text } from "../atoms/text";

export default function SectionFour() {
  return (
    <main className="flex flex-col desktop:items-center backdrop-blur-xl bg-healthcare-blur-background/10 w-fit  desktop:p-14 desktop:py-24 gap-y-8 rounded-3xl mobile:w-[90%] mobile:p-10 mobile:pt-16 mobile:pb-14">
      <Text
        className="text-5xl font-semibold text-center desktop-qhd:text-6xl"
        text="The Universal Healthcare System"
      />
      <Text className="text-center">
        Picture a healthcare system that eradicates diseases, eliminates
        suffering, and goes
        <br className="mobile:hidden" />
        further to enhance the human body through preventative measures and
        advanced
        <br className="mobile:hidden" />
        upgrades. This transformative approach represents a future where
        healthcare is not just
        <br className="mobile:hidden" />a service but a foundation for a
        healthier, more capable humanity.
      </Text>
    </main>
  );
}

