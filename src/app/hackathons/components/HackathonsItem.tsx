import { CMSHackathon } from "@/lib/cms.types";
import { Button, IconArrowRightAlt } from "@nuahorg/universa-ui-kit";
import dayjs from "dayjs";
import Link from "next/link";

interface Props {
  hackathon: CMSHackathon;
}

const getDuration = (startDate: string, endDate: string) => {
  const diffH = Math.abs(dayjs(startDate).diff(endDate) / 1000 / 60 / 60);
  if (diffH / 24 / 28 > 1) {
    return `${diffH / 7}m`;
  }
  if (diffH / 24 / 7 > 1) {
    return `${diffH / 7}w`;
  }
  return `${diffH}h`;
};

const HackathonsItem = ({ hackathon }: Props) => {
  return (
    <div className="card p-[40px] flex flex-col gap-[30px] rounded-[20px] screen-1511:p-[40px_20px]">
      <div className="text-start text-crop text-[28px] text-nuah-green font-[700] screen-1511:text-[22px]">
        {hackathon.name}
      </div>
      <div className="h-[2px] bg-white/20 w-full"></div>
      <div className="flex gap-[30px]">
        <div>
          Level:{" "}
          <span className="text-nuah-green capitalize">{hackathon.level}</span>
        </div>
        <div>
          Duration:{" "}
          <span className="text-nuah-green">
            {getDuration(hackathon.from_date, hackathon.due_date)}
          </span>
        </div>
        <div>
          Type:{" "}
          <span className="text-nuah-green capitalize"> {hackathon.type}</span>
        </div>
      </div>
      <div className="flex flex-col gap-[2px] text-start z-50">
        <div className="bg-white/5 p-[15px] rounded-[5px] flex">
          <div className="w-[100px] flex-shrink-0 font-[700]">Date:</div>
          <div>{hackathon.from_date}</div>
        </div>
        <div className="bg-white/5 p-[15px] rounded-[5px] flex">
          <div className="w-[100px] flex-shrink-0 font-[700]">Prize:</div>
          <div>
            {new Intl.NumberFormat("ru-RU", {
              style: "currency",
              minimumFractionDigits: 0,
              currency: "USD",
              currencyDisplay: "code",
            }).format(hackathon.prize)}
          </div>
        </div>
        <div className="bg-white/5 p-[15px] rounded-[5px] flex">
          <div className="w-[100px] flex-shrink-0 font-[700]">Conditions:</div>
          <div>{hackathon.conditions}</div>
        </div>
        <div className="bg-white/5 p-[15px] rounded-[5px] flex">
          <div className="w-[100px] flex-shrink-0 font-[700]">Details:</div>
          <div>
            <Link
              href={`https://universa.org/challanges/${hackathon.slug}`}
            >
              {`universa.org/challanges/${hackathon.slug}`}
            </Link>
          </div>
        </div>
      </div>

      <div>
        <Button className="z-40">Join challenge</Button>
      </div>
    </div>
  );
};

export default HackathonsItem;
