import type { Project } from "../../content/types";

interface Props {
     project: Project;
}

export default function ProjectSection({
     project,
}: Props) {
     return (
          <section
               id={project.id}
               className="min-h-screen px-6 py-24 lg:px-12"
               data-slide
          >
               <div className="mx-auto w-full max-w-7xl">
                    <div className="grid gap-12 lg:grid-cols-2">
                         <div>
                              <div
                                   className="mb-4 text-sm uppercase tracking-[0.25em]"
                                   style={{
                                        color:
                                             project.theme.accent,
                                   }}
                              >
                                   {project.category}
                              </div>

                              <h2 className="text-5xl font-semibold">
                                   {project.title}
                              </h2>

                              <p className="mt-4 text-lg text-slate-400">
                                   {project.heroSubtitle}
                              </p>

                              <div className="mt-10">
                                   <h3 className="mb-2 text-sm uppercase tracking-widest text-slate-500">
                                        Problem
                                   </h3>

                                   <p className="text-slate-300">
                                        {project.problem}
                                   </p>
                              </div>

                              <div className="mt-8">
                                   <h3 className="mb-2 text-sm uppercase tracking-widest text-slate-500">
                                        Solution
                                   </h3>

                                   <p className="text-slate-300">
                                        {project.solution}
                                   </p>
                              </div>
                         </div>

                         <div>
                              <div className="rounded-3xl border border-white/10 bg-[#0B1120]/70 p-8 backdrop-blur-xl">
                                   <h3 className="mb-6 text-xl font-medium">
                                        Highlights
                                   </h3>

                                   <div className="space-y-3">
                                        {project.highlights.map(
                                             (highlight) => (
                                                  <div
                                                       key={highlight}
                                                       className="rounded-xl border border-white/5 bg-white/5 p-3 text-slate-300"
                                                  >
                                                       {highlight}
                                                  </div>
                                             )
                                        )}
                                   </div>

                                   <div className="mt-8 flex flex-wrap gap-2">
                                        {project.techStack.map(
                                             (tech) => (
                                                  <span
                                                       key={tech}
                                                       className="rounded-xl border border-white/10 px-3 py-1 text-sm text-slate-400"
                                                  >
                                                       {tech}
                                                  </span>
                                             )
                                        )}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}