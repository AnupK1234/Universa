import { ReactNode } from "react";
import cn from "classnames";

interface Props {
  content: ReactNode;
  red_line?: string;
  className?: string;
}

const TopBorderedCard = ({ content, className, red_line }: Props) => {
  return (
    <div
      className={cn(
        "font-[500] p-[50px_30px] text-crop backdrop-blur-[20px] top-bordered-card border-t-[2px] border-nuah-green text-[18px] screen-1511:p-[40px_30px] screen-1511:text-[15px] screen-1023:p-[30px] screen-1023:border-t-0 screen-1023:border-l-[2px]",
        className,
      )}
    >
      {red_line && <span className="text-nuah-green">{red_line}</span>}
      {content}
    </div>
  );
};

export default TopBorderedCard;
