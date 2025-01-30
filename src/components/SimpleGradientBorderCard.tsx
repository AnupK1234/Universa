import { ReactNode } from "react";

interface Props {
  content: ReactNode;
}

const SimpleGradientBorderCard = ({ content }: Props) => {
  return (
    <div className="card px-[30px] py-[50px] rounded-[40px] flex gap-[30px] items-center screen-1365:p-[30px] screen-1365:flex-col screen-1023:p-[40px] screen-1023:flex-row screen-767:p-[40px_30px] screen-767:gap-[25px] screen-479:p-[30px_20px] screen-479:gap-[20px]">
      <div className="text-crop text-[18px] font-[400] flex-1 screen-1511:text-[15px]">
        {content}
      </div>
    </div>
  );
};

export default SimpleGradientBorderCard;
