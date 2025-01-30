import React from 'react'
import { Text } from '../atoms/text'

export default function SectionSeven() {
  return (
   <main className='flex flex-col items-center text-center backdrop-blur-xl bg-healthcare-blur-background/10 w-[72rem]  desktop:p-14 desktop:py-24 gap-y-8 rounded-3xl mobile:w-[90%] mobile:p-10 mobile:pt-16 mobile:pb-14'>
        <Text className='text-5xl font-semibold desktop-qhd:text-6xl' text='Join the Medical Revolution'/>
        <Text className='text-center'>
        We invite progressive doctors, researchers, and medical companies to partner with us. Together, we can redefine medicine, eradicate suffering, and enable humanity to thrive through the power of cutting-edge technology and AI.
        </Text>
    </main>
  )
}
