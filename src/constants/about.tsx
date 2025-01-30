import ContactIcon from "@/components/icons/ContactIcon";
import FeatureBoxIcon from "@/components/icons/FeatureBoxIcon";
import FreeformCropIcon from "@/components/icons/FreeformCropIcon";
import HotspotIcon from "@/components/icons/HotspotIcon";

export const ABOUT_BIG_CARDS = [
  {
    icon: <FreeformCropIcon />,
    title: "Foundation and Framework",
    content: (
      <ul className="flex flex-col gap-[15px]">
        <li className="list-item">
          <span className="text-crop">
            <span className="text-nuah-green">
              Universal Protocol Development:
            </span>{" "}
            Crafted a universal protocol to standardize AI agent structure and
            communication, facilitating seamless interaction and integration.
          </span>
        </li>
        <li className="list-item">
          <span className="text-crop">
            <span className="text-nuah-green">AGA Launch:</span> Unveiled AGA
            (Artificial Guardian Angel) at the AI for Good conference in Geneva,
            introducing a superintelligence aimed at ethical stewardship and
            enhancing global welfare, a significant step towards benevolent AI.
          </span>
        </li>
      </ul>
    ),
  },
  {
    icon: <ContactIcon />,
    title: "Community and Collaboration",
    content: (
      <ul className="flex flex-col gap-[15px]">
        <li className="list-item">
          <span className="text-crop">
            <span className="text-nuah-green">Innovative Hackathons:</span>{" "}
            Hosting pioneering hackathons, bringing together already over 50
            developers to advance our AGI framework, with a focus on real-world
            utility and the benevolent evolution of AI.
          </span>
        </li>
        <li className="list-item">
          <span className="text-crop">
            <span className="text-nuah-green">
              Cross-Industry Partnerships:
            </span>{" "}
            Formed strategic alliances across diverse sectors, leveraging the
            UNIVERSA framework to foster innovation in healthcare, education,
            finance, manufacturing, and beyond, demonstrating our
            solutions&apos; practical impact and adaptability.
          </span>
        </li>
      </ul>
    ),
  },
  {
    icon: <FeatureBoxIcon />,
    title: "Finance",
    content: (
      <div className="text-crop">
        <span className="text-nuah-green">NUAH blockchain:</span> NUAH has
        transformed the financial landscape by integrating AI and blockchain
        technologies, creating a cutting-edge platform that breaks down
        traditional financial barriers. This innovation ensures global access
        and participation, inviting everyone to join a community at the
        forefront of financial technology, where economic empowerment is made
        possible for all.
      </div>
    ),
  },
  {
    icon: <HotspotIcon />,
    title: "Outreach and Engagement",
    content: (
      <div className="text-crop">
        <span className="text-nuah-green">UNIVERSA AI Podcast Launch:</span>
        Initiated the UNIVERSA AI Podcast, engaging experts in discussions about
        technology, AI, ethics, transhumanism, and their implications for
        society, further expanding our community and outreach.
      </div>
    ),
  },
];
