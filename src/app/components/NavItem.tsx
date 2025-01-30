import Link from "next/link";
import cn from "classnames";

interface Props {
  link: string;
  title: string;
  text: string;
  light?: boolean;
  disabled?: boolean;
}

const NavItem = ({ link, title, text, light, disabled }: Props) => {
  return (
    <Link
      href={link}
      target="_blank"
      className={cn(
        "p-[30px] backdrop-blur-[15px] flex gap-[15px] rounded-[20px] items-center screen-1365:p-[20px] screen-1023:p-[30px] screen-479:p-[25px_20px] group",
        { light },
        { ["bg-white/5 pointer-events-none"]: disabled },
        { ["bg-white/10 nav-link-hoverable"]: !disabled },
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-[20px] flex-1 screen-1365:gap-[15px]",
          { ["opacity-20"]: disabled },
        )}
      >
        <h3
          className={cn(
            "transition-all f-18 font-[900] uppercase text-nuah-green",
            { ["group-hover:text-nuah-dark"]: !disabled },
          )}
        >
          {title}
        </h3>

        <div
          className={cn("transition-all f-15 font-[500]", {
            ["group-hover:text-nuah-dark"]: !disabled,
          })}
        >
          {text}
        </div>
      </div>

      <div
        className={cn(
          "w-[25px] h-[25px] bg-nuah-green rounded-full flex items-center justify-center pl-[1px]",
          { ["opacity-20"]: disabled },
          { ["group-hover:bg-nuah-dark"]: !disabled },
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="11"
          viewBox="0 0 10 11"
          fill="none"
        >
          <path
            className={cn("transition-all", {
              ["group-hover:stroke-nuah-green"]: !disabled,
            })}
            d="M2.8833 1L7.43169 5.54839L2.8833 10"
            stroke="#1C293C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
};

export default NavItem;
