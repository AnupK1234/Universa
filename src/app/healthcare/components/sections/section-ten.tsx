import React from 'react'
import { Text } from '../atoms/text'
// import { Button } from '../atoms/button'
import Link from 'next/link'

export default function SectionTen() {
  return (
   <main className='flex flex-col text-center items-center backdrop-blur-xl bg-healthcare-blur-background/10 w-[72rem]  desktop:p-14 desktop:py-24 gap-y-8 rounded-3xl mobile:w-[90%] mobile:py-10 mobile:px-7 mobile:pt-16 mobile:pb-14'>
        <Text className='text-5xl font-semibold text-center desktop-qhd:text-6xl' text='The Panacea Solution'/>
        <Text className='text-center'>
        Inspired by Panacea, the Greek goddess of universal healing, this initiative strives to eliminate all diseases and elevate the human experience. Join us in rewriting human history and building a benevolent future where health and human potential know no bounds.
        </Text>

        <Text className='font-bold'>
        Take the first step today and be a part of the global healthcare transformation!
        </Text>

        <Link href={"mailto:healthcare@universa.org"} target='_blank'  className='py-8 px-12  font-cera font-semibold w-fit bg-healthcare-accent text-black flex flex-col h-fit rounded-full text-xl' >
        CONTACT US
        </Link>
    </main>
  )
}
