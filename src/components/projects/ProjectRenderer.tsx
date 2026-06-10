import type { Project } from "../../content/types";
import ProjectSection from "./ProjectSection";

import ShortifySlide from "./ShortifySlide";
import InventechSlide from "./Inventech";

interface Props {
     project: Project;
}

export default function ProjectRenderer({
     project,
}: Props) {
     switch (project.id) {
          case "shortify":
               return <ShortifySlide />;

          case "inventech":
               return <InventechSlide />;

          default:
               return (
                    <ProjectSection
                         project={project}
                    />
               );
     }
}