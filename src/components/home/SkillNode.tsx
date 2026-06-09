import { motion } from "framer-motion";

interface SkillNodeProps {
     title: string;
     className?: string;
     style?: React.CSSProperties;
     isHighlighted?: boolean;
     isDimmed?: boolean;
}

export default function SkillNode({
     title,
     className,
     style,
     isHighlighted,
     isDimmed,
}: SkillNodeProps) {
     return (
          <motion.div
               style={style}
               animate={{
                    scale: isHighlighted
                         ? 1.15
                         : [1, 1.04, 1],

                    opacity: isDimmed ? 0.15 : 1,
               }}
               transition={{
                    scale: {
                         duration: 5,
                         repeat: Infinity,
                         ease: "easeInOut",
                    },
                    opacity: {
                         duration: 0.25,
                    },
               }}
               className={`absolute rounded-xl border px-3 py-1 text-xs backdrop-blur-md transition-all duration-300 ${isHighlighted
                    ? "border-cyan-400/40 bg-cyan-500/10 text-cyan-200"
                    : "border-cyan-400/10 bg-slate-900/60 text-slate-400"
                    } ${className ?? ""}`}
          >
               {title}
          </motion.div>
     );
}