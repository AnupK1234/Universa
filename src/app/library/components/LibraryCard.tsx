"use client";

import { Button, IconArrowRightAlt } from "@nuahorg/universa-ui-kit";
import Image from "next/image";
import Link from "next/link";

interface Props {
  posterUrl: string;
  title: string;
  content: string;
  link: string;
}

const LibraryCard = ({ posterUrl, title, content, link }: Props) => {
  return (
    <div className="rounded-[40px] backdrop-blur-[20px] card p-[50px] screen-1511:p-[40px] screen-1023:p-[50px] screen-767:p-[40px_20px]">
      <div className="flex items-center gap-[50px] screen-1023:flex-col screen-1511:gap-[40px] screen-1023:gap-[30px] relative">
        <div className="">
          <Image
            className="rounded-[10px]"
            width={210}
            height={300}
            src={posterUrl}
            alt={title}
          />
        </div>

        <div className="flex-1 flex flex-col gap-[30px] screen-1023:text-center">
          <h3 className="text-crop text-[30px] font-[500] text-nuah-green screen-1511:text-[26px] screen-767:text-[22px]">
            {title}
          </h3>

          <div className="text-crop screen-767:text-[14px]">{content}</div>
        </div>

        <div>
          <Link href={link} target="_blank">
            <Button
              schema="gradient"
              size="large"
              suffix={<IconArrowRightAlt />}
            >
              Read now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;
