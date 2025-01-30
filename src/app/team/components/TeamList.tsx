import { TEAM_MEMBERS } from "@/constants/team";
import TeamCard from "./TeamCard";

const TeamList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {TEAM_MEMBERS.map((member, i) => (
        <div
          className="basis-[calc(25%-5px)] m-[2.5px] screen-1365:basis-[calc(33.3%-5px)] screen-767:basis-[calc(50%-5px)] screen-389:basis-[100%]"
          key={i}
        >
          <TeamCard
            image={member.image}
            name={member.name}
            role={member.role}
            quote={member.quote}
            linkedIn={member.linkedIn}
          />
        </div>
      ))}
    </div>
  );
};

export default TeamList;
