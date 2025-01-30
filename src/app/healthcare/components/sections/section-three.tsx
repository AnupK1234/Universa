import React from 'react'
import { Text } from '../atoms/text'
import {motion} from "framer-motion"

export default function SectionThree() {
  return (
    <motion.main
    className=" flex flex-col desktop:items-center  backdrop-blur-xl bg-healthcare-blur-background/10 w-fit desktop:p-14 desktop:py-24 gap-y-8 rounded-3xl mobile:w-[90%] mobile:p-10 mobile:pt-16 mobile:pb-14"
   
  >
    <Text
      className="text-5xl desktop-qhd:text-6xl font-semibold text-center"
      text="Consult the AI Doctor for Free"
    />
    <Text className="text-center">
      Imagine having access to an AI doctor capable of analyzing your health,
      offering
      <br className="mobile:hidden" />
      personalized advice, and guiding you toward optimal wellness. Click the
      button below
      <br className='mobile:hidden'/>
      and consult the AI doctor today.
    </Text>
  </motion.main>
  
  )
}
