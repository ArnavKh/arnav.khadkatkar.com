import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProjectSlides } from "../hooks/useProjectSlides";

import NetworkBackground from "../components/home/NetworkBackground";
import { projects } from "../content/index";
import ProjectNavigator from "../components/projects/ProjectNavigator";
import ProjectRenderer from "../components/projects/ProjectRenderer";

import ProjectRail from "../components/common/ProjectRail";

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

      <ProjectRail
        sections={[
          { id: "navigator", label: "Hub" },
          ...projects.map((p) => ({ id: p.id, label: p.title })),
        ]}
      />

      <div className="fixed left-6 top-6 z-50">
        <Link
          to="/"
          className="text-cyan-400 transition-colors hover:text-cyan-300"
        >
          ← Arnav Khadkatkar
        </Link>
      </div>

      <ProjectNavigator projects={projects} />

      {projects.map((project) => (
        <ProjectRenderer
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}