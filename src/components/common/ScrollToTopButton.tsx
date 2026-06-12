import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
     const [visible, setVisible] = useState(false);

     useEffect(() => {
          const handleScroll = () => {
               setVisible(window.scrollY > 500);
          };

          window.addEventListener("scroll", handleScroll);

          return () =>
               window.removeEventListener(
                    "scroll",
                    handleScroll
               );
     }, []);

     return (
          <AnimatePresence>
               {visible && (
                    <motion.button
                         initial={{
                              opacity: 0,
                              scale: 0.8,
                              y: 20,
                         }}
                         animate={{
                              opacity: 1,
                              scale: 1,
                              y: 0,
                         }}
                         exit={{
                              opacity: 0,
                              scale: 0.8,
                              y: 20,
                         }}
                         transition={{
                              duration: 0.25,
                         }}
                         onClick={() =>
                              window.scrollTo({
                                   top: 0,
                                   behavior: "smooth",
                              })
                         }
                         className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/20 bg-[#0B1120]/80 text-xl text-cyan-300 backdrop-blur-xl shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all hover:border-violet-400/40 hover:shadow-[0_0_50px_rgba(139,92,246,0.35)]"
                    >
                         ↑
                    </motion.button>
               )}
          </AnimatePresence>
     );
}