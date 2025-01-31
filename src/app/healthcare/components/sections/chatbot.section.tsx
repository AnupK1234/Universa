"use client";
import React, { useState } from "react";
import { Image } from "../atoms/image";
import { Text } from "../atoms/text";
import { motion } from "framer-motion";
import { ButtonWrapper } from "../atoms/button";
import ChatInterface from "../Chat/ChatInterface";

export default function Chatbot() {
  const [prompt, setPrompt] = useState("")
  const [componentState, setComponentState] = useState<
    "initial" | "chat" | "avatar"
  >("chat");


  return (
    <motion.section
      // className=" w-[90%] h-[90%] fixed mobile:top-12 mobile:mb-10 rounded-[3rem] bg-healthcare-background z-10 flex flex-row desktop:gap-x-10 mobile:flex-col "
      className=" w-full h-full mobile:w-[90%] mobile:h-[90%] desktop-qhd:w-[180rem] desktop-lg:w-[160rem] desktop:relative fixed mobile:top-12 mobile:mb-10 rounded-[5rem] mobile:rounded-[3rem] bg-healthcare-background z-10 flex flex-row desktop:gap-x-10 mobile:flex-col"
   
      transition={{ type: "spring", duration: 1 }}
    >
      <ChatInterface/>
    </motion.section>
  );
}

