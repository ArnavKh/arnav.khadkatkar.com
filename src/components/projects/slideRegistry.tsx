import type { ComponentType } from "react";
import type { Project } from "../../content/types";

import ShortifySlide from "./ShortifySlide";
import InventechSlide from "./InventechSlide";
import DigitalLabSlide from "./DigitalLabSlide";
import GloveSlide from "./GloveSlide";

export const slideRegistry: Record<string, ComponentType<{ project?: Project }>> = {
  shortify: ShortifySlide,
  inventech: InventechSlide,
  "robotic-glove": GloveSlide,
  digitalLab: DigitalLabSlide,
};

export default slideRegistry;
