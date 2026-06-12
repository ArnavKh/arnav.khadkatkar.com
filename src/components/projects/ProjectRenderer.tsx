import type { Project } from "../../content/types";
import ProjectSection from "./ProjectSection";

import ShortifySlide from "./ShortifySlide";
import InventechSlide from "./InventechSlide";
import DigitalLabSlide from "./DigitalLabSlide";
import GloveSlide from "./GloveSlide";

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

          case "robotic-glove":
               return <GloveSlide />;

          case "digitalLab":
               return <DigitalLabSlide />;

          default:
               return (
                    <ProjectSection
                         project={project}
                    />
               );
     }
}