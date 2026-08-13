import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Lab() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-8 py-8">
        <Link to="/" className="mb-6 inline-block text-cyan-400 hover:text-cyan-300">
          ← Arnav Khadkatkar
        </Link>

        <motion.div
          layoutId="lab-node"
          className="mb-10 flex h-32 w-full items-center rounded-3xl border border-cyan-400/30 bg-slate-900 px-8 text-3xl font-semibold"
        >
          Lab
        </motion.div>

        <div className="rounded-2xl border border-slate-800 p-6">
          Experiments Coming Soon
        </div>
      </div>
    </div>
  );
}