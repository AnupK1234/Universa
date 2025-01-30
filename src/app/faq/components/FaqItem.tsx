"use client";

import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, MouseEvent } from "react";

interface Props {
  question: string;
  answer: ReactNode;
  opened: boolean;
  onClick: () => void;
}

const FaqItem = ({ question, answer, opened, onClick }: Props) => {
  const toggleOpened = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    setTimeout(
      () =>
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 100,
          behavior: "smooth",
        }),
      400,
    );

    onClick();
  };

  return (
    <div className="flex flex-col gap-[3px] overflow-hidden">
      <div
        onClick={toggleOpened}
        className={cn(
          "p-[20px_20px_20px_30px] flex items-center text-white font-[700] rounded-[10px] transition-all min-h-[91px] text-[16px] hover:bg-white/10 cursor-pointer backdrop-blur-[20px] gap-[20px] group screen-1511:p-[15px_15px_15px_25px] screen-1511:min-h-[81px] screen-1023:p-[5px_10px_5px_20px] screen-1023:text-[14px] screen-1023:min-h-[59px]",
          { "bg-white/10": opened, "bg-white/[0.03]": !opened },
        )}
      >
        <div
          className={cn("text-crop flex-1 transition-all p-[20px_0]", {
            "text-nuah-green": opened,
          })}
        >
          {question}
        </div>

        <button className="w-[40px] h-[40px] rounded-[10px] border-[2px] border-solid border-nuah-green flex items-center justify-center group-hover:bg-nuah-green screen-1023:w-[30px] screen-1023:h-[30px]">
          <span className={cn("transition-all", { "rotate-x": opened })}>
            <svg
              className="w-[12px] h-[12px] screen-1023:w-[8px] screen-1023:h-[8px]"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
            >
              <path
                className="transition-all group-hover:stroke-nuah-dark"
                d="M1.45996 4.04193L6.91803 9.5L12.26 4.04193"
                stroke="#11F4D1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
      <AnimatePresence initial={false}>
        {opened && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              backdropFilter: "blur(0)",
              WebkitBackdropFilter: "blur(0)",
            }}
            animate={{
              opacity: 1,
              height: "auto",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
            exit={{
              opacity: 0,
              height: 0,
              backdropFilter: "blur(0)",
              WebkitBackdropFilter: "blur(0)",
            }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
          >
            <div className="text-[16px] p-[60px] font-[500] rounded-[10px] bg-white/[0.03] flex flex-col gap-[15px] screen-1511:p-[40px] screen-1023:p-[25px_20px] screen-1023:text-[14px]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;
