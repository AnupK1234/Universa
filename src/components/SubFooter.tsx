import Link from "next/link";

const SubFooter = () => {
  return (
    <div className="mb-[5px] p-[50px] rounded-[20px] bg-white/5 backdrop-blur-[20px] grid grid-cols-[2fr_1fr_1fr] gap-[10px] font-[500] text-white screen-1023:grid-cols-2 screen-1023:gap-[50px_20px] screen-767:p-[40px_30px] screen-767:grid-cols-1 screen-767:gap-[30px] screen-479:p-[35px_20px] screen-479:gap-[25px]">
      <div className="flex flex-col gap-[25px] screen-1023:col-span-2 screen-767:col-span-1 screen-767:gap-[20px]">
        <div className="f-14 font-[800] uppercase">About</div>

        <div className="f-14">
          UNIVERSA is a pioneering initiative at the forefront of Artificial
          General Intelligence (AGI) development, designed to harness the
          transformative power of AI for global advancement.
        </div>
      </div>

      <div className="flex flex-col gap-[25px] screen-767:gap-[20px]">
        <div className="f-14 font-[800] uppercase">Contact</div>

        <Link href="mailto:hello@universa.org" className="f-14 hover:underline">
          hello@universa.org
        </Link>
      </div>
    </div>
  );
};

export default SubFooter;
