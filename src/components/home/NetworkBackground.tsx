import { motion } from "framer-motion";

interface Props {
     mousePosition: {
          x: number;
          y: number;
     };
}

export default function NetworkBackground({
     mousePosition,
}: Props) {
     return (
          <>

               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-size-[60px_60px]" />
               <motion.div
                    animate={{
                         x: mousePosition.x * 3,
                         y: mousePosition.y * 3,
                    }}
                    transition={{
                         type: "spring",
                         stiffness: 30,
                         damping: 30,
                    }}
                    className="absolute left-1/2 top-1/2 h-160 w-160 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl"
               />

               <motion.div
                    animate={{
                         x: mousePosition.x * -2.15,
                         y: mousePosition.y * -2.15,
                    }}
                    transition={{
                         type: "spring",
                         stiffness: 30,
                         damping: 30,
                    }}
                    className="absolute right-[10%] bottom-[10%] h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl"
               />
          </>
     );
}
