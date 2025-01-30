import HackathonsItem from "./HackathonsItem";
import { CMSHackathon } from "@/lib/cms.types";

type HackathonsListProps = {
  hackathons: CMSHackathon[];
};
const HackathonsList = ({ hackathons }: HackathonsListProps) => {
  return (
    <div className="grid grid-cols-1 gap-[20px] screen-1023:grid-cols-1 screen-1365:gap-[10px] w-full max-w-[914px]">
      {hackathons.map((item, index) => (
        <HackathonsItem key={index} hackathon={item} />
      ))}
    </div>
  );
};

export default HackathonsList;
