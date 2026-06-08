import { motion } from "framer-motion";

interface NavNodeProps {
  id: string;
  title: string;
  className?: string;
  onClick?: () => void;
}

export default function NavNode({
  id,
  title,
  className,
  onClick,
}: NavNodeProps) {
  return (
    <motion.div
      layoutId={id}
      onClick={onClick}
      whileHover={{
        scale: 1.08,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
      }}
      className={`
        absolute
        flex
        items-center
        justify-center
        cursor-pointer
        rounded-full
        border
        border-cyan-400/30
        bg-slate-900/80
        text-white
        backdrop-blur-md
        shadow-[0_0_40px_rgba(34,211,238,0.15)]
        ${className}
      `}
    >
      {title}
    </motion.div>
  );
}