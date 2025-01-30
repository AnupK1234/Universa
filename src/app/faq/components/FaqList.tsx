"use client";

import { FAQ_ITEMS } from "@/constants/faq";
import FaqItem from "./FaqItem";
import { useState } from "react";

const FaqList = () => {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  const itemClick = (index: number) => {
    setOpenedIndex(openedIndex !== index ? index : null);
  };

  return (
    <div className="flex flex-col gap-[5px] screen-1023:gap-[3px]">
      {FAQ_ITEMS.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          opened={index === openedIndex}
          onClick={() => itemClick(index)}
        />
      ))}
    </div>
  );
};

export default FaqList;
