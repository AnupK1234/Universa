"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "classnames";
import { IconButton, IconClose, IconMenu } from "@nuahorg/universa-ui-kit";
import LogoIcon from "./LogoIcon";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "usehooks-ts";
import TwitterIcon from "./icons/TwitterIcon";
import YoutubeIcon from "./icons/YoutubeIcon";
import InstagramIcon from "./icons/InstagramIcon";
import TelegramIcon from "./icons/TelegramIcon";
import SpotifyIcon from "./icons/SpotifyIcon";
import RssIcon from "./icons/RssIcon";
import PodcastIndexIcon from "./icons/PodcastIndexIcon";
import DeezerIcon from "./icons/DeezerIcon";
import PodchazerIcon from "./icons/PodchazerIcon";

const LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Team",
    href: "/team",
  },
  {
    label: "Hackathons",
    href: "/hackathons",
  },
  {
    label: "Library",
    href: "/library",
  },
  {
    label: "Solutions",
    href: "/solutions",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
];

const Menu = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const { width } = useWindowSize();

  const videoRef = useRef<HTMLVideoElement>(null);

  const pathname = usePathname();

  const openMenu = () => setMenuOpened(true);

  const closeMenu = () => setMenuOpened(false);

  const onLinkClick = () => {
    closeMenu();
  };

  useEffect(() => {
    if (menuOpened) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpened]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, [menuOpened]);

  return (
    <>
      <IconButton
        onClick={() => openMenu()}
        className="fixed top-[50px] right-[50px] screen-1919:top-[40px] screen-1919:right-[40px] screen-1511:top-[30px] screen-1511:right-[30px] screen-479:top-[20px] screen-479:right-[20px] w-[50px] h-[50px] screen-1023:w-[40px] screen-1023:h-[40px] screen-767:w-[50px] screen-767:h-[50px] screen-389:w-[40px] screen-389:h-[40px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="13"
          viewBox="0 0 18 13"
          fill="none"
        >
          <path
            d="M1.61328 1.19995L16.0133 1.19995"
            stroke="#1C293C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.61328 6.34277L16.0133 6.34277"
            stroke="#1C293C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.61328 11.4856L16.0133 11.4856"
            stroke="#1C293C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </IconButton>

      <AnimatePresence>
        {menuOpened && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ bounce: 0, duration: 0.4, ease: "easeOut" }}
              className="fixed top-0 left-0 w-full h-[100svh] h-screen bg-nuah-dark"
            ></motion.div>
            <motion.div
              className="fixed top-0 left-0 w-screen h-screen z-50 p-[40px] font-yapari screen-1365:p-[30px] screen-1023:p-[40px] screen-767:p-[30px] screen-479:p-[20px]"
              initial={{ top: "100vh" }}
              animate={{ top: 0 }}
              exit={{ top: "100vh" }}
              transition={{ bounce: 0, duration: 0.4, ease: "easeOut" }}
            >
              <motion.div
                className="fixed top-0 left-0 w-screen h-screen bg-nuah-dark"
                initial={{ top: "100vh" }}
                animate={{ top: 0 }}
                exit={{ top: "100vh" }}
                transition={{ bounce: 0, duration: 0.4, ease: "easeOut" }}
              ></motion.div>
              {width > 1023 && (
                <motion.video
                  className="fixed top-0 left-0 h-[100svh] h-screen w-full mix-blend-lighten"
                  ref={videoRef}
                  loop
                  muted
                  controls={false}
                  playsInline
                  initial={{ top: "100vh" }}
                  animate={{ top: 0 }}
                  exit={{ top: "100vh" }}
                  transition={{ bounce: 0, duration: 0.4, ease: "easeOut" }}
                >
                  <source src="/videos/universa-home-bg.mp4" type="video/mp4" />
                </motion.video>
              )}
              {width <= 1023 && (
                <motion.video
                  className="fixed top-0 left-0 h-[100svh] h-screen w-full mix-blend-lighten"
                  ref={videoRef}
                  loop
                  muted
                  controls={false}
                  playsInline
                  initial={{ top: "100vh" }}
                  animate={{ top: 0 }}
                  exit={{ top: "100vh" }}
                  transition={{ bounce: 0, duration: 0.4, ease: "easeOut" }}
                >
                  <source
                    src="/videos/universa-home-tablet-bg.mp4"
                    type="video/mp4"
                  />
                </motion.video>
              )}

              <IconButton
                onClick={() => closeMenu()}
                className="absolute top-[50px] right-[50px] z-50 screen-1919:top-[40px] screen-1919:right-[40px] screen-1511:top-[30px] screen-1511:right-[30px] screen-479:top-[20px] screen-479:right-[20px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M1.6001 1.6001L14.4001 14.4001"
                    stroke="#1C293C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.3999 1.6001L1.5999 14.4001"
                    stroke="#1C293C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </IconButton>

              <div className="flex flex-col gap-[40px] h-full screen-767:max-h-[calc(100%-80px)] items-center relative z-30 screen-767:gap-[30px] screen-479:gap-[20px]">
                <Link href="/" className="" onClick={() => closeMenu()}>
                  <LogoIcon className="w-[100px] h-[100px] screen-1511:h-[70px] screen-1511:w-[70px] screen-1365:w-[50px] screen-1365:h-[50px] screen-1023:w-[100px] screen-1023:h-[100px] screen-767:h-[70px] screen-767:w-[70px] screen-479:w-[60px] screen-479:h-[60px] screen-389:hidden" />
                </Link>

                <div className="flex-1 flex flex-col gap-[5px] justify-center items-center">
                  {LINKS.map((l) => (
                    <Link
                      key={l.href}
                      className={cn(
                        "transition-all f-35 font-[400] p-[15px_30px] rounded-[100px] border-solid border-[2px] border-transparent hover:border-nuah-green screen-1511:p-[10px_25px] relative",
                        {
                          ["bg-nuah-green text-nuah-dark"]: pathname === l.href,
                          ["text-nuah-green"]: pathname !== l.href,
                        },
                      )}
                      href={l.href}
                      onClick={onLinkClick}
                    >
                      <span className="relative top-[5px]">{l.label}</span>
                    </Link>
                  ))}
                </div>

                <div className="flex gap-[10px] justify-center flex-wrap text-nuah-green screen-767:gap-[5px] screen-767:max-w-[310px]">
                  <Link
                    href="https://twitter.com/universaai"
                    target="_blank"
                    className="h-[40px] w-[40px] flex items-center justify-center rounded-full transition-all group hover:bg-nuah-green"
                  >
                    <TwitterIcon className="transition-all w-[17px] h-[17px] group-hover:text-nuah-dark" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@universaai"
                    target="_blank"
                    className="h-[40px] w-[40px] flex items-center justify-center rounded-full transition-all group hover:bg-nuah-green"
                  >
                    <YoutubeIcon className="transition-all w-[17px] h-[17px] group-hover:text-nuah-dark" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/universaai/"
                    target="_blank"
                    className="h-[40px] w-[40px] flex items-center justify-center rounded-full transition-all group hover:bg-nuah-green"
                  >
                    <InstagramIcon className="transition-all w-[17px] h-[17px] group-hover:text-nuah-dark" />
                  </Link>
                  <Link
                    href="https://t.me/+rl0XVNvbMagxNDM8"
                    target="_blank"
                    className="h-[40px] w-[40px] flex items-center justify-center rounded-full transition-all group hover:bg-nuah-green"
                  >
                    <TelegramIcon className="transition-all w-[17px] h-[17px] group-hover:text-nuah-dark" />
                  </Link>
                  <Link
                    href="https://open.spotify.com/show/6z9lFVJ56uuzTHEnVFBOl1?si=3ZHCJ0QVSg2o16Ll0W2KJg"
                    target="_blank"
                    className="h-[40px] w-[40px] flex items-center justify-center rounded-full transition-all group hover:bg-nuah-green"
                  >
                    <SpotifyIcon className="transition-all w-[17px] h-[17px] group-hover:text-nuah-dark" />
                  </Link>
                  <Link
                    href="https://feeds.buzzsprout.com/2299019.rss"
                    target="_blank"
                    className="h-[40px] w-[40px] flex items-center justify-center rounded-full transition-all group hover:bg-nuah-green"
                  >
                    <RssIcon className="transition-all w-[17px] h-[17px] group-hover:text-nuah-dark" />
                  </Link>
                  <Link
                    href="https://podcastindex.org/podcast/6748397"
                    target="_blank"
                    className="h-[40px] w-[40px] flex items-center justify-center rounded-full transition-all group hover:bg-nuah-green"
                  >
                    <PodcastIndexIcon className="transition-all w-[17px] h-[17px] group-hover:text-nuah-dark" />
                  </Link>
                  <Link
                    href="https://www.deezer.com/en/show/1000572862"
                    target="_blank"
                    className="h-[40px] w-[40px] flex items-center justify-center rounded-full transition-all group hover:bg-nuah-green"
                  >
                    <DeezerIcon className="transition-all w-[17px] h-[17px] group-hover:text-nuah-dark" />
                  </Link>
                  <Link
                    href="https://www.podchaser.com/podcasts/universa-ai-5586017"
                    target="_blank"
                    className="h-[40px] w-[40px] flex items-center justify-center rounded-full transition-all group hover:bg-nuah-green"
                  >
                    <PodchazerIcon className="transition-all w-[17px] h-[17px] group-hover:text-nuah-dark" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
