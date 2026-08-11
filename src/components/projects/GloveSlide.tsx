import { motion } from "framer-motion";
import type { Project } from "../../content/types";

export default function GloveSlide({ project }: { project?: Project }) {
     return (
          <section
               id={project?.id ?? "robotic-glove"}
               data-slide
               className="relative min-h-screen overflow-hidden bg-[#111315] text-[#e8e6df]"
          >
               {/* Background */}

               <div className="pointer-events-none absolute inset-0">
                    <div
                         className="absolute inset-0 opacity-[0.12]"
                         style={{
                              backgroundImage:
                                   "linear-gradient(rgba(232,230,223,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(232,230,223,0.08) 1px, transparent 1px)",
                              backgroundSize: "48px 48px",
                         }}
                    />

                    <div className="absolute -right-40 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full border border-slate-400/10" />
                    <div className="absolute -right-10 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-slate-400/10" />
                    <div className="absolute left-[35%] top-[15%] h-72 w-72 rounded-full bg-slate-400/5 blur-[120px]" />
               </div>

               {/* Main */}

               <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-center px-6 py-20 lg:px-10">
                    <div className="grid w-full gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
                         {/* Left */}

                         <div className="flex flex-col">
                              <div className="flex items-center gap-3">
                                   <div className="h-px w-10 bg-slate-500" />
                                   <span className="text-[10px] uppercase tracking-[0.35em] text-slate-500">
                                        Healthcare Robotics
                                   </span>
                              </div>

                              <div className="mt-7">
                                   <h2 className="text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                                        Therapeutic
                                        <br />
                                        <span className="text-slate-500">
                                             Robotic Glove
                                        </span>
                                   </h2>

                                   <div className="mt-6 h-px w-24 bg-slate-600" />

                                   <p className="mt-7 max-w-lg text-lg leading-8 text-slate-300">
                                        A wearable rehabilitation system
                                        designed to assist hand movement
                                        through controlled robotic actuation.
                                   </p>

                                   <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500">
                                        The project explored the combination
                                        of wearable mechanics, servo-based
                                        actuation and embedded control to
                                        create an accessible approach to
                                        assisted hand rehabilitation.
                                   </p>
                              </div>

                              {/* Project Metadata */}

                              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[10px] uppercase tracking-[0.2em] text-slate-500">
                                   <span>Research</span>
                                   <span>Hardware</span>
                                   <span>Rehabilitation</span>
                                   <span>Prototype</span>
                              </div>

                              {/* Development */}

                              <div className="mt-10 border-t border-white/10 pt-7">
                                   <div className="text-[10px] uppercase tracking-[0.3em] text-slate-600">
                                        Prototype Evolution
                                   </div>

                                   <div className="mt-5 flex items-center">
                                        <Iteration number="01" label="Concept" />
                                        <IterationLine />
                                        <Iteration number="02" label="Prototype" />
                                        <IterationLine />
                                        <Iteration number="03" label="Testing" />
                                        <IterationLine />
                                        <Iteration number="04" label="Iteration" />
                                   </div>
                              </div>

                              {/* Tech */}

                              <div className="mt-9 flex flex-wrap gap-2">
                                   {project?.techStack?.map((tech) => (
                                        <span
                                             key={tech}
                                             className="border border-white/10 px-3 py-1.5 text-xs text-slate-500"
                                        >
                                             {tech}
                                        </span>
                                   ))}
                              </div>
                         </div>

                         {/* Right */}

                         <div className="relative">
                              {/* Video label */}

                              <div className="mb-4 flex items-end justify-between">
                                   <div>
                                        <div className="text-[10px] uppercase tracking-[0.35em] text-slate-600">
                                             Prototype Documentation
                                        </div>
                                        <div className="mt-2 text-sm text-slate-400">
                                             From concept to working mechanism
                                        </div>
                                   </div>

                                   <div className="hidden text-[10px] uppercase tracking-[0.2em] text-slate-600 sm:block">
                                        Development / 01—04
                                   </div>
                              </div>

                              {/* Video */}

                              <motion.div
                                   initial={{ opacity: 0, y: 25 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   transition={{ duration: 0.8 }}
                                   className="relative overflow-hidden border border-white/10 bg-[#0b0d0f] shadow-[0_35px_100px_rgba(0,0,0,0.4)]"
                              >
                                   {/* Video Header */}

                                   <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                                        <div className="flex items-center gap-2">
                                             <span className="h-2 w-2 rounded-full bg-slate-500" />
                                             <span className="text-[9px] uppercase tracking-[0.25em] text-slate-600">
                                                  Robotic Glove / Prototype
                                             </span>
                                        </div>

                                        <span className="text-[9px] text-slate-700">
                                             VIDEO DOCUMENTATION
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

                                   {/* Video Footer */}

                                   <div className="flex flex-col gap-2 border-t border-white/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                                        <span className="text-xs text-slate-500">
                                             Prototype evolution and testing
                                        </span>

                                        <span className="text-[9px] uppercase tracking-[0.25em] text-slate-700">
                                             Engineering Documentation
                                        </span>
                                   </div>
                              </motion.div>

                              {/* Achievements */}

                              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                   <Achievement
                                        eyebrow="Publication"
                                        title="Robotics Technology in Hand Rehabilitation"
                                        detail="Book Chapter · 2024"
                                   />

                                   <Achievement
                                        eyebrow="Biothon"
                                        title="2nd Place"
                                        detail="Biomedical Hackathon"
                                        highlighted
                                   />
                              </div>

                              {/* Technical corner marker */}

                              <div className="pointer-events-none absolute -right-3 -top-3 hidden h-10 w-10 border-r border-t border-slate-500/40 sm:block" />
                              <div className="pointer-events-none absolute -bottom-3 -left-3 hidden h-10 w-10 border-b border-l border-slate-500/40 sm:block" />
                         </div>
                    </div>
               </div>

               {/* Footer */}

               <div className="absolute bottom-5 left-6 hidden text-[9px] uppercase tracking-[0.35em] text-slate-700 lg:block">
                    Therapeutic Robotics / Research / Prototype
               </div>

               <div className="absolute bottom-5 right-6 hidden text-[9px] uppercase tracking-[0.35em] text-slate-700 lg:block">
                    {project?.title ?? "Robotic Glove"}
               </div>
          </section>
     );
}

function Iteration({
     number,
     label,
}: {
     number: string;
     label: string;
}) {
     return (
          <div className="flex shrink-0 flex-col gap-2">
               <div className="flex h-7 w-7 items-center justify-center border border-slate-600 text-[9px] text-slate-400">
                    {number}
               </div>
               <span className="text-[9px] uppercase tracking-[0.15em] text-slate-600">
                    {label}
               </span>
          </div>
     );
}

function IterationLine() {
     return <div className="mx-2 mb-5 h-px min-w-5 flex-1 bg-slate-700/60 sm:mx-3" />;
}

function Achievement({
     eyebrow,
     title,
     detail,
     highlighted = false,
}: {
     eyebrow: string;
     title: string;
     detail: string;
     highlighted?: boolean;
}) {
     return (
          <motion.div
               whileHover={{ y: -3 }}
               transition={{ duration: 0.2 }}
               className={`relative border p-5 ${
                    highlighted
                         ? "border-[#b9a76a]/30 bg-[#b9a76a]/[0.06]"
                         : "border-white/10 bg-white/[0.025]"
               }`}
          >
               <div className="flex items-center justify-between">
                    <span
                         className={`text-[9px] uppercase tracking-[0.3em] ${
                              highlighted
                                   ? "text-[#b9a76a]"
                                   : "text-slate-600"
                         }`}
                    >
                         {eyebrow}
                    </span>

                    <span
                         className={`h-1.5 w-1.5 rounded-full ${
                              highlighted
                                   ? "bg-[#b9a76a]"
                                   : "bg-slate-600"
                         }`}
                    />
               </div>

               <div className="mt-4 text-sm font-medium leading-5 text-slate-300">
                    {title}
               </div>

               <div className="mt-2 text-[10px] uppercase tracking-[0.15em] text-slate-600">
                    {detail}
               </div>
          </motion.div>
     );
}