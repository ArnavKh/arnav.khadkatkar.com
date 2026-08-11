import { useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "../../content/types";
import GithubIcon from "../../assets/GitHubLogo.png";

type Sentiment = "positive" | "neutral" | "negative";

const sentimentData: Record<
     Sentiment,
     {
          emoji: string;
          label: string;
          description: string;
          values: {
               positive: number;
               neutral: number;
               negative: number;
          };
     }
> = {
     positive: {
          emoji: "😊",
          label: "Positive",
          description:
               "Audience reactions are predominantly positive.",
          values: {
               positive: 78,
               neutral: 15,
               negative: 7,
          },
     },

     neutral: {
          emoji: "😐",
          label: "Neutral",
          description:
               "Audience reactions show a balanced response.",
          values: {
               positive: 42,
               neutral: 44,
               negative: 14,
          },
     },

     negative: {
          emoji: "😡",
          label: "Negative",
          description:
               "Negative reactions are more prominent in this sample.",
          values: {
               positive: 18,
               neutral: 24,
               negative: 58,
          },
     },
};

export default function ShortifySlide({
     project,
}: {
     project: Project;
}) {
     const [selectedSentiment, setSelectedSentiment] =
          useState<Sentiment>("positive");

     const selectedData =
          sentimentData[selectedSentiment];

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

                    <div className="relative overflow-hidden bg-[#111111]" />

               </div>

               {/* Right Side Ambient Glow */}

               <div className="pointer-events-none absolute right-[10%] top-[20%] h-96 w-96 rounded-full bg-pink-500/10 blur-[140px]" />

               <div className="pointer-events-none absolute bottom-[5%] right-[25%] h-72 w-72 rounded-full bg-rose-500/10 blur-[120px]" />

               <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-center px-6 py-20 lg:px-10">

                    <div className="grid w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0d] shadow-[0_30px_120px_rgba(0,0,0,0.35)] lg:grid-cols-2">

                         {/* LEFT — Brand */}

                         <div className="relative min-h-[600px] overflow-hidden px-8 py-12 lg:px-12">

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

                              {/* Doodles */}

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

                              {/* Product Content */}

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

                                   {/* Video Window */}

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

                                   {/* Sentiment Analytics */}

                                   <div className="mt-4 rounded-2xl border border-white/10 bg-[#181818]/90 p-5 backdrop-blur-xl">

                                        <div className="flex items-center justify-between">
                                             <div>
                                                  <div className="text-sm font-medium">
                                                       Audience Sentiment
                                                  </div>
                                             </div>
                                        </div>

                                        {/* Emoji Selector */}

                                        <div className="mt-5 flex items-center gap-3">

                                             {(
                                                  Object.entries(
                                                       sentimentData
                                                  ) as [
                                                       Sentiment,
                                                       (typeof sentimentData)[Sentiment]
                                                  ][]
                                             ).map(
                                                  ([
                                                       sentiment,
                                                       data,
                                                  ]) => {
                                                       const isSelected =
                                                            selectedSentiment ===
                                                            sentiment;

                                                       return (
                                                            <motion.button
                                                                 key={
                                                                      sentiment
                                                                 }
                                                                 type="button"
                                                                 onClick={() =>
                                                                      setSelectedSentiment(
                                                                           sentiment
                                                                      )
                                                                 }
                                                                 whileHover={{
                                                                      scale: 1.08,
                                                                 }}
                                                                 whileTap={{
                                                                      scale: 0.94,
                                                                 }}
                                                                 animate={{
                                                                      y: isSelected
                                                                           ? -4
                                                                           : 0,
                                                                 }}
                                                                 className={`flex h-12 w-12 items-center justify-center rounded-xl border text-2xl transition-all ${isSelected
                                                                      ? "border-pink-400/50 bg-pink-500/15 shadow-[0_0_25px_rgba(236,72,153,0.2)]"
                                                                      : "border-white/10 bg-white/5 opacity-50 hover:opacity-100"
                                                                      }`}
                                                                 aria-label={`Show ${data.label.toLowerCase()} sentiment`}
                                                            >
                                                                 {
                                                                      data.emoji
                                                                 }
                                                            </motion.button>
                                                       );
                                                  }
                                             )}

                                        </div>

                                        {/* Selected Sentiment */}

                                        <div className="mt-5 flex items-center gap-3">

                                             <div className="text-3xl">
                                                  {
                                                       selectedData.emoji
                                                  }
                                             </div>

                                             <div>

                                                  <div className="font-medium">
                                                       {
                                                            selectedData.label
                                                       }
                                                  </div>

                                                  <div className="text-xs text-white/40">
                                                       {
                                                            selectedData.description
                                                       }
                                                  </div>

                                             </div>

                                        </div>

                                        {/* Chart */}

                                        <div className="mt-6 space-y-4">

                                             <SentimentBar
                                                  label="Positive"
                                                  value={
                                                       selectedData
                                                            .values
                                                            .positive
                                                  }
                                                  className="bg-green-400"
                                                  textClassName="text-green-400"
                                             />

                                             <SentimentBar
                                                  label="Neutral"
                                                  value={
                                                       selectedData
                                                            .values
                                                            .neutral
                                                  }
                                                  className="bg-orange-400"
                                                  textClassName="text-orange-400"
                                             />

                                             <SentimentBar
                                                  label="Negative"
                                                  value={
                                                       selectedData
                                                            .values
                                                            .negative
                                                  }
                                                  className="bg-red-400"
                                                  textClassName="text-red-400"
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

function SentimentBar({
     label,
     value,
     className,
     textClassName,
}: {
     label: string;
     value: number;
     className: string;
     textClassName: string;
}) {
     return (
          <div>

               <div className="mb-2 flex items-center justify-between text-xs">

                    <span className="text-white/55">
                         {label}
                    </span>

                    <span
                         className={`font-medium ${textClassName}`}
                    >
                         {value}%
                    </span>

               </div>

               <div className="h-2 overflow-hidden rounded-full bg-white/5">

                    <motion.div
                         initial={false}
                         animate={{
                              width: `${value}%`,
                         }}
                         transition={{
                              duration: 0.5,
                              ease: "easeOut",
                         }}
                         className={`h-full rounded-full ${className}`}
                    />

               </div>

          </div>
     );
}