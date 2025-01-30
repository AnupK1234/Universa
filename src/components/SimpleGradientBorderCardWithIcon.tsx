import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  content: ReactNode;
}

const SimpleGradientBorderCardWithIcon = ({ icon, content }: Props) => {
  return (
    <div className="card p-[40px] rounded-[40px] flex gap-[30px] items-center screen-1365:p-[30px] screen-1365:flex-col screen-1023:p-[40px] screen-1023:flex-row screen-767:p-[40px_30px] screen-767:gap-[25px] screen-767:rounded-[20px] screen-479:p-[30px_20px] screen-479:gap-[20px]">
      <div className="rounded-[15px] bg-white/10 w-[70px] h-[70px] flex items-center justify-center">
        {icon}
      </div>

      <div className="text-crop text-[18px] font-[500] flex-1 screen-1511:text-[15px]">
        {content}
      </div>
    </div>
  );
};

export default SimpleGradientBorderCardWithIcon;
