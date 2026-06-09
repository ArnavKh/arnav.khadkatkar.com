import { forwardRef } from "react";
import { motion } from "framer-motion";

interface NavNodeProps {
     id: string;
     title: string;
     subtitle: string;
     className?: string;
     isActive?: boolean;
     isDimmed?: boolean;
     style?: React.CSSProperties;
     onClick?: () => void;
     onMouseEnter?: () => void;
     onMouseLeave?: () => void;
     floatDelay?: number;
}

const NavNode = forwardRef<HTMLDivElement, NavNodeProps>(
     (
          {
               id,
               title,
               subtitle,
               className,
               isActive,
               isDimmed,
               onClick,
               onMouseEnter,
               onMouseLeave,
               style,
               floatDelay,
          },
          ref
     ) => {
          return (
               <motion.div
                    ref={ref}
                    layoutId={id}
                    onClick={onClick}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    animate={{
                         scale: isActive
                              ? 1.06
                              : [1, 1.04, 1],

                         y: isActive
                              ? -2
                              : [0, -3, 0],

                         opacity: isDimmed ? 0.35 : 1,

                         borderColor: isActive
                              ? "rgba(139,92,246,0.7)"
                              : [
                                   "rgba(139,92,246,0.15)",
                                   "rgba(139,92,246,0.55)",
                                   "rgba(139,92,246,0.15)",
                              ],

                         boxShadow: isActive
                              ? "0 0 70px rgba(139,92,246,0.45)"
                              : [
                                   "0 0 10px rgba(139,92,246,0.05)",
                                   "0 0 50px rgba(139,92,246,0.25)",
                                   "0 0 10px rgba(139,92,246,0.05)",
                              ],
                    }}
                    transition={{
                         scale: {
                              duration: 3.5 + (floatDelay ?? 0),
                              repeat: Infinity,
                              ease: "easeInOut",
                         },
                         y: {
                              duration: 3.5 + (floatDelay ?? 0),
                              repeat: Infinity,
                              ease: "easeInOut",
                         },
                         borderColor: {
                              duration: 3.5 + (floatDelay ?? 0),
                              repeat: Infinity,
                              ease: "easeInOut",
                         },
                         boxShadow: {
                              duration: 3.5 + (floatDelay ?? 0),
                              repeat: Infinity,
                              ease: "easeInOut",
                         },
                         opacity: {
                              duration: 0.2,
                         },
                    }}
                    style={style}
                    className={`absolute cursor-pointer rounded-2xl border border-violet-500/20 bg-[#0B1120]/80 backdrop-blur-md transition-all duration-300 hover:border-violet-400/40 ${className ?? ""}`}
               >
                    <div className="flex h-full flex-col justify-center p-4">
                         <div className="text-base font-medium text-white">
                              {title}
                         </div>

                         <div className="mt-1 text-xs text-slate-500">
                              {subtitle}
                         </div>
                    </div>
               </motion.div>
          );
     }
);

export default NavNode;