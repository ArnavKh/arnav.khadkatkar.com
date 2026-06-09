import { forwardRef } from "react";

interface Props {
     isHovered: boolean;
     onMouseEnter: () => void;
     onMouseLeave: () => void;
}

const CenterNode = forwardRef<HTMLDivElement, Props>(
     (
          {
               isHovered,
               onMouseEnter,
               onMouseLeave,
          },
          ref
     ) => {
          return (
               <div
                    ref={ref}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className={`absolute left-1/2 top-1/2 w-[min(90vw,24rem)] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-violet-500/40 bg-[#0B1120]/85 p-6 backdrop-blur-xl transition-all duration-500 ${isHovered
                         ? "shadow-[0_0_220px_rgba(139,92,246,0.35)] scale-[1.02]"
                         : "shadow-[0_0_120px_rgba(139,92,246,0.15)]"
                         }`}
               >
                    <div className="text-center">
                         <h1 className="text-3xl font-semibold text-white">
                              Arnav Khadkatkar
                         </h1>

                         <p className="mt-2 text-sm text-cyan-300">
                              Full Stack Developer
                         </p>

                         <p className="mt-3 text-sm text-slate-500">
                              Building enterprise software, AI products,
                              and scalable web applications.
                         </p>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-3 text-center">
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

                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                         <button className="rounded-lg border border-cyan-400/20 px-3 py-2 text-xs hover:border-cyan-400/50">
                              Resume
                         </button>

                         <button className="rounded-lg border border-cyan-400/20 px-3 py-2 text-xs hover:border-cyan-400/50">
                              GitHub
                         </button>

                         <button className="rounded-lg border border-cyan-400/20 px-3 py-2 text-xs hover:border-cyan-400/50">
                              LinkedIn
                         </button>
                    </div>
               </div>
          );
     }
);
export default CenterNode;