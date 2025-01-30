import React from 'react'
import { Text } from '../atoms/text'

export default function SectionSix() {
  return (
   <main className='flex flex-col items-center text-center backdrop-blur-xl bg-healthcare-blur-background/10 w-[72rem]  desktop:p-14 desktop:py-24 gap-y-8 rounded-3xl mobile:w-[90%] mobile:p-10 mobile:pt-16 mobile:pb-14'>
        <Text className='text-5xl font-semibold desktop-qhd:text-6xl' text='Invitation for Philanthropic Donations'/>
        <Text className='text-center'>
        We call on philanthropists and visionaries to fund this worldchanging open-source initiative. Your contributions will accelerate the global expansion of this healthcare system, creating an impact on a scale never before imagined. Transparency and accountability are core to our mission, ensuring every donation is used to benefit humanity.
        </Text>
    </main>
  )
}
