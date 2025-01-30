import Image from "next/image";
import { Button, IconArrowRightAlt } from "@nuahorg/universa-ui-kit";
import VideoBg from "@/components/VideoBg";
import HomeWelcomeBlock from "./components/HomeWelcomeBlock";
import VideoPlayer from "@/components/VideoPlayer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <VideoBg
        videoUrl="https://storage.googleapis.com/nuah-assets/videos/universa/universa-home-bg.mp4"
        videoTabletUrl="https://storage.googleapis.com/nuah-assets/videos/universa/universa-home-tablet-bg.mp4"
      />

      <main className="container text-white">
        <HomeWelcomeBlock />

        <div className="pt-[100px] pb-[150px] flex flex-col gap-[150px] screen-1365:pt-[100px] screen-1365:pb-[100px] screen-1365:gap-[100px] screen-767:pt-[50px] screen-767:pb-[70px] screen-767:gap-[50px] screen-479:pt-[50px] screen-479:pb-[70px] screen-389:gap-[50px] screen-389:pt-[50px] screen-389:pb-[50px]">
          <div className="flex flex-col gap-[50px]">
            <div className="flex flex-col gap-[30px] items-center text-center">
              <h3 className="typography-gradient-title">Introduction</h3>

              <h2 className="typography-title f-40">Meet UNIVERSA</h2>
            </div>

            <div className="screen-1511:max-w-[924px] screen-1365:max-w-[734px] w-full m-auto">
              <VideoPlayer
                videoCode="9B0xao_jB-k"
                videoPlaceholderUrl="/img/about-video-placeholder.jpeg"
              />
            </div>

            <Link className="self-center screen-767:self-stretch" href="/about">
              <Button
                className="w-full"
                schema="gradient"
                size="large"
                suffix={<IconArrowRightAlt />}
              >
                read more
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

