import { motion } from "framer-motion";

export default function GloveSlide() {
     return (
          <section
               id="robotic-glove"
               data-slide
               className="relative min-h-screen overflow-hidden bg-[#020617] text-white"
          >
               {/* Background */}

               <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(34,211,238,0.12),transparent_45%)]" />

               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[40px_40px]" />

               {/* Floating Publication Badge */}

               <motion.div
                    animate={{
                         y: [0, -10, 0],
                    }}
                    transition={{
                         duration: 5,
                         repeat: Infinity,
                         ease: "easeInOut",
                    }}
                    className="absolute right-10 top-10 z-20 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5 backdrop-blur-xl"
               >
                    <div className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                         Publication
                    </div>

                    <div className="mt-3 text-lg font-medium">
                         Robotics Technology
                         <br />
                         in Hand Rehabilitation
                    </div>

                    <div className="mt-2 text-sm text-slate-400">
                         Book Chapter • 2024
                    </div>
               </motion.div>

               <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-8">

                    <div className="grid w-full gap-20 lg:grid-cols-[0.85fr_1.15fr]">

                         {/* Left Side */}

                         <div>

                              <div className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
                                   Healthcare Robotics
                              </div>

                              <h2 className="text-6xl font-semibold lg:text-7xl">
                                   Therapeutic
                                   <br />
                                   Robotic Glove
                              </h2>

                              <p className="mt-6 max-w-lg text-lg text-slate-300">
                                   A wearable rehabilitation device
                                   designed to assist hand recovery
                                   after stroke, paralysis and injury
                                   through robotic-assisted movement.
                              </p>

                              {/* Timeline */}

                              <div className="mt-14 space-y-8">

                                   <div className="flex gap-4">
                                        <div className="mt-1 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

                                        <div>
                                             <div className="font-medium">
                                                  Research
                                             </div>

                                             <div className="text-sm text-slate-500">
                                                  Rehabilitation robotics
                                                  study and technology
                                                  analysis.
                                             </div>
                                        </div>
                                   </div>

                                   <div className="flex gap-4">
                                        <div className="mt-1 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

                                        <div>
                                             <div className="font-medium">
                                                  Prototype Development
                                             </div>

                                             <div className="text-sm text-slate-500">
                                                  Hardware design,
                                                  actuation system and
                                                  control logic.
                                             </div>
                                        </div>
                                   </div>

                                   <div className="flex gap-4">
                                        <div className="mt-1 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

                                        <div>
                                             <div className="font-medium">
                                                  Publication
                                             </div>

                                             <div className="text-sm text-slate-500">
                                                  Technical documentation
                                                  and book chapter
                                                  contribution.
                                             </div>
                                        </div>
                                   </div>

                              </div>

                         </div>

                         {/* Right Side */}

                         <div className="relative flex items-center justify-center">

                              {/* Recovery Metrics */}

                              <motion.div
                                   animate={{
                                        y: [0, -6, 0],
                                   }}
                                   transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                   }}
                                   className="absolute right-0 top-20 z-20 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-5 backdrop-blur-xl"
                              >
                                   <div className="text-sm text-slate-400">
                                        Recovery Metrics
                                   </div>

                                   <div className="mt-4 space-y-3">

                                        <div>
                                             <div className="text-xs text-slate-500">
                                                  Grip Strength
                                             </div>

                                             <div className="text-2xl font-semibold text-cyan-300">
                                                  +34%
                                             </div>
                                        </div>

                                        <div>
                                             <div className="text-xs text-slate-500">
                                                  Range of Motion
                                             </div>

                                             <div className="text-2xl font-semibold text-cyan-300">
                                                  +27%
                                             </div>
                                        </div>

                                   </div>
                              </motion.div>

                              {/* Blueprint */}

                              <div className="relative h-[550px] w-[550px]">

                                   <svg
                                        className="absolute inset-0 h-full w-full"
                                        viewBox="0 0 550 550"
                                   >

                                        {/* Connections */}

                                        <path
                                             d="M275 360 L120 160"
                                             stroke="rgba(34,211,238,0.25)"
                                             strokeWidth="2"
                                        />

                                        <path
                                             d="M275 360 L200 120"
                                             stroke="rgba(34,211,238,0.25)"
                                             strokeWidth="2"
                                        />

                                        <path
                                             d="M275 360 L275 90"
                                             stroke="rgba(34,211,238,0.25)"
                                             strokeWidth="2"
                                        />

                                        <path
                                             d="M275 360 L350 120"
                                             stroke="rgba(34,211,238,0.25)"
                                             strokeWidth="2"
                                        />

                                        <path
                                             d="M275 360 L430 160"
                                             stroke="rgba(34,211,238,0.25)"
                                             strokeWidth="2"
                                        />

                                   </svg>

                                   {/* Palm */}

                                   <motion.div
                                        animate={{
                                             boxShadow: [
                                                  "0 0 30px rgba(34,211,238,0.15)",
                                                  "0 0 60px rgba(34,211,238,0.35)",
                                                  "0 0 30px rgba(34,211,238,0.15)",
                                             ],
                                        }}
                                        transition={{
                                             duration: 4,
                                             repeat: Infinity,
                                        }}
                                        className="absolute left-1/2 top-[65%] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30 bg-cyan-400/10"
                                   />

                                   {/* Finger Nodes */}

                                   {[
                                        { x: 120, y: 160 },
                                        { x: 200, y: 120 },
                                        { x: 275, y: 90 },
                                        { x: 350, y: 120 },
                                        { x: 430, y: 160 },
                                   ].map((node, index) => (
                                        <div
                                             key={index}
                                             className="absolute"
                                             style={{
                                                  left: node.x,
                                                  top: node.y,
                                             }}
                                        >
                                             <motion.div
                                                  animate={{
                                                       scale: [
                                                            1,
                                                            1.8,
                                                            1,
                                                       ],
                                                       opacity: [
                                                            0.8,
                                                            0,
                                                            0.8,
                                                       ],
                                                  }}
                                                  transition={{
                                                       duration:
                                                            2 +
                                                            index *
                                                            0.3,
                                                       repeat:
                                                            Infinity,
                                                  }}
                                                  className="absolute h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20"
                                             />

                                             <div className="h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,1)]" />
                                        </div>
                                   ))}

                                   {/* Central Label */}

                                   <div className="absolute left-1/2 top-[65%] -translate-x-1/2 translate-y-20 text-center">
                                        <div className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                                             Neural Motion
                                        </div>

                                        <div className="mt-2 text-slate-400">
                                             Rehabilitation Assistance System
                                        </div>
                                   </div>

                              </div>

                         </div>

                    </div>

               </div>
          </section>
     );
}