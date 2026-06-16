import { motion } from "framer-motion";
import type { Project } from "../../content/types";


function WindowHeader({
     title,
}: {
     title: string;
}) {
     return (
          <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">

               <div className="font-medium">
                    {title}
               </div>

               <div className="flex gap-2">

                    <div className="h-3 w-3 rounded-full bg-red-400" />

                    <div className="h-3 w-3 rounded-full bg-amber-400" />

                    <div className="h-3 w-3 rounded-full bg-green-400" />

               </div>

          </div>
     );
}

function InventoryRow({
     label,
     value,
     width,
}: {
     label: string;
     value: string;
     width: string;
}) {
     return (
          <div>
               <div className="mb-1 flex justify-between text-sm">
                    <span>{label}</span>
                    <span className="text-slate-500">
                         {value}
                    </span>
               </div>

               <div className="h-2 rounded-full bg-slate-100">
                    <div
                         className={`h-2 rounded-full bg-blue-500 ${width}`}
                    />
               </div>
          </div>
     );
}

function BatchRow({
     batch,
     status,
     color,
}: {
     batch: string;
     status: string;
     color: string;
}) {
     return (
          <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
               <span>{batch}</span>

               <span
                    className={`rounded-lg px-2 py-1 text-xs ${color}`}
               >
                    {status}
               </span>
          </div>
     );
}

export default function InventechSlide({ project }: { project?: Project }) {
     return (
          <section
               id={project?.id ?? "inventech"}
               data-slide
               className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900"
          >
               {/* Grid */}

               <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-size-[40px_40px]" />

               {/* Background Workflow */}

               <div className="absolute inset-0 opacity-20">

                    <div className="absolute left-[12%] top-[25%] rounded-xl border border-slate-400 bg-white px-4 py-3 shadow-sm">
                         Inventory
                    </div>

                    <div className="absolute left-[42%] top-[25%] rounded-xl border border-slate-400 bg-white px-4 py-3 shadow-sm">
                         Production
                    </div>

                    <div className="absolute left-[72%] top-[25%] rounded-xl border border-slate-400 bg-white px-4 py-3 shadow-sm">
                         Dispatch
                    </div>

                    <div className="absolute left-[22%] top-[31%] h-px w-[18%] bg-slate-400" />
                    <div className="absolute left-[52%] top-[31%] h-px w-[18%] bg-slate-400" />
               </div>

               <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-8">

                    <div className="grid w-full gap-16 lg:grid-cols-2">

                         {/* Left */}

                         <div>

                              <div className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-600">
                                   Enterprise Resource Planning
                              </div>

                              <h2 className="text-7xl font-semibold">
                                   Inventech ERP
                              </h2>

                              <div className="mt-8 space-y-4">

                                   <div className="flex items-start gap-4">

                                        <div className="mt-1 h-2 w-2 rounded-full bg-blue-500" />

                                        <p className="text-slate-600">
                                             Built for MSMEs looking to replace
                                             spreadsheets, registers and manual
                                             operational workflows.
                                        </p>

                                   </div>

                                   <div className="flex items-start gap-4">

                                        <div className="mt-1 h-2 w-2 rounded-full bg-blue-500" />

                                        <p className="text-slate-600">
                                             Every deployment was customized to
                                             client-specific manufacturing and
                                             business processes.
                                        </p>

                                   </div>

                                   <div className="flex items-start gap-4">

                                        <div className="mt-1 h-2 w-2 rounded-full bg-blue-500" />

                                        <p className="text-slate-600">
                                             Automated inventory, procurement,
                                             production, dispatch and reporting
                                             workflows across multiple clients.
                                        </p>

                                   </div>

                              </div>

                              <div className="mt-10 flex flex-wrap gap-3">

                                   <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                                        Manufacturing
                                   </div>

                                   <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                                        MSMEs
                                   </div>

                                   <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                                        Full Stack
                                   </div>

                                   <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                                        Custom ERP
                                   </div>

                              </div>
                              <div className="mt-12">

                                   <div className="mb-6 text-sm uppercase tracking-[0.3em] text-slate-500">
                                        Key Contributions
                                   </div>

                                   <div className="relative border-l border-slate-300 pl-6">

                                        <div className="mb-8 relative">
                                             <div className="absolute -left-[26px] top-1 h-3 w-3 rounded-full bg-blue-500" />

                                             <div className="font-medium">
                                                  ERP Module Development
                                             </div>

                                             <div className="mt-1 text-slate-600">
                                                  Developed core business modules
                                                  using React, Node.js and MySQL.
                                             </div>
                                        </div>

                                        <div className="mb-8 relative">
                                             <div className="absolute -left-[26px] top-1 h-3 w-3 rounded-full bg-blue-500" />

                                             <div className="font-medium">
                                                  Workflow Automation
                                             </div>

                                             <div className="mt-1 text-slate-600">
                                                  Digitized procurement,
                                                  inventory and production
                                                  processes.
                                             </div>
                                        </div>

                                        <div className="relative">
                                             <div className="absolute -left-[26px] top-1 h-3 w-3 rounded-full bg-blue-500" />

                                             <div className="font-medium">
                                                  Client Collaboration
                                             </div>

                                             <div className="mt-1 text-slate-600">
                                                  Worked directly with MSME
                                                  stakeholders to translate
                                                  business requirements into
                                                  software solutions.
                                             </div>
                                        </div>

                                   </div>

                              </div>

                              <div className="mt-12">

                                   <div className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-500">
                                        Technology Stack
                                   </div>

                                   <div className="flex flex-wrap gap-3">

                                        {project?.techStack.map((tech) => (
                                             <div
                                                  key={tech}
                                                  className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-blue-700"
                                             >
                                                  {tech}
                                             </div>
                                        ))}

                                   </div>

                              </div>
                         </div>

                         {/* Right */}

                         <div className="flex items-center justify-center">

                              <motion.div
                                   animate={{
                                        y: [0, -6, 0],
                                   }}
                                   transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                   }}
                                   className="relative h-[650px] w-full"
                              >

                                   {/* Inventory */}

                                   <motion.div
                                        whileHover={{
                                             scale: 1.03,
                                             rotate: -1,
                                        }}
                                        className="absolute left-[12%] top-[5%] z-30 w-72 rounded-3xl border border-slate-200 bg-white shadow-2xl"
                                   >
                                        <WindowHeader title="Inventory" />

                                        <div className="p-5 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

                                             <div className="space-y-3">

                                                  <InventoryRow
                                                       label="Raw Material"
                                                       value="1,250 kg"
                                                       width="w-[85%]"
                                                  />

                                                  <InventoryRow
                                                       label="Packing Material"
                                                       value="840 units"
                                                       width="w-[65%]"
                                                  />

                                                  <InventoryRow
                                                       label="Finished Goods"
                                                       value="3,420 units"
                                                       width="w-[95%]"
                                                  />

                                                  <InventoryRow
                                                       label="Consumables"
                                                       value="420 units"
                                                       width="w-[40%]"
                                                  />

                                             </div>

                                        </div>
                                   </motion.div>

                                   {/* Production */}

                                   <motion.div
                                        whileHover={{
                                             scale: 1.03,
                                             rotate: 1,
                                        }}
                                        className="absolute left-[5%] top-[42%] z-20 w-80 rounded-3xl border border-blue-200 bg-white shadow-2xl"
                                   >
                                        <WindowHeader title="Production" />

                                        <div className="p-5 shadow-[0_25px_80px_rgba(59,130,246,0.15)]">

                                             <div className="space-y-3">

                                                  <BatchRow
                                                       batch="Batch 1042"
                                                       status="Running"
                                                       color="bg-green-100 text-green-700"
                                                  />

                                                  <BatchRow
                                                       batch="Batch 1043"
                                                       status="Pending"
                                                       color="bg-amber-100 text-amber-700"
                                                  />

                                                  <BatchRow
                                                       batch="Batch 1044"
                                                       status="Completed"
                                                       color="bg-blue-100 text-blue-700"
                                                  />

                                             </div>

                                        </div>
                                   </motion.div>

                                   {/* Reports */}

                                   <motion.div
                                        whileHover={{
                                             scale: 1.03,
                                             rotate: 1,
                                        }}
                                        className="absolute right-[2%] top-[20%] z-40 w-72 rounded-3xl border border-slate-200 bg-white shadow-2xl"
                                   >
                                        <WindowHeader title="Reports" />

                                        <div className="p-5 shadow-[0_20px_70px_rgba(0,0,0,0.18)]">

                                             <div className="mb-4 flex items-end gap-2">

                                                  <div className="h-12 w-6 rounded-t bg-blue-200" />
                                                  <div className="h-20 w-6 rounded-t bg-blue-300" />
                                                  <div className="h-10 w-6 rounded-t bg-blue-200" />
                                                  <div className="h-24 w-6 rounded-t bg-blue-400" />

                                             </div>

                                             <div className="text-sm text-slate-500">
                                                  Business Insights
                                             </div>

                                        </div>
                                   </motion.div>

                                   {/* Dispatch */}

                                   <motion.div
                                        whileHover={{
                                             scale: 1.03,
                                             rotate: -1,
                                        }}
                                        className="absolute right-[2%] top-[65%] z-50 w-72 rounded-3xl border border-slate-200 bg-white shadow-2xl"
                                   >
                                        <WindowHeader title="Dispatch" />

                                        <div className="p-5 shadow-[0_25px_90px_rgba(0,0,0,0.2)]">

                                             <div className="space-y-2">

                                                  <div className="rounded-lg bg-slate-100 p-2">
                                                       Order #1042
                                                  </div>

                                                  <div className="rounded-lg bg-slate-100 p-2">
                                                       Order #1043
                                                  </div>

                                                  <div className="rounded-lg bg-slate-100 p-2">
                                                       Order #1044
                                                  </div>

                                             </div>

                                        </div>
                                   </motion.div>

                              </motion.div>

                         </div>
                    </div>

               </div>
          </section>
     );
}