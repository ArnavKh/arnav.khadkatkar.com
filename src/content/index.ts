import { shortify } from "./projects/shortify";
import { inventech } from "./projects/inventech";
import { digitalLab } from "./projects/digitalLab";
import { therapeuticGlove } from "./projects/glove";

import { pwc } from "./experience/pwc";

import { skills } from "./skills/skills";

export const projects = [
  shortify, inventech, therapeuticGlove, digitalLab
];

export const experiences = [
  pwc
];

export {
  skills
};

console.log(projects);