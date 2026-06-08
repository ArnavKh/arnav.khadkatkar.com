import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-950 p-10 text-white">
      <motion.div
        layoutId="projects-node"
        className="
          mb-10
          flex
          h-32
          w-full
          items-center
          rounded-3xl
          border
          border-cyan-400/30
          bg-slate-900
          px-8
          text-3xl
          font-semibold
        "
      >
        Projects
      </motion.div>

      <Link
        to="/"
        className="mb-10 inline-block text-cyan-400"
      >
        ← Back
      </Link>

      <div className="rounded-2xl border border-slate-800 p-6">
        Shortify
      </div>
    </div>
  );
}