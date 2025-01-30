"use client";

import { useEffect, useState } from "react";
import cn from "classnames";

const ScrollToNextScreen = ({
  text,
  hideOnScroll = true,
  href,
}: {
  text: string;
  hideOnScroll?: boolean;
  href?: string;
}) => {
  const [visible, setVisible] = useState(true);

  const onScroll = () => {
    if (hideOnScroll) {
      if (window.scrollY > window.innerHeight / 2) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    }
  };

  const onClick = () => {
    if (href) {
      const el = document.querySelector(href);

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({
        left: 0,
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "absolute bottom-[50px] left-1/2 -translate-x-1/2 cursor-pointer screen-1365:bottom-[30px] screen-1023:static screen-1023:translate-x-0 transition-all",
        { ["opacity-0"]: !visible },
      )}
      onClick={() => onClick()}
    >
      <div className="flex flex-col gap-[20px] items-center bounce">
        <span className="text-[16px] text-crop">{text}</span>
        <svg
          className="mobile-bounce"
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="9"
          viewBox="0 0 17 9"
          fill="none"
        >
          <path
            d="M15.5 1L9.20711 7.29289C8.81658 7.68342 8.18342 7.68342 7.79289 7.29289L1.5 0.999999"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default ScrollToNextScreen;
