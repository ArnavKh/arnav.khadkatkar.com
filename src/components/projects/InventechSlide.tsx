import { motion } from "framer-motion";
import type { Project } from "../../content/types";

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

                              <p className="mt-6 max-w-xl text-lg text-slate-600">
                                   A multi-module ERP platform
                                   designed to streamline inventory,
                                   production planning, procurement,
                                   and operational workflows.
                              </p>

                              <div className="mt-10 grid grid-cols-2 gap-4">

                                   <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                                        <div className="text-sm text-slate-500">
                                             Modules
                                        </div>

                                        <div className="mt-2 text-3xl font-semibold">
                                             12+
                                        </div>
                                   </div>

                                   <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                                        <div className="text-sm text-slate-500">
                                             Users
                                        </div>

                                        <div className="mt-2 text-3xl font-semibold">
                                             Multi-Tenant
                                        </div>
                                   </div>

                                   <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                                        <div className="text-sm text-slate-500">
                                             Stack
                                        </div>

                                        <div className="mt-2 text-xl font-semibold">
                                             React + Express
                                        </div>
                                   </div>

                                   <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                                        <div className="text-sm text-slate-500">
                                             Database
                                        </div>

                                        <div className="mt-2 text-xl font-semibold">
                                             MySQL
                                        </div>
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
                                        duration: 5,
                                        repeat: Infinity,
                                   }}
                                   className="w-full rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl"
                              >

                                   {/* Fake ERP Dashboard */}

                                   <div className="mb-6 flex items-center justify-between">
                                        <div className="text-xl font-semibold">
                                             Operations Dashboard
                                        </div>

                                        <div className="rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                                             Live
                                        </div>
                                   </div>

                                   <div className="grid grid-cols-3 gap-3">

                                        <div className="rounded-xl bg-slate-100 p-4">
                                             <div className="text-sm text-slate-500">
                                                  Inventory
                                             </div>

                                             <div className="mt-2 text-2xl font-semibold">
                                                  1,248
                                             </div>
                                        </div>

                                        <div className="rounded-xl bg-slate-100 p-4">
                                             <div className="text-sm text-slate-500">
                                                  Orders
                                             </div>

                                             <div className="mt-2 text-2xl font-semibold">
                                                  328
                                             </div>
                                        </div>

                                        <div className="rounded-xl bg-slate-100 p-4">
                                             <div className="text-sm text-slate-500">
                                                  Production
                                             </div>

                                             <div className="mt-2 text-2xl font-semibold">
                                                  89%
                                             </div>
                                        </div>

                                   </div>

                                   <div className="mt-6 rounded-2xl bg-slate-100 p-5">

                                        <div className="mb-4 text-sm text-slate-500">
                                             Workflow
                                        </div>

                                        <div className="flex items-center justify-between text-sm">

                                             <div className="rounded-lg bg-white px-3 py-2 shadow-sm">
                                                  Purchase
                                             </div>

                                             →
                                             <div className="rounded-lg bg-white px-3 py-2 shadow-sm">
                                                  Inventory
                                             </div>

                                             →
                                             <div className="rounded-lg bg-white px-3 py-2 shadow-sm">
                                                  Production
                                             </div>

                                             →
                                             <div className="rounded-lg bg-white px-3 py-2 shadow-sm">
                                                  Dispatch
                                             </div>

                                        </div>

                                   </div>

                              </motion.div>

                         </div>

                    </div>

               </div>
          </section>
     );
}