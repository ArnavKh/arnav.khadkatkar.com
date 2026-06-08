import { useNavigate } from "react-router-dom";
import NavNode from "../components/NavNode";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.08),transparent_70%)]" />

      {/* Connection Lines */}
      <div className="absolute left-1/2 top-1/2 h-[1px] w-[600px] -translate-x-1/2 bg-cyan-400/20" />
      <div className="absolute left-1/2 top-1/2 w-[1px] h-[400px] -translate-y-1/2 bg-cyan-400/20" />

      {/* Center Node */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          flex
          h-40
          w-40
          -translate-x-1/2
          -translate-y-1/2
          flex-col
          items-center
          justify-center
          rounded-full
          border
          border-cyan-400/40
          bg-slate-900
          text-center
          shadow-[0_0_80px_rgba(34,211,238,0.25)]
        "
      >
        <h1 className="text-xl font-semibold">Vikram</h1>

        <p className="mt-2 text-xs text-slate-400">
          Software Developer
        </p>
      </div>

      {/* Projects */}
      <NavNode
        id="projects-node"
        title="Projects"
        className="
          left-[72%]
          top-1/2
          h-28
          w-28
          -translate-y-1/2
        "
        onClick={() => navigate("/projects")}
      />

      {/* Experience */}
      <NavNode
        id="experience-node"
        title="Experience"
        className="
          left-[14%]
          top-1/2
          h-28
          w-28
          -translate-y-1/2
        "
      />

      {/* Timeline */}
      <NavNode
        id="timeline-node"
        title="Timeline"
        className="
          left-1/2
          top-[15%]
          h-28
          w-28
          -translate-x-1/2
        "
      />

      {/* Lab */}
      <NavNode
        id="lab-node"
        title="Lab"
        className="
          left-1/2
          bottom-[10%]
          h-28
          w-28
          -translate-x-1/2
        "
      />
    </div>
  );
}