import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
     {
          title: "Shortify",
          type: "AI + Social Platform",
          description:
               "Short-form social media platform with multilingual sentiment analysis for creator feedback.",
     },
     {
          title: "ERP System",
          type: "Enterprise Software",
          description:
               "Multi-module ERP platform for inventory, production and operations management.",
     },
     {
          title: "Flight Booking System",
          type: "Full Stack",
          description:
               "End-to-end flight booking platform with analytics, chatbot integration and ticket management.",
     },
     {
          title: "Smart Rehabilitation Glove",
          type: "IoT + Healthcare",
          description:
               "Robotic rehabilitation glove designed to assist hand recovery and therapy.",
     },
];

export default function Projects() {
     return (
          <div className="min-h-screen bg-[#050816] text-white">
               <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">

                    <Link
                         to="/"
                         className="mb-6 inline-flex items-center text-cyan-400 transition-colors hover:text-cyan-300"
                    >
                         ← Back
                    </Link>

                    <motion.div
                         layoutId="projects-node"
                         className="mb-12 rounded-3xl border border-violet-500/20 bg-[#0B1120]/80 p-8 backdrop-blur-xl"
                    >
                         <div className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                              Portfolio
                         </div>

                         <h1 className="mt-3 text-4xl font-semibold lg:text-6xl">
                              Projects
                         </h1>

                         <p className="mt-4 max-w-3xl text-slate-400">
                              A collection of products, platforms and systems
                              spanning AI, enterprise software, healthcare
                              technology and full stack development.
                         </p>
                    </motion.div>

                    {/* Featured Project */}

                    <section className="mb-16">
                         <div className="mb-4 text-sm uppercase tracking-widest text-violet-400">
                              Featured Project
                         </div>

                         <div className="group rounded-3xl border border-violet-500/20 bg-[#0B1120]/80 p-8 transition-all duration-300 hover:border-violet-500/40">
                              <div className="mb-3 text-cyan-400">
                                   AI + Social Platform
                              </div>

                              <h2 className="text-3xl font-semibold">
                                   Shortify
                              </h2>

                              <p className="mt-4 max-w-3xl text-slate-400">
                                   A social media platform focused on short-form
                                   content with multilingual sentiment analysis
                                   that helps creators understand audience
                                   reactions at scale.
                              </p>

                              <div className="mt-6 flex flex-wrap gap-2">
                                   {[
                                        "Next.js",
                                        "TypeScript",
                                        "MongoDB",
                                        "Flask",
                                        "AWS",
                                        "AI",
                                   ].map((tech) => (
                                        <span
                                             key={tech}
                                             className="rounded-xl border border-white/10 px-3 py-1 text-sm text-slate-300"
                                        >
                                             {tech}
                                        </span>
                                   ))}
                              </div>
                         </div>
                    </section>

                    {/* Categories */}

                    <section className="mb-12 flex flex-wrap gap-3">
                         {[
                              "All",
                              "AI",
                              "Enterprise",
                              "Full Stack",
                              "Healthcare",
                         ].map((category) => (
                              <button
                                   key={category}
                                   className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-all hover:border-cyan-400/30 hover:text-cyan-300"
                              >
                                   {category}
                              </button>
                         ))}
                    </section>

                    {/* Project Grid */}

                    <section className="grid gap-6 md:grid-cols-2">
                         {projects.map((project) => (
                              <div
                                   key={project.title}
                                   className="group rounded-3xl border border-white/10 bg-[#0B1120]/70 p-6 transition-all duration-300 hover:border-violet-500/30 hover:-translate-y-1"
                              >
                                   <div className="text-sm text-cyan-400">
                                        {project.type}
                                   </div>

                                   <h3 className="mt-2 text-xl font-semibold">
                                        {project.title}
                                   </h3>

                                   <p className="mt-3 text-sm leading-relaxed text-slate-400">
                                        {project.description}
                                   </p>

                                   <div className="mt-6 text-sm text-violet-300 opacity-0 transition-opacity group-hover:opacity-100">
                                        View Details →
                                   </div>
                              </div>
                         ))}
                    </section>
               </div>
          </div>
     );
}