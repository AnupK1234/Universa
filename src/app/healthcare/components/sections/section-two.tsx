import React from "react";
import { Text } from "../atoms/text";

export default function SectionTwo() {
  return (
    <main className="flex flex-col items-center backdrop-blur-xl bg-healthcare-blur-background/10 w-[60%] mobile:w-[90%] desktop-lg:w-[90vh] desktop-qhd:w-[80vh] mobile:mt-[14vh]  desktop:p-14 desktop:py-24 mobile:py-0 gap-y-14 rounded-3xl mobile:p-5 mobile:pt-16 mobile:pb-14">
      <Text className="text-5xl font-semibold desktop-qhd:text-6xl" text="Introduction" />
      <Text className="text-center">
        {
          "We believe that Artificial General Intelligence (AGI) is the key to unlocking an open-source, affordable, and universally accessible healthcare system. This system aims to disrupt the expensive proprietary medical models that have failed so many, offering abundant, cutting-edge healthcare solutions for all. Our mission is to create a healthcare framework that:"
        }
      </Text>

      <span className="flex flex-col gap-y-2 desktop-qhd:text-3xl">
        <Text className="w-full p-12 text-center rounded-3xl bg-healthcare-blur-color/50">
          AI-empowered treatments addressing the root causes of medical
          conditions.
      </Text>
        <Text className="w-full p-12 text-center rounded-3xl bg-healthcare-blur-color/50">
          Cures all existing diseases and conditions at a foundational level.
        </Text>
        <Text className="w-full p-12 text-center rounded-3xl bg-healthcare-blur-color/50">
          Enhances human capabilities, extending longevity, rejuvenating the
          body, and
          <br />
          introducing possibilities like new senses and physical upgrades.
        </Text>
      </span>

      <Text className="text-center">
        This is not just about solving problems, it's about elevating the human
        experience.
      </Text>
    </main>
  );
}
