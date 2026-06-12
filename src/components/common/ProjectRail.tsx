import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Section {
     id: string;
     label: string;
}

interface Props {
     sections: Section[];
}

export default function ProjectRail({
     sections,
}: Props) {
     const [activeSection, setActiveSection] =
          useState(sections[0]?.id);

     useEffect(() => {
          const observer =
               new IntersectionObserver(
                    (entries) => {
                         entries.forEach((entry) => {
                              if (
                                   entry.isIntersecting
                              ) {
                                   setActiveSection(
                                        entry.target.id
                                   );
                              }
                         });
                    },
                    {
                         threshold: 0.5,
                    }
               );

          sections.forEach((section) => {
               const element =
                    document.getElementById(
                         section.id
                    );

               if (element) {
                    observer.observe(element);
               }
          });

          return () => observer.disconnect();
     }, [sections]);

     return (
          <div className="fixed right-8 top-1/2 z-50 -translate-y-1/2">
               <div className="flex flex-col items-center">

                    {sections.map(
                         (section, index) => (
                              <div
                                   key={section.id}
                                   className="flex flex-col items-center"
                              >
                                   <motion.button
                                        onClick={() =>
                                             document
                                                  .getElementById(
                                                       section.id
                                                  )
                                                  ?.scrollIntoView({
                                                       behavior:
                                                            "smooth",
                                                       block:
                                                            "start",
                                                  })
                                        }
                                        animate={{
                                             scale:
                                                  activeSection ===
                                                       section.id
                                                       ? 1.2
                                                       : 1,
                                        }}
                                        className={`h-3 w-3 rounded-full border transition-all duration-300 ${activeSection ===
                                                  section.id
                                                  ? "border-cyan-400 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]"
                                                  : "border-violet-500/40 bg-[#0B1120]"
                                             }`}
                                   />

                                   {index <
                                        sections.length -
                                        1 && (
                                             <div
                                                  className={`h-10 w-px ${activeSection ===
                                                            section.id
                                                            ? "bg-cyan-400/50"
                                                            : "bg-violet-500/20"
                                                       }`}
                                             />
                                        )}
                              </div>
                         )
                    )}

               </div>
          </div>
     );
}