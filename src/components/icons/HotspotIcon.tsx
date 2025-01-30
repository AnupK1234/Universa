import { IconProps } from "./Icon.types";

const HotspotIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="30"
      viewBox="0 0 38 30"
      fill="none"
    >
      <path
        d="M19 18C20.6569 18 22 16.6569 22 15C22 13.3431 20.6569 12 19 12C17.3431 12 16 13.3431 16 15C16 16.6569 17.3431 18 19 18Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29 1C33.82 4.01 37 9.16 37 15C37 20.84 33.82 25.99 29 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 1C4.18 4.01 1 9.16 1 15C1 20.84 4.18 25.99 9 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 23C10.58 21.18 9 18.26 9 15C9 11.74 10.58 8.82 13 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 7C27.42 8.82 29 11.74 29 15C29 18.26 27.42 21.18 25 23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HotspotIcon;
