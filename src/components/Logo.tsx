import Link from "next/link";
import LogoIcon from "./LogoIcon";

const Logo = () => {
  return (
    <div className="fixed top-[50px] left-[50px] screen-1919:top-[40px] screen-1919:left-[40px] screen-1511:top-[30px] screen-1511:left-[30px] screen-479:top-[20px] screen-479:left-[20px] z-30">
      <Link href="/">
        <LogoIcon className="screen-1365:w-[50px] screen-1365:h-[50px]" />
      </Link>
    </div>
  );
};

export default Logo;
