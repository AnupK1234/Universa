"use client";

import { MouseEvent, PropsWithChildren } from "react";
import Link from "next/link";

interface Props {
  href: string;
}

const AnchorLink = ({ href, children }: Props & PropsWithChildren) => {
  const onClick = (e: MouseEvent) => {
    e.preventDefault();

    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link href={href} onClick={onClick}>
      {children}
    </Link>
  );
};

export default AnchorLink;
