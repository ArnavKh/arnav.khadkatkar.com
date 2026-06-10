import { motion } from "framer-motion";

export default function ShortifySlide() {
     return (
          <section
               id="shortify"
               data-slide
               className="relative min-h-screen overflow-hidden"
          >
               {/* Background */}

               <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 via-orange-500/10 to-red-500/20" />

               {/* Emoji Background */}

               <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute left-[15%] top-[20%] text-7xl opacity-10">
                         😊
                    </div>

                    <div className="absolute right-[15%] top-[35%] text-8xl opacity-10">
                         😡
                    </div>

                    <div className="absolute left-[30%] bottom-[20%] text-7xl opacity-10">
                         😍
                    </div>

                    <div className="absolute right-[25%] bottom-[15%] text-6xl opacity-10">
                         😢
                    </div>
               </div>

               <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-8">
                    <div className="grid w-full gap-12 lg:grid-cols-2">

                         {/* Left */}

                         <div>
                              <div className="mb-4 text-sm uppercase tracking-[0.3em] text-pink-400">
                                   AI + Social Media
                              </div>

                              <h2 className="text-7xl font-semibold">
                                   Shortify
                              </h2>

                              <p className="mt-6 max-w-xl text-lg text-slate-300">
                                   A short-form social media
                                   platform with multilingual
                                   sentiment analysis that helps
                                   creators understand audience
                                   reactions at scale.
                              </p>

                              <div className="mt-10 flex flex-wrap gap-3">
                                   {[
                                        "Next.js",
                                        "TypeScript",
                                        "MongoDB",
                                        "AWS",
                                        "NLP",
                                   ].map((tech) => (
                                        <div
                                             key={tech}
                                             className="rounded-xl border border-white/10 bg-white/5 px-4 py-2"
                                        >
                                             {tech}
                                        </div>
                                   ))}
                              </div>
                         </div>

                         {/* Right */}

                         <div className="flex items-center justify-center">

                              <motion.div
                                   animate={{
                                        y: [0, -10, 0],
                                   }}
                                   transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                   }}
                                   className="w-full max-w-md rounded-3xl border border-pink-500/20 bg-black/30 p-6 backdrop-blur-xl"
                              >
                                   <div className="mb-6 text-xl font-medium">
                                        Sentiment Analysis
                                   </div>

                                   <div className="space-y-4">

                                        <div className="rounded-xl bg-white/5 p-4">
                                             😊 Positive
                                             <div className="mt-2 h-2 rounded-full bg-pink-500" />
                                        </div>

                                        <div className="rounded-xl bg-white/5 p-4">
                                             😐 Neutral
                                             <div className="mt-2 h-2 rounded-full bg-orange-500" />
                                        </div>

                                        <div className="rounded-xl bg-white/5 p-4">
                                             😡 Negative
                                             <div className="mt-2 h-2 rounded-full bg-red-500" />
                                        </div>

                                   </div>
                              </motion.div>

                         </div>
                    </div>
               </div>
          </section>
     );
}