import React from "react";
import { Text } from "../atoms/text";

export default function SectionFive() {
  return (
    <main className="flex flex-col items-center backdrop-blur-xl bg-healthcare-blur-background/10 w-[60%] mobile:w-[90%] desktop-lg:w-[90vh] desktop-qhd:w-[80vh] mobile:mt-[7vh]  desktop:p-14 desktop:py-24 mobile:py-0 gap-y-14 rounded-3xl mobile:p-5 mobile:pt-20 mobile:pb-16">
      <Text
        className="text-5xl desktop-qhd:text-6xl font-semibold text-center"
        text="Private Membership Association"
      />
      <Text className="text-center">
        Participation in this healthcare revolution involves joining a Private
        Membership Association (PMA). By doing so, patients make a conscious
        choice to take control of their health, guided by advanced AI diagnoses
        verified by experienced human doctors. <br/><br/>This approach ensures:
      </Text>

        <span className="flex flex-col gap-y-2">
              <Text className="w-full p-12 text-center rounded-3xl bg-healthcare-blur-color/50">
               AI-empowered treatments addressing the root causes of medical
                conditions.
              </Text>
              <Text className="w-full p-12 text-center rounded-3xl bg-healthcare-blur-color/50">
              Freedom for patients to make informed decisions about their bodies.
              </Text>
              <Text className="w-full p-12 text-center rounded-3xl bg-healthcare-blur-color/50">
              Access to experimental AI-discovered cures, designed to push the boundaries of medicine.
              </Text>
            </span>
    </main>
  );
}
