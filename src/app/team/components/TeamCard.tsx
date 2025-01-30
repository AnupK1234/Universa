import Image from "next/image";
import Link from "next/link";

interface Props {
  image: string;
  name: string;
  role: string;
  quote: string;
  linkedIn?: string;
}

const TeamCard = ({ image, name, role, quote, linkedIn }: Props) => {
  return (
    <div className="flip-wrapper h-[350px] screen-1511:h-[300px] screen-1023:h-[260px] screen-389:h-[240px] bg-nuah-dark">
      <div className="flip-inner">
        {/*  */}
        <div className="flip-front">
          <div className="p-[30px_20px] card rounded-[20px] cursor-pointer screen-1023:p-[20px_15px] h-full">
            <div className="flex-1 flex flex-col gap-[30px] items-center text-center screen-1023:gap-[20px]">
              <Image
                className="rounded-full screen-1511:w-[170px] screen-1511:h-[170px] screen-1023:w-[130px] screen-1023:h-[130px]"
                src={image}
                alt=""
                width={200}
                height={200}
              />

              <div className="flex flex-col gap-[15px]">
                <div className="f-22 text-[22px] font-[900] screen-1511:text-[20px] screen-1023:text-[15px]">
                  {name}
                </div>
                <div className="typography-gradient-title text-[14px] screen-1511:text-[12px] screen-1023:text-[11px] leading-normal">
                  {role}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flip-back">
          <div className="p-[30px_20px] card rounded-[20px] cursor-pointer  screen-1023:p-[20px_15px] h-full">
            <div className="flex flex-col gap-[20px] justify-center items-center text-center h-full">
              {quote && (
                <div className="typography-gradient-title text-[14px] screen-1511:text-[12px] screen-1023:text-[11px]">
                  quote
                </div>
              )}

              {quote && (
                <div className="f-14-2 text-[16px] font-[900] screen-1511:text-[14px]">
                  {quote}
                </div>
              )}

              {linkedIn && (
                <Link
                  href={linkedIn}
                  target="_blank"
                  className="w-[40px] h-[40px] rounded-full bg-white/10 flex items-center justify-center transition-all hover:bg-white/20 z-20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M5.40409 19.1915V7.14192H1.40255V19.1915H5.40451H5.40409ZM3.40416 5.49704C4.79928 5.49704 5.66784 4.57177 5.66784 3.41545C5.64173 2.23279 4.79928 1.33334 3.43069 1.33334C2.06115 1.33334 1.16669 2.23279 1.16669 3.41535C1.16669 4.57167 2.03493 5.49693 3.37794 5.49693H3.40384L3.40416 5.49704ZM7.61899 19.1915H11.6202V12.4632C11.6202 12.1035 11.6463 11.7429 11.752 11.4861C12.0412 10.7662 12.6996 10.0211 13.8052 10.0211C15.2528 10.0211 15.8322 11.126 15.8322 12.746V19.1915H19.8334V12.2826C19.8334 8.58168 17.8595 6.85943 15.2269 6.85943C13.0685 6.85943 12.1206 8.06687 11.5939 8.88926H11.6205V7.14234H7.6192C7.67143 8.27273 7.61889 19.1919 7.61889 19.1919L7.61899 19.1915Z"
                      fill="#11F4D1"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
