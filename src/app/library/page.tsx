import VideoBg from "@/components/VideoBg";
import LibraryWelcomeBlock from "./components/LibraryWelcomeBlock";
import LibraryCard from "./components/LibraryCard";

export default function Library() {
  return (
    <>
      <VideoBg
        videoUrl="https://storage.googleapis.com/nuah-assets/videos/universa/library-bg.mp4"
        videoTabletUrl="https://storage.googleapis.com/nuah-assets/videos/universa/library-mobile-bg.mp4"
      />

      <main className="container text-white">
        <LibraryWelcomeBlock />

        <div className="pt-[100px] pb-[150px] flex flex-col gap-[150px] screen-1365:pt-[100px] screen-1365:pb-[100px] screen-1365:gap-[100px] screen-767:pt-[70px] screen-767:pb-[70px] screen-767:gap-[70px] screen-479:pt-[70px] screen-479:pb-[70px] screen-389:gap-[50px] screen-389:pt-[50px] screen-389:pb-[50px]">
          <div className="flex flex-col gap-[20px]">
            <LibraryCard
              link="/universa.pdf"
              posterUrl="/img/library/poster-universa.png"
              title="UNIVERSA"
              content="The Universa document serves as a comprehensive guide to UNIVERSA's mission, outlining its vision and future initiatives. It highlights the development of sophisticated AI agents through the UNIVERSA platform, aimed at solving complex global challenges. The document emphasizes collaboration across industries, development of AGI solutions, and the promotion of benevolent AI, detailing strategic plans including the implementation of AGA and community-engaging hackathons."
            />

            <LibraryCard
              link="/single-invention.pdf"
              posterUrl="/img/library/poster-aga-vision.png"
              title="AGA Vision"
              content="The AGA Vision document elaborates on the concept of the Artificial Guardian Angel (AGA), designed as a super AI to ethically steer humanity towards a brighter, more secure future. AGA is envisioned to act as a global steward, integrating benevolent AI into society under strict ethical standards. This initiative is pivotal to UNIVERSA's mission of leveraging AI for global good."
            />

            <LibraryCard
              link="/12-key-nodes.pdf"
              posterUrl="/img/library/poster-12-key-nodes.png"
              title="12 Key Nodes"
              content="The 12 Key Nodes document details critical AI entities within the UNIVERSA framework, each tasked with addressing significant global issues such as health, education, and environmental sustainability. These nodes are designed to advance technological innovation and are integral to developing a robust ecosystem that supports AGA's overarching mission."
            />

            <LibraryCard
              link="/whitepaper.pdf"
              posterUrl="/img/library/poster-whitepaper.png"
              title="NUAH Whitepaper"
              content="The NUAH whitepaper outlines an advanced financial platform that integrates AI and blockchain to innovate global economic systems. It proposes mechanisms for Universal Basic Income and dynamic management of economic stability, focusing on democratizing economic participation worldwide. This platform aims to mitigate the economic impacts of AI and enhance financial access globally."
            />
          </div>
        </div>
      </main>
    </>
  );
}
