"use client";

import Image from "next/image";
import { useState } from "react";
import ReactPlayer from "react-player";

interface Props {
  videoCode: string;
  videoPlaceholderUrl: string;
}

const VideoPlayer = ({ videoCode, videoPlaceholderUrl }: Props) => {
  const [videoStarted, setVideoStarted] = useState(false);

  const startVideo = () => setVideoStarted(true);

  return (
    <div className="w-full aspect-video rounded-[20px] overflow-hidden relative">
      <ReactPlayer
        width={"100%"}
        height={"100%"}
        url={`https://www.youtube.com/watch?v=${videoCode}`}
        controls
        playing={videoStarted}
      />

      {!videoStarted && (
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            className="object-cover object-[center_calc(50%-150px)] screen-767:object-center"
            src={videoPlaceholderUrl}
            alt=""
            fill
          />

          <div className="absolute top-0 left-0 w-full h-full video-placeholder-bg"></div>

          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[130px] h-[130px] bg-white/[0.03] flex items-center justify-center backdrop-blur-[20px] screen-1511:w-[90px] screen-1511:h-[90px] screen-767:w-[50px] screen-767:h-[50px]  transition-all hover:bg-white/10 cursor-pointer"
            onClick={startVideo}
          >
            <svg
              className="screen-1511:h-[45px] screen-1511:w-[45px] screen-767:h-[22px] screen-767:w-[22px]"
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
            >
              <path d="M14 0V70L69 35L14 0Z" fill="white" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
