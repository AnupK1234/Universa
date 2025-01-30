import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  content: ReactNode;
}

const GradientBorderCardWithIcon = ({ icon, title, content }: Props) => {
  return (
    <div className="rounded-[40px] p-[50px_40px] flex flex-col gap-[30px] card screen-1023:flex-row screen-767:p-[40px_30px] screen-767:flex-col screen-767:gap-[25px] screen-479:p-[30px_20px] screen-479:gap-[20px] screen-479:rounded-[20px]">
      <div className="rounded-[15px] bg-white/10 w-[70px] h-[70px] flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col gap-[30px] screen-1023:flex-1">
        <div className="text-nuah-green font-bold text-[22px] leading-[27px] screen-767:text-[20px] screen-767:leading-[25px] text-crop">
          {title}
        </div>
        <div className="text-[16px] leading-[21px] screen-767:text-[14px] screen-767:leading-[19px]">
          {content}
        </div>
      </div>
    </div>
  );
};

export default GradientBorderCardWithIcon;
