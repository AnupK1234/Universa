
import { useInView, motion } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

export const SnapSection = ({
  id,
  content,
  onVisible,
}: {
  id: string;
  content: ReactNode;
  onVisible: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.7 }); // Trigger when 70% of the section is visible

  useEffect(() => {
    if (isInView) {
      onVisible();
    }
  }, [isInView, onVisible]);

  return (
    <div
      ref={ref}
      id={id}
      className="w-full h-screen mobile:min-h-screen mobile:h-auto  scrollbar-none flex items-center justify-center pb-7"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {content}
    </div>
  );
};


// import { useInView, motion } from "framer-motion";
// import { ReactNode, useEffect, useRef } from "react";

// export const SnapSection = ({
//   id,
//   content,
//   onVisible,
// }: {
//   id: string;
//   content: ReactNode;
//   onVisible: () => void;
// }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const isInView = useInView(ref, { amount: 0.7 }); // Trigger when 70% of the section is visible

//   useEffect(() => {
//     if (isInView) {
//       onVisible();
//     }
//   }, [isInView, onVisible]);


//   // snap-start is in the classname
//   return (
//     <motion.div
//       ref={ref}
//       id={id}
//       className=" w-full h-screen overflow-y-scroll scrollbar-none flex items-center justify-center pb-7"
//       initial={{ opacity: 0.5 }}
//       animate={{ opacity: isInView ? 1 : 0 }}
//       transition={{ duration: 0.5 }}
//       style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//     >
//       {content}
//     </motion.div>
//   );
// };