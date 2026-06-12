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

     const [hoveredSection, setHoveredSection] =
          useState<string | null>(null);

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
               <div className="flex flex-col items-end">

                    {sections.map(
                         (section, index) => {
                              const isActive =
                                   activeSection ===
                                   section.id;

                              const isHovered =
                                   hoveredSection ===
                                   section.id;

                              return (
                                   <div
                                        key={section.id}
                                        className="flex flex-col items-end"
                                   >
                                        <div
                                             className="group flex items-center gap-4"
                                             onMouseEnter={() =>
                                                  setHoveredSection(
                                                       section.id
                                                  )
                                             }
                                             onMouseLeave={() =>
                                                  setHoveredSection(
                                                       null
                                                  )
                                             }
                                        >
                                             {/* Label */}

                                             <motion.button
                                                  onClick={() =>
                                                       document
                                                            .getElementById(
                                                                 section.id
                                                            )
                                                            ?.scrollIntoView(
                                                                 {
                                                                      behavior:
                                                                           "smooth",
                                                                      block:
                                                                           "start",
                                                                 }
                                                            )
                                                  }
                                                  animate={{
                                                       opacity:
                                                            isActive ||
                                                                 isHovered
                                                                 ? 1
                                                                 : 0.45,
                                                  }}
                                                  className={`text-sm transition-colors ${isActive
                                                            ? "text-cyan-300"
                                                            : "text-slate-500 hover:text-slate-300"
                                                       }`}
                                             >
                                                  {
                                                       section.label
                                                  }
                                             </motion.button>

                                             {/* Node */}

                                             <motion.button
                                                  onClick={() =>
                                                       document
                                                            .getElementById(
                                                                 section.id
                                                            )
                                                            ?.scrollIntoView(
                                                                 {
                                                                      behavior:
                                                                           "smooth",
                                                                      block:
                                                                           "start",
                                                                 }
                                                            )
                                                  }
                                                  animate={{
                                                       scale:
                                                            isActive
                                                                 ? 1.4
                                                                 : isHovered
                                                                      ? 1.8
                                                                      : 1,
                                                  }}
                                                  transition={{
                                                       duration: 0.2,
                                                  }}
                                                  className={`rounded-full border transition-all duration-300 ${isActive
                                                            ? "h-4 w-4 border-cyan-400 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]"
                                                            : "h-3 w-3 border-violet-500/40 bg-[#0B1120]"
                                                       }`}
                                             />
                                        </div>

                                        {index <
                                             sections.length -
                                             1 && (
                                                  <div
                                                       className={`mr-[6px] h-10 w-px ${isActive
                                                                 ? "bg-cyan-400/50"
                                                                 : "bg-violet-500/20"
                                                            }`}
                                                  />
                                             )}
                                   </div>
                              );
                         }
                    )}

               </div>
          </div>
     );
}