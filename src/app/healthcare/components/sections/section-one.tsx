import React from 'react'
import { Text } from '../atoms/text'
import { Image } from '../atoms/image'

export default function SectionOne() {
  return (
    <main className='flex flex-col items-center gap-y-4 w-full' id='initial'>
        <Text className='font-bold text-7xl desktop-qhd:text-9xl  text-center'>
        UNIVERSA Healthcare<br/>
        A New Era in Medicine
        </Text>

        <Text className='desktop-qhd:text-4xl'>scroll to explore</Text>
        <Image className='' src='/arrow-down.svg'/>
    </main>
  )
}
