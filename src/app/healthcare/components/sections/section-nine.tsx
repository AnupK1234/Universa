import React from 'react'
import { Text } from '../atoms/text'

export default function SectionNine() {
  return (
   <main className='flex flex-col desktop:items-center backdrop-blur-xl bg-healthcare-blur-background/10 w-[72rem] desktop:p-14 desktop:py-24 gap-y-8 rounded-3xl mobile:w-[90%] mobile:p-10 mobile:pt-16 mobile:pb-14'>
        <Text className='text-5xl font-semibold text-center desktop-qhd:text-6xl' text='Ocean Hospital'/>
        <Text className='text-center'>
        Patients will have access to a state-of-the-art medical facility aboard a luxury ship in international waters. Operating under a sovereign flag, this futuristic hospital will provide advanced experimental treatments in a serene, five-star environment, offering unparalleled care.
        </Text>
    </main>
  )
}
