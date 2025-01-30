// import type { Metadata } from "next";
// import cn from "classnames";
// import { BackToTop } from "@nuahorg/universa-ui-kit";
// import localFont from "next/font/local";
// import Logo from "@/components/Logo";
// import SubFooter from "@/components/SubFooter";

// import "@nuahorg/universa-ui-kit/dist/tailwind.css";
// import "./globals.css";
// import "./style.scss";
// import Menu from "@/components/Menu";

// export const metadata: Metadata = {
//   title: "UNIVERSA: AI open-source initiative",
//   description: "UNIVERSA: AI open-source initiative",
// };

// const yapari = localFont({
//   src: [
//     {
//       path: "../assets/fonts/Yapari-ExtraBold.woff2",
//       weight: "800",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/Yapari-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../assets/fonts/Yapari-SemiBold.woff2",
//       weight: "600",
//       style: "normal",
//     },
//   ],
//   variable: "--font-yapari",
// });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <link
//           rel="apple-touch-icon"
//           sizes="180x180"
//           href="/apple-touch-icon.png"
//         />
//         <link
//           rel="icon"
//           type="image/png"
//           sizes="32x32"
//           href="/favicon-32x32.png"
//         />
//         <link
//           rel="icon"
//           type="image/png"
//           sizes="16x16"
//           href="/favicon-16x16.png"
//         />
//         <link rel="manifest" href="/site.webmanifest" />
//         <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
//         <meta name="msapplication-TileColor" content="#da532c" />
//         <meta name="theme-color" content="#1C293C" />
//       </head>

//       <body
//         style={{ minHeight: "screen", backgroundColor: "rgb(28, 41, 60)" }}
//         className={cn(
//           "pb-[50px] screen-767:pb-[30px] screen-479:pb-[20px] isolate",
//           yapari.variable,
//         )}
//       >
//         <Logo />
//         <Menu />

//         {children}

//         <div className="container">
//           <SubFooter />
//         </div>

//         <BackToTop />
//       </body>
//     </html>
//   );
// }

"use client";

import cn from "classnames";
import { usePathname } from "next/navigation";
import { BackToTop } from "@nuahorg/universa-ui-kit";
import localFont from "next/font/local";
import Logo from "@/components/Logo";
import SubFooter from "@/components/SubFooter";
import Menu from "@/components/Menu";

import "@nuahorg/universa-ui-kit/dist/tailwind.css";
import "./globals.css";
import "./style.scss";

const metadata = {
  title: "UNIVERSA: AI open-source initiative",
  description: "UNIVERSA: AI open-source initiative",
};

const healthMetadata = {
  title: "UNIVERSA for Healthcare: AI open-source initiative",
  description: "Transcending healthcare through medical superintelligence: the natural evolution and next step for humanity.",
};

const yapari = localFont({
  src: [
    {
      path: "../assets/fonts/Yapari-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/Yapari-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Yapari-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-yapari",
});

const cera = localFont({
  src: [
    { path: "../assets/fonts/cera-thin.otf", weight: "100" },
    { path: "../assets/fonts/cera-light.otf", weight: "200" },
    { path: "../assets/fonts/cera-regular.ttf", weight: "400" },
    { path: "../assets/fonts/cera-medium.otf", weight: "500" },
    { path: "../assets/fonts/cera-bold.otf", weight: "700" },
    { path: "../assets/fonts/cera-black.otf", weight: "900" },
  ],
  variable: "--font-cera",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isEarthPage = pathname === "/earth";
  const isHealthcarePage = pathname === "/healthcare";

  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#1C293C" />
        <title>{isHealthcarePage ? healthMetadata.title : metadata.title}</title>
        <meta name="description" content={healthMetadata.description}/>
      </head>

      <body
        style={{ minHeight: "screen", backgroundColor: "rgb(28, 41, 60)" }}
        className={cn(
          !isHealthcarePage && "pb-[50px] screen-767:pb-[30px] screen-479:pb-[20px] isolate",
          yapari.variable,
          cera.variable,
        )}
      >
        {!isHealthcarePage && (
          <div>
            <Logo />
            <Menu />
          </div>
        )}
      
        <div>{children}</div>
        {!isEarthPage || isHealthcarePage && (
          <>
            <div className="container">
              <SubFooter />
            </div>
            <BackToTop />
          </>
        )}
      </body>
    </html>
  );
}

