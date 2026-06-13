import type { Project } from "../../content/types";
import ProjectSection from "./ProjectSection";
import slideRegistry from "./slideRegistry";

interface Props {
     project: Project;
}

export default function ProjectRenderer({ project }: Props) {
     const Custom = slideRegistry[project.id];

     if (Custom) {
          return <Custom project={project} />;
     }

     return <ProjectSection project={project} />;
}