import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Project } from "../../content/types";

export default function GloveSlide({ project }: { project?: Project }) {
     const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

     useEffect(() => {
          const handleMouseMove = (event: MouseEvent) => {
               setMouse({
                    x: event.clientX / window.innerWidth,
                    y: event.clientY / window.innerHeight,
               });
          };

          window.addEventListener("mousemove", handleMouseMove);
          return () => window.removeEventListener("mousemove", handleMouseMove);
     }, []);

     return (
          <section
               id={project?.id ?? "robotic-glove"}
               data-slide
               className="relative min-h-screen overflow-hidden bg-[#1D3028] text-[#F1F5E9]"
          >
               {/* Technical Mat */}
               <div className="pointer-events-none absolute inset-0">
                    <div
                         className="absolute inset-0 opacity-[0.075]"
                         style={{
                              backgroundImage: `
                                   linear-gradient(to right, #B8D8C0 1px, transparent 1px),
                                   linear-gradient(to bottom, #B8D8C0 1px, transparent 1px)
                              `,
                              backgroundSize: "44px 44px",
                         }}
                    />
                    <div
                         className="absolute inset-0 opacity-[0.1]"
                         style={{
                              backgroundImage: `
                                   linear-gradient(to right, #C7E6CF 1px, transparent 1px),
                                   linear-gradient(to bottom, #C7E6CF 1px, transparent 1px)
                              `,
                              backgroundSize: "220px 220px",
                         }}
                    />
                    <div className="absolute left-0 top-[18%] h-px w-full bg-[#B8F34A]/10" />
                    <div className="absolute left-[8%] top-0 h-full w-px bg-[#B8F34A]/10" />
                    <div className="absolute right-[8%] top-0 h-full w-px bg-[#B8F34A]/10" />
               </div>

               {/* Main */}
               <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-center px-6 py-16 lg:px-10">
                    <div className="grid w-full gap-10 lg:grid-cols-12 lg:items-center">

                         {/* LEFT */}
                         <div className="flex flex-col lg:col-span-5">
                              <div>
                                   <div className="flex items-center gap-3">
                                        <span className="h-2 w-2 rounded-full bg-[#B8F34A] shadow-[0_0_12px_rgba(184,243,74,0.4)]" />
                                        <span className="text-[10px] uppercase tracking-[0.35em] text-[#B8F34A]">
                                             Rehabilitation Robotics
                                        </span>
                                   </div>

                                   <h2 className="mt-7 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                                        Therapeutic
                                        <br />
                                        <span className="text-[#F1F5E9]/45">
                                             Robotic Glove
                                        </span>
                                   </h2>

                                   <div className="mt-7 flex items-center gap-2">
                                        <div className="h-1 w-14 rounded-full bg-[#B8F34A]" />
                                        <div className="h-1 w-5 rounded-full bg-[#78BFA3]" />
                                   </div>

                                   <p className="mt-8 max-w-xl text-lg leading-8 text-[#F1F5E9]/80">
                                        A wearable rehabilitation system designed to assist hand movement through controlled robotic actuation.
                                   </p>

                                   <p className="mt-5 max-w-xl text-sm leading-7 text-[#F1F5E9]/45">
                                        The project explored wearable mechanics, servo-based actuation and embedded control to create an accessible approach to assisted hand rehabilitation.
                                   </p>

                                   <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.2em] text-[#F1F5E9]/35">
                                        <span>Hardware</span>
                                        <span>Research</span>
                                        <span>Healthcare</span>
                                        <span>Prototype</span>
                                   </div>
                              </div>

                              {/* Interactive Mechanism */}
                              <div className="mt-16 pt-4">
                                   <div className="mb-4 flex items-end justify-between">
                                        <div>
                                             <div className="text-[9px] uppercase tracking-[0.3em] text-[#F1F5E9]/35">
                                                  Assisted Finger Movement
                                             </div>
                                             <div className="mt-1 text-xs text-[#F1F5E9]/25">
                                                  Move the cursor to control flexion
                                             </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-[#B8F34A]/60">
                                             <span className="h-1.5 w-1.5 rounded-full bg-[#B8F34A]" />
                                             Active
                                        </div>
                                   </div>

                                   <div className="relative h-72 overflow-hidden border border-[#B8F34A]/15 bg-[#172920]/60">
                                        <div className="absolute left-4 top-4 text-[7px] uppercase tracking-[0.25em] text-[#F1F5E9]/20">
                                             Control
                                        </div>

                                        <div className="absolute right-4 top-4 text-[7px] uppercase tracking-[0.25em] text-[#F1F5E9]/20">
                                             Actuation
                                        </div>

                                        <div className="absolute inset-0">
                                             {[0, 1, 2, 3, 4].map((finger) => (
                                                  <FingerMechanism
                                                       key={finger}
                                                       index={finger}
                                                       mouse={mouse}
                                                  />
                                             ))}
                                        </div>

                                        <div className="absolute bottom-3 left-4 text-[8px] uppercase tracking-[0.2em] text-[#F1F5E9]/20">
                                             Five-channel assisted movement
                                        </div>
                                   </div>
                              </div>

                              {/* Tech */}
                              <div className="mt-7 flex flex-wrap gap-2">
                                   {project?.techStack?.map((tech) => (
                                        <span
                                             key={tech}
                                             className="rounded-md border border-[#F1F5E9]/10 bg-[#F1F5E9]/[0.04] px-3 py-1.5 text-xs text-[#F1F5E9]/45"
                                        >
                                             {tech}
                                        </span>
                                   ))}
                              </div>
                         </div>

                         {/* RIGHT */}
                         <div className="lg:col-span-7">
                              <div className="mb-4 flex items-end justify-between">
                                   <div>
                                        <div className="text-[9px] uppercase tracking-[0.35em] text-[#F1F5E9]/30">
                                             Prototype Evolution
                                        </div>
                                        <div className="mt-2 text-sm text-[#F1F5E9]/55">
                                             Concept → Build → Test → Refine
                                        </div>
                                   </div>

                                   <div className="text-[9px] uppercase tracking-[0.2em] text-[#F1F5E9]/20">
                                        DEVELOPMENT / 01—04
                                   </div>
                              </div>

                              {/* Video */}
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ duration: 0.7 }}
                                   className="overflow-hidden rounded-2xl border border-[#B8F34A]/15 bg-[#111A16] shadow-[0_30px_80px_rgba(0,0,0,0.3)]"
                              >
                                   <div className="flex items-center justify-between border-b border-[#F1F5E9]/10 px-5 py-3">
                                        <div className="flex items-center gap-3">
                                             <span className="h-2 w-2 rounded-full bg-[#B8F34A]" />
                                             <span className="text-[9px] uppercase tracking-[0.25em] text-[#F1F5E9]/35">
                                                  Prototype Development
                                             </span>
                                        </div>
                                        <span className="text-[9px] text-[#F1F5E9]/20">
                                             VIDEO
                                        </span>
                                   </div>

                                   <video
                                        controls
                                        muted
                                        playsInline
                                        className="aspect-video w-full bg-black object-cover"
                                   >
                                        <source
                                             src="/projects/robotic-glove/prototype-evolution.mp4"
                                             type="video/mp4"
                                        />
                                   </video>

                                   <div className="flex items-center justify-between border-t border-[#F1F5E9]/10 px-5 py-3">
                                        <span className="text-xs text-[#F1F5E9]/40">
                                             Complete prototype evolution
                                        </span>
                                        <span className="text-[9px] uppercase tracking-[0.2em] text-[#B8F34A]/60">
                                             Engineering Record
                                        </span>
                                   </div>
                              </motion.div>

                              {/* Achievements */}
                              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                   <div className="relative border border-[#F1F5E9]/10 bg-[#172920]/50 p-5">
                                        <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-[#B8F34A]" />
                                        <div className="text-[9px] uppercase tracking-[0.3em] text-[#B8F34A]">
                                             Published Research
                                        </div>
                                        <div className="mt-4 text-lg font-medium">
                                             Book Chapter
                                        </div>
                                        <div className="mt-2 text-xs leading-5 text-[#F1F5E9]/40">
                                             Research contribution documenting the therapeutic robotic glove project.
                                        </div>
                                        <div className="mt-5 text-[9px] uppercase tracking-[0.2em] text-[#F1F5E9]/25">
                                             Publication
                                        </div>
                                   </div>

                                   <div className="relative border border-[#78BFA3]/20 bg-[#18362D]/70 p-5">
                                        <div className="flex items-center justify-between">
                                             <div className="text-[9px] uppercase tracking-[0.3em] text-[#78BFA3]">
                                                  Biothon
                                             </div>
                                             <div className="text-[9px] text-[#78BFA3]/50">
                                                  2024
                                             </div>
                                        </div>

                                        <div className="mt-3 flex items-end gap-4">
                                             <div className="text-5xl font-semibold leading-none text-[#B8F34A]">
                                                  02
                                             </div>
                                             <div className="pb-1">
                                                  <div className="text-sm font-medium">
                                                       Second Place
                                                  </div>
                                                  <div className="mt-1 text-[8px] uppercase tracking-[0.15em] text-[#F1F5E9]/35">
                                                       Biomedical Hackathon
                                                  </div>
                                             </div>
                                        </div>

                                        <div className="mt-5 h-px bg-[#78BFA3]/20" />

                                        <div className="mt-2 text-[9px] text-[#F1F5E9]/25">
                                             Prototype · Innovation · Healthcare
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}

const FINGER_LENGTHS = [
     [88, 72, 55],
     [105, 82, 62],
     [118, 92, 70],
     [105, 82, 62],
     [88, 70, 52],
];

const FINGER_RESPONSE = [0.72, 0.88, 1, 0.88, 0.72];
const SPRING = { type: "spring" as const, stiffness: 90, damping: 18, mass: 0.7 };
const DEG_TO_RAD = Math.PI / 180;

function FingerMechanism({
     index,
     mouse,
}: {
     index: number;
     mouse: { x: number; y: number };
}) {
     const baseX = 42;
     const baseY = 38 + index * 48;
     const [baseOne, baseTwo, baseThree] = FINGER_LENGTHS[index];

     const contraction = Math.max(0, Math.min(1, (0.5 - mouse.x) * 2));
     const segmentOne = baseOne * (1 - contraction * 0.05);
     const segmentTwo = baseTwo * (1 - contraction * 0.38);
     const segmentThree = baseThree * (1 - contraction * 0.62);

     const input = Math.max(0, Math.min(1, mouse.y));
     const flexion = input * FINGER_RESPONSE[index];
     const bendAngle = flexion * 62;

     const rad1 = -2 * DEG_TO_RAD;
     const rad2 = (-2 + bendAngle * 0.55) * DEG_TO_RAD;
     const rad3 = (-2 + bendAngle) * DEG_TO_RAD;

     const joint1 = {
          x: baseX + Math.cos(rad1) * segmentOne,
          y: baseY + Math.sin(rad1) * segmentOne,
     };

     const joint2 = {
          x: joint1.x + Math.cos(rad2) * segmentTwo,
          y: joint1.y + Math.sin(rad2) * segmentTwo,
     };

     const tip = {
          x: joint2.x + Math.cos(rad3) * segmentThree,
          y: joint2.y + Math.sin(rad3) * segmentThree,
     };

     const circlePath = (x: number, y: number, r: number) =>
          `M ${x - r} ${y} a ${r} ${r} 0 1 0 ${r * 2} 0 a ${r} ${r} 0 1 0 ${-r * 2} 0`;

     const mechanismPath = `
          M ${baseX} ${baseY}
          L ${joint1.x} ${joint1.y}
          L ${joint2.x} ${joint2.y}
          L ${tip.x} ${tip.y}
          ${circlePath(baseX, baseY, 3.5)}
          ${circlePath(joint1.x, joint1.y, 4)}
          ${circlePath(joint2.x, joint2.y, 4)}
          ${circlePath(tip.x, tip.y, 5)}
     `;

     const restingPath = `
          M ${baseX} ${baseY}
          L ${baseX + baseOne} ${baseY}
          L ${baseX + baseOne + baseTwo} ${baseY}
          L ${baseX + baseOne + baseTwo + baseThree} ${baseY}
     `;

     return (
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 600 320" preserveAspectRatio="none">
               <path d={restingPath} fill="none" stroke="#F1F5E9" strokeOpacity="0.035" strokeWidth="1" />

               <motion.path
                    d={mechanismPath}
                    fill="#1D3028"
                    stroke="#B8F34A"
                    strokeOpacity="0.8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fillRule="evenodd"
                    animate={{ d: mechanismPath }}
                    transition={SPRING}
               />
          </svg>
     );
}