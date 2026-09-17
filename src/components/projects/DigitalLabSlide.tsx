import { motion } from "framer-motion";
import { Accessibility, BarChart3, Boxes, Code2, Layers3, Pin } from "lucide-react";
import { useState } from "react";
import type { Project } from "../../content/types";

export default function DigitalLabSlide({ project }: { project?: Project }) {
     const [pinned, setPinned] = useState<number[]>([]);

     const cards = [
          {
               title: "Digital Solutions",
               type: "DIGITAL ASSETS",
               description: "Building and improving experiences that help teams discover, access and reuse digital capabilities.",
               tags: ["PRODUCT", "INNOVATION"],
               icon: Boxes,
               visual: "assets",
               accent: "bg-[#D04A02]",
          },
          {
               title: "Product Engineering",
               type: "DEVELOPMENT",
               description: "Contributing across frontend and backend systems within a large enterprise product ecosystem.",
               tags: ["FULL STACK", "PLATFORM"],
               icon: Code2,
               visual: "code",
               accent: "bg-[#FFB600]",
          },
          {
               title: "Performance",
               type: "ENGINEERING",
               description: "Improving application responsiveness and efficiency across high-usage digital workflows.",
               tags: ["API", "OPTIMIZATION"],
               icon: BarChart3,
               visual: "performance",
               accent: "bg-[#D04A02]",
          },
          {
               title: "User Experience",
               type: "EXPERIENCE",
               description: "Enhancing usability and accessibility to make enterprise tools easier to navigate and use.",
               tags: ["UX", "ACCESSIBILITY"],
               icon: Accessibility,
               visual: "experience",
               accent: "bg-[#FFB600]",
          },
          {
               title: "Platform Engineering",
               type: "PLATFORM",
               description: "Supporting platform improvements, integrations and upgrades across the product ecosystem.",
               tags: ["UPGRADES", "INTEGRATION"],
               icon: Layers3,
               visual: "platform",
               accent: "bg-[#D04A02]",
          },
          {
               title: "Enterprise Delivery",
               type: "DELIVERY",
               description: "Working within production systems supporting digital experiences at global enterprise scale.",
               tags: ["PRODUCTION", "GLOBAL"],
               icon: Boxes,
               visual: "enterprise",
               accent: "bg-[#FFB600]",
          },
     ];

     const togglePin = (index: number) => {
          setPinned((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]);
     };

     return (
          <section id={project?.id ?? "digitalLab"} data-slide className="relative min-h-screen overflow-hidden bg-white text-[#111111]">
               <div className="absolute left-0 top-0 h-full w-4 bg-[#D04A02]" />
               <div className="absolute right-24 top-20 h-24 w-24 bg-[#FFB600]" />
               <div className="absolute bottom-24 right-48 h-16 w-16 bg-[#D04A02]" />
               <div className="absolute bottom-0 left-0 h-6 w-full bg-[#D04A02]" />

               <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-12">
                    <div className="grid w-full gap-20 lg:grid-cols-[1.05fr_0.95fr]">
                         <div className="flex flex-col justify-center">
                              <div className="mb-12">
                                   <img src="/pwc-logo.png" alt="PwC" className="h-28 object-contain" />
                              </div>

                              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#D04A02]">
                                   Digital Lab · Digital Lab Extension
                              </div>

                              <h2 className="text-6xl font-semibold leading-[1.05] md:text-7xl">
                                   Digital Lab
                              </h2>

                              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#555555]">
                                   A global digital innovation platform that helps teams discover, create and reuse digital solutions, with its extension bringing those capabilities into the tools they use every day.
                              </p>

                              <div className="mt-10 flex flex-wrap gap-3">
                                   {["React.js", "Angular", ".NET", "SQL Server", "REST APIs", "GitHub", "Azure DevOps"].map((tech) => (
                                        <span key={tech} className="border border-[#111111]/20 bg-white px-3 py-2 text-xs font-semibold text-[#333333]">
                                             {tech}
                                        </span>
                                   ))}
                              </div>

                              <div className="mt-12 flex gap-14 border-t border-[#111111]/10 pt-6">
                                   <div>
                                        <div className="text-4xl font-bold text-[#D04A02]">50K+</div>
                                        <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[#666666]">Monthly users</div>
                                   </div>
                                   <div>
                                        <div className="text-sm font-semibold">Full Stack Intern</div>
                                        <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[#666666]">Jan 2026 — Oct 2026</div>
                                   </div>
                              </div>
                         </div>

                         <div className="flex items-center">
                              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="w-full">
                                   <div className="mb-6 flex items-end justify-between">
                                        <div>
                                             <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#666666]">Digital Lab</div>
                                             <div className="mt-2 text-3xl font-semibold">Areas of Contribution</div>
                                        </div>

                                        <motion.div key={pinned.length} initial={{ scale: 1.1 }} animate={{ scale: 1 }} className="flex items-center gap-2 border border-[#111111]/15 bg-[#F7F7F5] px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em]">
                                             <Pin size={13} fill={pinned.length ? "currentColor" : "none"} className="text-[#D04A02]" />
                                             {String(pinned.length).padStart(2, "0")} / 06
                                        </motion.div>
                                   </div>

                                   <div className="grid grid-cols-2 gap-4">
                                        {cards.map(({ title, type, description, tags, icon: Icon, visual, accent }, index) => {
                                             const isPinned = pinned.includes(index);

                                             return (
                                                  <motion.div
                                                       key={title}
                                                       initial={{ opacity: 0, y: 18 }}
                                                       whileInView={{ opacity: 1, y: 0 }}
                                                       transition={{ delay: index * 0.07 }}
                                                       whileHover={{ y: -4, transition: { duration: 0.2, delay: 0 } }}
                                                       className={`group relative flex h-[230px] flex-col overflow-hidden border bg-[#F7F7F5] p-5 transition-shadow duration-300 ${isPinned ? "border-[#D04A02] shadow-[4px_5px_0_rgba(208,74,2,0.12)]" : "border-[#111111]/15 hover:shadow-[4px_5px_0_rgba(17,17,17,0.07)]"}`}
                                                  >
                                                       <div className={`absolute left-0 top-0 h-1 w-full ${accent}`} />

                                                       <div className="flex items-start justify-between">
                                                            <div className="min-w-0">
                                                                 <div className="text-[8px] font-bold tracking-[0.18em] text-[#999999]">{type}</div>
                                                                 <div className="mt-1 whitespace-nowrap text-[18px] font-semibold">{title}</div>
                                                            </div>

                                                            <button
                                                                 onClick={() => togglePin(index)}
                                                                 aria-label={`${isPinned ? "Unpin" : "Pin"} ${title}`}
                                                                 className={`ml-2 flex h-7 w-7 shrink-0 items-center justify-center transition-colors ${isPinned ? "text-[#D04A02]" : "text-[#999999] hover:text-[#D04A02]"}`}
                                                            >
                                                                 <Pin size={14} fill={isPinned ? "currentColor" : "none"} className="transition-transform duration-200 group-hover:-rotate-12" />
                                                            </button>
                                                       </div>

                                                       <div className="relative mt-3 h-10 shrink-0 overflow-hidden border-y border-[#111111]/5">
                                                            {visual === "assets" && (
                                                                 <div className="flex h-full items-center gap-1.5">
                                                                      {[0, 1, 2, 3].map((item) => (
                                                                           <motion.div
                                                                                key={item}
                                                                                animate={{ y: [0, item % 2 ? -2 : 2, 0] }}
                                                                                transition={{ duration: 2 + item * 0.25, repeat: Infinity, ease: "easeInOut" }}
                                                                                className={`h-6 flex-1 border border-[#111111]/10 bg-white ${item === 0 ? "border-[#D04A02]/40" : ""}`}
                                                                           >
                                                                                <div className="m-1 h-1 w-1/2 bg-[#111111]/10" />
                                                                                <div className="mx-1 h-1 w-3/4 bg-[#111111]/5" />
                                                                           </motion.div>
                                                                      ))}
                                                                 </div>
                                                            )}

                                                            {visual === "code" && (
                                                                 <div className="flex h-full items-center justify-center gap-3 text-[10px] font-bold tracking-[0.15em] text-[#666666]">
                                                                      <span className="text-[#D04A02]">&lt;/&gt;</span>
                                                                      <span className="h-px w-8 bg-[#111111]/20" />
                                                                      <span>API</span>
                                                                      <span className="h-px w-8 bg-[#111111]/20" />
                                                                      <span className="text-[#D04A02]">DB</span>
                                                                 </div>
                                                            )}

                                                            {visual === "performance" && (
                                                                 <svg viewBox="0 0 260 40" className="h-full w-full">
                                                                      <path d="M0 32 L42 29 L78 31 L116 20 L150 24 L184 13 L220 16 L260 5" fill="none" stroke="#D04A02" strokeWidth="2" />
                                                                      <motion.path
                                                                           d="M0 32 L42 29 L78 31 L116 20 L150 24 L184 13 L220 16 L260 5"
                                                                           fill="none"
                                                                           stroke="#FFB600"
                                                                           strokeWidth="1.5"
                                                                           strokeDasharray="6 6"
                                                                           animate={{ strokeDashoffset: [0, -24] }}
                                                                           transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                                                      />
                                                                 </svg>
                                                            )}

                                                            {visual === "experience" && (
                                                                 <div className="flex h-full items-center justify-center gap-2 text-[8px] font-bold tracking-[0.12em] text-[#666666]">
                                                                      <span className="border border-[#111111]/15 bg-white px-2 py-1">TAB</span>
                                                                      <span className="text-[#D04A02]">→</span>
                                                                      <span className="border border-[#111111]/15 bg-white px-2 py-1">ENTER</span>
                                                                      <span className="text-[#D04A02]">→</span>
                                                                      <span className="border border-[#111111]/15 bg-white px-2 py-1">TAB</span>
                                                                 </div>
                                                            )}

                                                            {visual === "platform" && (
                                                                 <div className="relative flex h-full items-center justify-center gap-3">
                                                                      <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2, repeat: Infinity }} className="h-5 w-5 border border-[#111111]/15 bg-white" />
                                                                      <div className="h-px w-8 bg-[#111111]/15" />
                                                                      <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2, delay: 0.25, repeat: Infinity }} className="h-7 w-7 border border-[#D04A02]/40 bg-white" />
                                                                      <div className="h-px w-8 bg-[#111111]/15" />
                                                                      <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} className="h-5 w-5 border border-[#111111]/15 bg-[#FFB600]/20" />
                                                                 </div>
                                                            )}

                                                            {visual === "enterprise" && (
                                                                 <div className="relative flex h-full items-center justify-center gap-5">
                                                                      <motion.div animate={{ y: [0, -2, 0] }} transition={{ duration: 2, repeat: Infinity }} className="h-4 w-4 rounded-full border border-[#D04A02] bg-white" />
                                                                      <div className="h-px w-8 bg-[#111111]/15" />
                                                                      <motion.div animate={{ y: [0, 2, 0] }} transition={{ duration: 2, delay: 0.2, repeat: Infinity }} className="h-6 w-6 rounded-full border border-[#FFB600] bg-white" />
                                                                      <div className="h-px w-8 bg-[#111111]/15" />
                                                                      <motion.div animate={{ y: [0, -2, 0] }} transition={{ duration: 2, delay: 0.4, repeat: Infinity }} className="h-4 w-4 rounded-full border border-[#D04A02] bg-white" />
                                                                 </div>
                                                            )}
                                                       </div>

                                                       <div className="relative mt-3 flex-1 overflow-hidden">
                                                            <p className="text-[10.5px] leading-[1.45] text-[#666666]">{description}</p>
                                                       </div>

                                                       <div className="mt-2 flex shrink-0 items-center gap-3 border-t border-[#111111]/8 pt-2">
                                                            {tags.map((tag) => (
                                                                 <span key={tag} className="text-[7px] font-bold tracking-[0.13em] text-[#999999]">{tag}</span>
                                                            ))}
                                                       </div>

                                                       <div className={`absolute bottom-0 right-0 h-2 w-2 ${isPinned ? "bg-[#D04A02]" : "bg-transparent group-hover:bg-[#D04A02]"}`} />
                                                  </motion.div>
                                             );
                                        })}
                                   </div>
                              </motion.div>
                         </div>
                    </div>
               </div>
          </section>
     );
}