import { motion } from "framer-motion";
import type { Project } from "../../content/types";
import GithubIcon from "../../assets/GitHubLogo.png";

export default function ShortifySlide({
     project,
}: {
     project: Project;
}) {
     return (
          <section
               id={project.id}
               data-slide
               className="relative min-h-screen overflow-hidden bg-[#0d0d0d] text-white"
          >
               {/* Pink Brand Background */}

               <div className="pointer-events-none absolute inset-0 hidden lg:grid lg:grid-cols-2">
                    {/* Left 50% */}

                    <div className="bg-linear-to-br from-[#f54b9a] via-[#f95f8b] to-[#ff7377]" />
                    
                    <div
                         className="absolute inset-0 bg-repeat opacity-100"
                         style={{
                              backgroundImage:
                                   "url('/projects/shortify/DoodleGraphic.svg')",
                         }}
                    />

                    {/* Right 50% */}

                    <div className="relative overflow-hidden bg-[#111111]">


                    </div>
               </div>

               {/* Right Side Ambient Glow */}

               <div className="pointer-events-none absolute right-[10%] top-[20%] h-96 w-96 rounded-full bg-pink-500/10 blur-[140px]" />

               <div className="pointer-events-none absolute bottom-[5%] right-[25%] h-72 w-72 rounded-full bg-rose-500/10 blur-[120px]" />

               <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-center px-6 py-20 lg:px-10">

                    <div className="grid w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0d] shadow-[0_30px_120px_rgba(0,0,0,0.35)] lg:grid-cols-2">

                         {/* LEFT — Brand */}

                         <div className="relative min-h-[600px] overflow-hidden px-8 py-12 lg:px-12">

                              {/* Doodle Background */}



                              <div className="relative z-10 flex h-full flex-col">

                                   {/* Brand */}

                                   <div className="flex items-center gap-4">

                                        <img
                                             src="/projects/shortify/Logo.png"
                                             alt="Shortify"
                                             className="h-14 w-14 object-contain"
                                        />

                                        <div>
                                             <div className="text-sm font-medium uppercase tracking-[0.25em] text-pink-400">
                                                  AI + Social Media
                                             </div>

                                             <div className="mt-1 text-sm text-white/40">
                                                  Personal Project
                                             </div>
                                        </div>

                                   </div>

                                   {/* Title */}

                                   <div className="mt-16">

                                        <h2 className="text-6xl font-semibold tracking-tight lg:text-7xl">
                                             Shortify
                                        </h2>

                                        <div className="mt-5 h-1 w-20 rounded-full bg-linear-to-r from-pink-500 to-rose-400" />

                                   </div>

                                   {/* Description */}

                                   <div className="mt-8 max-w-xl space-y-5 text-[17px] leading-8">

                                        <p className="text-white/85">
                                             A short-form social media
                                             platform designed around
                                             content discovery,
                                             engagement and audience
                                             sentiment.
                                        </p>

                                        <p className="text-white/55">
                                             Shortify uses multilingual
                                             sentiment analysis to
                                             understand how audiences
                                             react to content and uses
                                             those signals to improve
                                             recommendations and creator
                                             insights.
                                        </p>

                                   </div>

                                   {/* Links */}

                                   <div className="mt-10 flex flex-wrap gap-3">

                                        <a
                                             href={project.githubUrl}
                                             target="_blank"
                                             rel="noreferrer"
                                             className="group flex items-center gap-3 rounded-xl border border-pink-400/30 bg-pink-500/10 px-4 py-3 transition-all duration-300 hover:border-pink-400/60 hover:bg-pink-500/20"
                                        >
                                             <img
                                                  src={GithubIcon}
                                                  alt="GitHub"
                                                  className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                                             />

                                             <span className="text-sm font-medium">
                                                  Source Code
                                             </span>
                                        </a>

                                   </div>

                                   {/* Tech */}

                                   <div className="mt-auto pt-12">

                                        <div className="mb-4 text-xs uppercase tracking-[0.25em] text-white/35">
                                             Built With
                                        </div>

                                        <div className="flex flex-wrap gap-2">

                                             {project.techStack.map(
                                                  (tech) => (
                                                       <span
                                                            key={tech}
                                                            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/55"
                                                       >
                                                            {tech}
                                                       </span>
                                                  )
                                             )}

                                             <span className="rounded-lg border border-pink-400/20 bg-pink-500/10 px-3 py-1.5 text-xs text-pink-300">
                                                  NLP
                                             </span>

                                        </div>

                                   </div>

                              </div>

                         </div>

                         {/* RIGHT — Product */}

                         <div className="relative flex min-h-[600px] items-center justify-center overflow-hidden border-t border-white/10 bg-[#111111] px-6 py-12 lg:border-l lg:border-t-0 lg:px-12">

                              <div
                                   className="pointer-events-none absolute inset-0 bg-repeat opacity-20"
                                   style={{
                                        backgroundImage:
                                             "url('/projects/shortify/DoodleGraphic.svg')",
                                   }}
                              />
                              {/* Product Heading */}

                              <div className="absolute left-8 top-8 lg:left-12 lg:top-10">

                                   <div className="text-xs uppercase tracking-[0.3em] text-white/30">
                                        Product Showcase
                                   </div>

                                   <div className="mt-2 text-sm text-white/50">
                                        Shortify in action
                                   </div>

                              </div>

                              {/* Video Window */}

                              <motion.div
                                   initial={{
                                        opacity: 0,
                                        y: 20,
                                   }}
                                   whileInView={{
                                        opacity: 1,
                                        y: 0,
                                   }}
                                   viewport={{
                                        once: true,
                                   }}
                                   transition={{
                                        duration: 0.7,
                                   }}
                                   className="relative mt-10 w-full max-w-3xl"
                              >

                                   <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_30px_100px_rgba(0,0,0,0.5)]">

                                        {/* Browser Header */}

                                        <div className="flex items-center justify-between border-b border-white/10 bg-[#191919] px-4 py-3">

                                             <div className="flex items-center gap-2">

                                                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />

                                                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />

                                                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />

                                             </div>

                                             <div className="rounded-md bg-black/40 px-4 py-1 text-[10px] text-white/30">
                                                  shortify
                                             </div>

                                             <div className="w-12" />

                                        </div>

                                        {/* Video */}

                                        <video
                                             controls
                                             muted
                                             loop
                                             playsInline
                                             className="aspect-video w-full bg-black object-cover"
                                        >
                                             <source
                                                  src="/projects/shortify/Shortify_withCC.mp4"
                                                  type="video/mp4"
                                             />
                                        </video>

                                   </div>

                                   {/* Screenshot Strip */}

                                   <div className="mt-4 grid grid-cols-2 gap-4">

                                        <div className="group overflow-hidden rounded-xl border border-white/10 bg-black">

                                             <img
                                                  src="/images/projects/shortify/feed.png"
                                                  alt="Shortify feed"
                                                  className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                             />

                                        </div>

                                        <div className="group overflow-hidden rounded-xl border border-white/10 bg-black">

                                             <img
                                                  src="/images/projects/shortify/analytics.png"
                                                  alt="Shortify analytics"
                                                  className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                             />

                                        </div>

                                   </div>

                              </motion.div>

                              {/* Brand Accent */}

                              <div className="absolute bottom-8 right-8 flex items-center gap-3 lg:bottom-10 lg:right-12">

                                   <div className="h-px w-10 bg-pink-500/50" />

                                   <span className="text-xs uppercase tracking-[0.25em] text-pink-400/60">
                                        Shortify
                                   </span>

                              </div>

                         </div>

                    </div>

               </div>

          </section>
     );
}