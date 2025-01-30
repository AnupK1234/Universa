"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  videoUrl?: string;
  videoTabletUrl?: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageClassName?: string;
}

const VideoBg = ({
  imageUrl,
  videoUrl,
  videoTabletUrl,
  imageWidth,
  imageHeight,
  imageClassName,
}: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [shadowBackgroundVisible, setShadowBackgroundVisible] = useState(false);

  const { width } = useWindowSize();

  const onScroll = () => {
    if (window.scrollY > window.innerHeight / 2) {
      setShadowBackgroundVisible(true);
    } else {
      setShadowBackgroundVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleMetadataLoaded = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 -z-50 w-screen h-screen bg-nuah-dark"></div>
      {videoUrl && width > 1023 && (
        <video
          className="fixed top-0 left-0 h-[100dvh] w-screen -z-40 mix-blend-lighten"
          ref={videoRef}
          loop
          muted
          controls={false}
          playsInline
          onLoadedMetadata={() => handleMetadataLoaded()}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
      {width <= 1023 && (videoTabletUrl || videoUrl) && (
        <video
          className="fixed top-0 left-0 h-[100dvh] w-screen -z-40 mix-blend-lighten"
          ref={videoRef}
          loop
          muted
          controls={false}
          playsInline
          onLoadedMetadata={() => handleMetadataLoaded()}
        >
          <source src={videoTabletUrl || videoUrl} type="video/mp4" />
        </video>
      )}
      {imageUrl && (
        <Image
          className={cn(
            "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-50",
            imageClassName,
          )}
          src={imageUrl}
          alt=""
          width={imageWidth}
          height={imageHeight}
        />
      )}
      <AnimatePresence>
        {shadowBackgroundVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ bounce: 0, duration: 0.5, ease: "linear" }}
            className="fixed top-0 left-0 w-full h-full bg-nuah-dark/40 -z-30"
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoBg;
