import { motion } from "framer-motion";

export default function DigitalLabSlide() {
     const capabilities = [
          "AI & GenAI",
          "Cloud Engineering",
          "Intelligent Automation",
          "Data & Analytics",
          "Product Engineering",
          "Digital Strategy",
     ];

     return (
          <section
               id="digitalLab"
               data-slide
               className="relative min-h-screen overflow-hidden bg-white text-[#111111]"
          >
               {/* PwC Accent Elements */}

               <div className="absolute left-0 top-0 h-full w-4 bg-[#D04A02]" />

               <div className="absolute right-24 top-20 h-24 w-24 bg-[#FFB600]" />

               <div className="absolute bottom-24 right-48 h-16 w-16 bg-[#D04A02]" />

               <div className="absolute bottom-0 left-0 h-6 w-full bg-[#D04A02]" />

               <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-12">

                    <div className="grid w-full gap-20 lg:grid-cols-[1.2fr_0.8fr]">

                         {/* LEFT SIDE */}

                         <div className="flex flex-col justify-center">

                              {/* PwC Logo */}

                              <div className="mb-12">
                                   <img
                                        src="/pwc-logo.svg"
                                        alt="PwC"
                                        className="h-16 object-contain"
                                   />
                              </div>

                              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#D04A02]">
                                   Digital Lab
                              </div>

                              <h2 className="max-w-4xl text-6xl font-semibold leading-[1.05] md:text-7xl">
                                   Accelerating
                                   <span className="block text-[#D04A02]">
                                        Digital
                                   </span>
                                   Transformation
                              </h2>

                              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#666666]">
                                   Driving innovation through AI,
                                   automation, cloud engineering
                                   and data-driven solutions to
                                   help teams modernize processes,
                                   improve efficiency and deliver
                                   measurable business impact.
                              </p>

                              {/* Metrics */}

                              <div className="mt-14 flex flex-wrap gap-16">

                                   <div>
                                        <div className="text-5xl font-bold text-[#D04A02]">
                                             20+
                                        </div>

                                        <div className="mt-2 text-sm uppercase tracking-wider text-[#666666]">
                                             Solutions
                                        </div>
                                   </div>

                                   <div>
                                        <div className="text-5xl font-bold text-[#D04A02]">
                                             AI
                                        </div>

                                        <div className="mt-2 text-sm uppercase tracking-wider text-[#666666]">
                                             Innovation
                                        </div>
                                   </div>

                                   <div>
                                        <div className="text-5xl font-bold text-[#D04A02]">
                                             Cloud
                                        </div>

                                        <div className="mt-2 text-sm uppercase tracking-wider text-[#666666]">
                                             Native
                                        </div>
                                   </div>

                              </div>

                         </div>

                         {/* RIGHT SIDE */}

                         <div className="flex items-center">

                              <motion.div
                                   initial={{
                                        opacity: 0,
                                        x: 30,
                                   }}
                                   whileInView={{
                                        opacity: 1,
                                        x: 0,
                                   }}
                                   transition={{
                                        duration: 0.8,
                                   }}
                                   className="w-full"
                              >

                                   <div className="mb-10">

                                        <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#666666]">
                                             Core Capabilities
                                        </div>

                                        <div className="mt-3 text-3xl font-semibold">
                                             Areas of Focus
                                        </div>

                                   </div>

                                   <div className="space-y-8">

                                        {capabilities.map(
                                             (
                                                  capability,
                                                  index
                                             ) => (
                                                  <motion.div
                                                       key={
                                                            capability
                                                       }
                                                       initial={{
                                                            opacity: 0,
                                                            y: 20,
                                                       }}
                                                       whileInView={{
                                                            opacity: 1,
                                                            y: 0,
                                                       }}
                                                       transition={{
                                                            delay:
                                                                 index *
                                                                 0.08,
                                                       }}
                                                       className="border-l-4 border-[#D04A02] pl-6"
                                                  >
                                                       <div className="text-2xl font-medium">
                                                            {
                                                                 capability
                                                            }
                                                       </div>
                                                  </motion.div>
                                             )
                                        )}

                                   </div>

                              </motion.div>

                         </div>

                    </div>

               </div>
          </section>
     );
}