import { CMSHackathon, CMSTool } from "@/lib/cms.types";
import { Button, IconArrowRightAlt } from "@nuahorg/universa-ui-kit";
import Link from "next/link";

interface Props {
  tool: CMSTool;
}

const ToolItem = ({ tool }: Props) => {
  return (
    <div className="card p-[40px] flex flex-col gap-[30px] rounded-[20px] screen-1511:p-[40px_20px]">
      <div className="text-start text-crop text-[28px] text-nuah-green font-[700] screen-1511:text-[22px]">
        {tool.name}
      </div>
      <div className="h-[2px] bg-white/20 w-full"></div>
      <div className="flex flex-col gap-[2px] text-start z-50">
        <div className="bg-white/5 p-[15px] rounded-[5px] flex">
          <div className="w-[100px] flex-shrink-0 font-[700]">Link:</div>
          <div>{tool.link}</div>
        </div>
        <div className="bg-white/5 p-[15px] rounded-[5px] flex">
          <div className="w-[100px] flex-shrink-0 font-[700]">Purpose:</div>
          <div>{tool.purpose}</div>
        </div>
        <div className="bg-white/5 p-[15px] rounded-[5px] flex">
          <div className="w-[100px] flex-shrink-0 font-[700]">Use case:</div>
          <div>{tool.use_case}</div>
        </div>
        <div className="bg-white/5 p-[15px] rounded-[5px] flex">
          <div className="w-[100px] flex-shrink-0 font-[700]">Features:</div>
          <div>
            {tool.features.split("#").map((el) => (
              <div key={el}>- {el}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolItem;
