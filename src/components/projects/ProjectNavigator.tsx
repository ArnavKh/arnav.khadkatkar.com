import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "../../content/types";

interface Props {
     projects: Project[];
}

export default function ProjectNavigator({
     projects,
}: Props) {
     const [categoryFilter, setCategoryFilter] =
          useState<string>("all");

     const [tagFilter, setTagFilter] =
          useState<string | null>(null);

     const tags = useMemo(() => {
          return [...new Set(projects.flatMap((p) => p.tags))];
     }, [projects]);

     const filteredProjects = projects.filter(
          (project) => {
               const categoryMatch =
                    categoryFilter === "all" ||
                    project.category === categoryFilter;

               const tagMatch =
                    !tagFilter ||
                    project.tags.includes(tagFilter);

               return categoryMatch && tagMatch;
          }
     );

     const scrollToProject = (id: string) => {
          document
               .getElementById(id)
               ?.scrollIntoView({
                    behavior: "smooth",
               });
     };

     return (
          <section data-slide className="relative flex min-h-screen items-center overflow-hidden px-6">
               <div className="mx-auto w-full max-w-7xl">
                    <motion.div
                         layoutId="projects-node"
                         className="relative"
                    >
                         <div className="mb-6 text-sm uppercase tracking-[0.3em] text-violet-400">
                              Knowledge Base
                         </div>

                         <h1 className="text-6xl font-semibold md:text-8xl">
                              Projects
                         </h1>

                         <p className="mt-5 max-w-2xl text-lg text-slate-400">
                              Explore products, systems,
                              research and experiments
                              through connected projects.
                         </p>
                    </motion.div>

                    {/* Category Filters */}

                    <div className="mt-12 flex flex-wrap gap-3">
                         {[
                              "all",
                              "personal",
                              "professional",
                              "research",
                         ].map((category) => (
                              <button
                                   key={category}
                                   onClick={() =>
                                        setCategoryFilter(
                                             category
                                        )
                                   }
                                   className={`rounded-xl border px-4 py-2 text-sm transition-all ${categoryFilter ===
                                        category
                                        ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                                        : "border-white/10 text-slate-400 hover:border-white/20"
                                        }`}
                              >
                                   {category}
                              </button>
                         ))}
                    </div>

                    {/* Tag Filters */}

                    <div className="mt-4 flex flex-wrap gap-2">
                         {tags.map((tag) => (
                              <button
                                   key={tag}
                                   onClick={() =>
                                        setTagFilter(
                                             tag ===
                                                  tagFilter
                                                  ? null
                                                  : tag
                                        )
                                   }
                                   className={`rounded-full border px-3 py-1 text-xs transition-all ${tagFilter === tag
                                        ? "border-violet-400/40 bg-violet-400/10 text-violet-300"
                                        : "border-white/10 text-slate-500"
                                        }`}
                              >
                                   {tag}
                              </button>
                         ))}
                    </div>

                    {/* Project Nodes */}

                    <div className="mt-16 grid gap-4 md:grid-cols-2">
                         {filteredProjects.map(
                              (project) => (
                                   <button
                                        key={project.id}
                                        onClick={() =>
                                             scrollToProject(
                                                  project.id
                                             )
                                        }
                                        className="group rounded-3xl border border-white/10 bg-[#0B1120]/70 p-6 text-left transition-all duration-300 hover:border-violet-500/30 hover:bg-[#0F172A]"
                                   >
                                        <div className="mb-4 flex items-center gap-3">
                                             <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

                                             <div className="text-xl font-medium">
                                                  {
                                                       project.title
                                                  }
                                             </div>
                                        </div>

                                        <div className="text-sm text-slate-400">
                                             {
                                                  project.description
                                             }
                                        </div>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                             {project.tags.map(
                                                  (
                                                       tag
                                                  ) => (
                                                       <span
                                                            key={
                                                                 tag
                                                            }
                                                            className="rounded-lg border border-white/10 px-2 py-1 text-xs text-slate-500"
                                                       >
                                                            {
                                                                 tag
                                                            }
                                                       </span>
                                                  )
                                             )}
                                        </div>

                                        <div className="mt-5 flex gap-4 text-xs text-slate-500">
                                             <span>
                                                  {
                                                       project
                                                            .relatedSkills
                                                            .length
                                                  }{" "}
                                                  Skills
                                             </span>

                                             <span>
                                                  {
                                                       project
                                                            .relatedExperience
                                                            .length
                                                  }{" "}
                                                  Experience
                                             </span>

                                             <span>
                                                  {
                                                       project
                                                            .relatedProjects
                                                            .length
                                                  }{" "}
                                                  Related
                                             </span>
                                        </div>
                                   </button>
                              )
                         )}
                    </div>

                    <div className="mt-20 text-sm text-slate-500">
                         ↓ Scroll to explore project stories
                    </div>
               </div>
          </section>
     );
}