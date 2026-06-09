import type { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { NAV_NODES } from "./layout";

interface Props {
     navigate: ReturnType<typeof useNavigate>;
     mousePosition: {
          x: number;
          y: number;
     };
}

export default function MobileHome({
     navigate,
     mousePosition,
}: Props) {
     return (
          <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />

               <motion.div
                    animate={{
                         x: mousePosition.x,
                         y: mousePosition.y,
                    }}
                    transition={{
                         type: "spring",
                         stiffness: 30,
                         damping: 30,
                    }}
                    className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl"
               />

               <div className="relative z-10 flex min-h-screen flex-col px-5 py-8">
                    {/* Hero */}

                    <div className="rounded-3xl border border-violet-500/30 bg-[#0B1120]/85 p-6 backdrop-blur-xl shadow-[0_0_80px_rgba(139,92,246,0.15)]">
                         <h1 className="text-3xl font-semibold">
                              Arnav Khadkatkar
                         </h1>

                         <p className="mt-2 text-cyan-300">
                              Full Stack Developer
                         </p>

                         <p className="mt-4 text-sm text-slate-400">
                              Building enterprise software, AI products
                              and scalable web applications.
                         </p>
                    </div>

                    {/* Connection Line */}

                    <div className="relative mx-auto h-10 w-px bg-gradient-to-b from-violet-500/50 to-transparent" />

                    {/* Network Grid */}

                    <div className="relative">
                         <div className="absolute left-1/2 top-1/2 h-[1px] w-[70%] -translate-x-1/2 bg-violet-500/15" />

                         <div className="absolute left-1/2 top-[15%] h-[70%] w-px -translate-x-1/2 bg-violet-500/15" />

                         <div className="grid grid-cols-2 gap-4">
                              {NAV_NODES.map((node) => (
                                   <button
                                        key={node.id}
                                        onClick={() =>
                                             navigate(node.route)
                                        }
                                        className="relative rounded-2xl border border-violet-500/20 bg-[#0B1120]/80 p-5 text-left backdrop-blur-md transition-all duration-300 active:scale-[0.98]"
                                   >
                                        <div className="text-base font-medium">
                                             {node.title}
                                        </div>

                                        <div className="mt-1 text-xs text-slate-500">
                                             {node.subtitle}
                                        </div>
                                   </button>
                              ))}
                         </div>
                    </div>

                    {/* Skills */}

                    <div className="mt-8 flex flex-wrap justify-center gap-2">
                         {[
                              "React",
                              "TypeScript",
                              "MongoDB",
                              "AI",
                              "AWS",
                              "ERP",
                         ].map((skill) => (
                              <div
                                   key={skill}
                                   className="rounded-xl border border-white/10 bg-[#0B1120]/60 px-3 py-2 text-xs text-slate-400"
                              >
                                   {skill}
                              </div>
                         ))}
                    </div>

                    {/* Stats */}

                    <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                         <div>
                              <div className="text-lg font-semibold">
                                   10+
                              </div>
                              <div className="text-xs text-slate-500">
                                   Projects
                              </div>
                         </div>

                         <div>
                              <div className="text-lg font-semibold">
                                   3
                              </div>
                              <div className="text-xs text-slate-500">
                                   Companies
                              </div>
                         </div>

                         <div>
                              <div className="text-lg font-semibold">
                                   4+
                              </div>
                              <div className="text-xs text-slate-500">
                                   Years
                              </div>
                         </div>
                    </div>

                    {/* Actions */}

                    <div className="mt-8 flex gap-2">
                         <button className="flex-1 rounded-xl border border-cyan-400/20 py-3 text-sm">
                              Resume
                         </button>

                         <button className="flex-1 rounded-xl border border-cyan-400/20 py-3 text-sm">
                              GitHub
                         </button>

                         <button className="flex-1 rounded-xl border border-cyan-400/20 py-3 text-sm">
                              LinkedIn
                         </button>
                    </div>
               </div>
          </div>
     );
}