import { Link } from "react-router-dom";

import { projects } from "../content/index";
import ProjectNavigator from "../components/projects/ProjectNavigator";
import ProjectSection from "../components/projects/ProjectSection";
import NetworkBackground from "../components/home/NetworkBackground";
import { useEffect, useState } from "react";
import { useProjectSlides } from "../hooks/useProjectSlides";

export default function Projects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useProjectSlides();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 200,
        y: (e.clientY / window.innerHeight - 0.5) * 200,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (

    <div className="bg-[#050816] text-white">
      <NetworkBackground mousePosition={mousePosition} />

      <div className="fixed left-6 top-6 z-50">
        <Link
          to="/"
          className="text-cyan-400 transition-colors hover:text-cyan-300"
        >
          ← Back
        </Link>
      </div>

      <ProjectNavigator projects={projects} />

      {projects.map((project) => (
        <ProjectSection
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}