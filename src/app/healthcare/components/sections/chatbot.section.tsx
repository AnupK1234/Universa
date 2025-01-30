"use client";
import React, { useState } from "react";
import { Image } from "../atoms/image";
import { Text } from "../atoms/text";
import { motion } from "framer-motion";
import { ButtonWrapper } from "../atoms/button";

export default function Chatbot() {
  const [prompt, setPrompt] = useState("")
  return (
    <motion.section
      // className=" w-[90%] h-[90%] fixed mobile:top-12 mobile:mb-10 rounded-[3rem] bg-healthcare-background z-10 flex flex-row desktop:gap-x-10 mobile:flex-col "
      className=" w-full h-full mobile:w-[90%] mobile:h-[90%] desktop-qhd:w-[180rem] desktop-lg:w-[160rem] desktop:relative fixed mobile:top-12 mobile:mb-10 rounded-[5rem] mobile:rounded-[3rem] bg-healthcare-background z-10 flex flex-row desktop:gap-x-10 mobile:flex-col"
   
      transition={{ type: "spring", duration: 1 }}
    >
      <Image
        src="/healthcare/images/ai.jpeg"
        className="h-full mobile:h-60  mobile:w-full object-cover desktop:rounded-l-[5rem] mobile:rounded-t-[3rem]"
      />

      <div className="flex flex-col mobile:h-full mobile:overflow-y-scroll mobile:pb-10 desktop:w-[70%] mt-10 desktop:pr-32 desktop:ml-14 desktop:mt-20 relative mobile:px-2">
        <span className="flex flex-row mobile:flex-col mobile:px-7 gap-x-10">
          <Text
            text="Doc:"
            className="font-bold text-healthcare-accent desktop-qhd:text-4xl"
          />

          <div className="flex flex-col mobile:w-full ">
            <Text
              text="Coming Soon!"
              className="font-bold text-white desktop-qhd:text-4xl"
            />
            <Text className="desktop-qhd:text-4xl mt-4 leading-9">
              Engage in natural conversations with our advanced AI doctor!
              You’ll be able to chat or speak with her, upload your medical
              files, and even have video consultations. With this innovative
              technology, she will provide personalized advice on how to enhance
              your health and unlock new possibilities for your well-being.
              <br className="mobile:hidden" /> <br className="mobile:hidden" />
              Stay tuned for a revolutionary approach to healthcare!
            </Text>

            <div className="flex flex-row absolute bottom-20 mobile:bottom-10 desktop:right-10 w-full bg-healthcare-background items-center  mobile:w-[90%] self-center">
              <img
                className="absolute left-7 mobile:left-2"
                src="/healthcare/icons/document.svg"
              />
              <input
                className="w-full border border-[#717EAC] bg-transparent rounded-full focus:outline-white/10 p-5 text-white placeholder-[#717EAC] h-28 mobile:h-20 pl-32 desktop:pr-64 desktop-qhd:pr-[10%] mobile:pl-24 mobile:pr-44"
                placeholder="Type here"
                value={prompt}
                onChange={(e)=>{setPrompt(e.target.value)}}
              />
              <span className="absolute right-7 mobile:right-0 flex flex-row gap-x-2">
                <Image className={`${prompt ? "opacity-100": "opacity-10"}`} src="/healthcare/icons/send.svg" />
                <Image src="/healthcare/icons/voice.svg" />
                <Image className="mobile:hidden" src="/healthcare/icons/camera.svg" />
              </span>
            </div>
          </div>
        </span>

        {/* <input className='rounded-3xl bg-transparent border border-[#717EAC]'>
      </input> */}
      </div>
    </motion.section>
  );
}

