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
               className="relative min-h-screen overflow-hidden"
          >
               {/* Background */}

               <div className="absolute inset-0 bg-linear-to-br from-pink-600/20 via-orange-500/10 to-red-500/20" />

               {/* Emoji Layer */}

               <div className="pointer-events-none absolute inset-0 overflow-hidden">

                    <div className="absolute left-[10%] top-[15%] text-7xl opacity-10">
                         😊
                    </div>

                    <div className="absolute right-[15%] top-[20%] text-8xl opacity-10">
                         😍
                    </div>

                    <div className="absolute left-[20%] bottom-[20%] text-7xl opacity-10">
                         😡
                    </div>

                    <div className="absolute right-[25%] bottom-[10%] text-7xl opacity-10">
                         😢
                    </div>

               </div>

               <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-8 py-24">

                    <div className="grid w-full gap-16 lg:grid-cols-[0.95fr_1.05fr]">

                         {/* LEFT */}

                         <div>

                              <div className="mb-4 text-sm uppercase tracking-[0.3em] text-pink-400">
                                   AI + Social Media
                              </div>

                              <h2 className="text-7xl font-semibold">
                                   {project.title}
                              </h2>

                              <p className="mt-8 text-lg leading-relaxed text-slate-300">
                                   Shortify is a short-form
                                   social media platform
                                   that combines content
                                   creation, audience
                                   engagement and
                                   AI-powered analytics.
                              </p>

                              <p className="mt-4 text-lg leading-relaxed text-slate-400">
                                   The platform performs
                                   multilingual sentiment
                                   analysis on comments in
                                   English, Hindi and Marathi,
                                   enabling creators to better
                                   understand audience
                                   reactions while powering
                                   sentiment-driven
                                   recommendation systems.
                              </p>

                              {/* Links */}

                              <div className="mt-10 flex flex-wrap gap-3">
                                   <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-3 rounded-xl border border-pink-400/20 bg-pink-400/10 px-4 py-3 transition-all hover:border-pink-400/40"
                                   >
                                        <img
                                             src={GithubIcon}
                                             alt="GitHub"
                                             className="h-8 w-8"
                                        />

                                        <span>Source Code</span>
                                   </a>
                              </div>

                              {/* Tech */}

                              <div className="mt-10 flex flex-wrap gap-3">

                                   {project.techStack.map(
                                        (tech) => (
                                             <div
                                                  key={
                                                       tech
                                                  }
                                                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2"
                                             >
                                                  {
                                                       tech
                                                  }
                                             </div>
                                        )
                                   )}

                              </div>

                              {/* Architecture */}

                              <div className="mt-12 rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-xl">

                                   <div className="mb-6 text-sm uppercase tracking-[0.25em] text-slate-500">
                                        Architecture
                                   </div>

                                   <div className="flex flex-wrap items-center gap-3 text-sm">

                                        <div className="rounded-xl bg-white/5 px-4 py-2">
                                             Next.js
                                        </div>

                                        →

                                        <div className="rounded-xl bg-white/5 px-4 py-2">
                                             MongoDB
                                        </div>

                                        →

                                        <div className="rounded-xl bg-white/5 px-4 py-2">
                                             Sentiment
                                             Engine
                                        </div>

                                        →

                                        <div className="rounded-xl bg-white/5 px-4 py-2">
                                             Recommendations
                                        </div>

                                   </div>

                              </div>

                         </div>

                         {/* RIGHT */}

                         <div className="flex items-center justify-center">

                              <motion.div
                                   animate={{
                                        y: [0, -10, 0],
                                   }}
                                   transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                   }}
                                   className="w-full max-w-2xl rounded-3xl border border-pink-500/20 bg-black/30 p-6 backdrop-blur-xl"
                              >

                                   <div className="mb-6 flex items-center justify-between">

                                        <div className="text-xl font-medium">
                                             Product Showcase
                                        </div>

                                        <div className="rounded-full bg-pink-500/20 px-3 py-1 text-sm text-pink-300">
                                             Working Prototype
                                        </div>

                                   </div>

                                   {/* Video */}

                                   <div className="overflow-hidden rounded-2xl border border-white/10">

                                        <video
                                             controls
                                             muted
                                             loop
                                             playsInline
                                             className="w-full"
                                        >
                                             <source
                                                  src="/videos/shortify-demo.mp4"
                                                  type="video/mp4"
                                             />
                                        </video>

                                   </div>

                                   {/* Screenshots */}

                                   <div className="mt-4 grid gap-4 md:grid-cols-2">

                                        <div className="overflow-hidden rounded-2xl border border-white/10">

                                             <img
                                                  src="/images/projects/shortify/feed.png"
                                                  alt="Feed"
                                                  className="h-48 w-full object-cover"
                                             />

                                        </div>

                                        <div className="overflow-hidden rounded-2xl border border-white/10">

                                             <img
                                                  src="/images/projects/shortify/analytics.png"
                                                  alt="Analytics"
                                                  className="h-48 w-full object-cover"
                                             />

                                        </div>

                                   </div>

                              </motion.div>

                         </div>
                    </div>

               </div>

          </section>
     );
}