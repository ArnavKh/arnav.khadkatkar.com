import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavNode from "../components/NavNode";
import SkillNode from "../components/SkillNode";
import { motion } from "framer-motion";

const DESKTOP_LAYOUT = {
     nav: {
          projects: { x: 72, y: 46 },
          experience: { x: 20, y: 42 },
          timeline: { x: 55, y: 14 },
          lab: { x: 66, y: 78 },
     },
     skills: {
          React: { x: 76, y: 28 },
          TypeScript: { x: 42, y: 18 },
          "Node.js": { x: 22, y: 62 },
          MongoDB: { x: 58, y: 66 },
          AWS: { x: 36, y: 80 },
          AI: { x: 80, y: 68 },
          ERP: { x: 24, y: 34 },
          Leadership: { x: 82, y: 50 },
     },
};

const TABLET_LAYOUT = {
     nav: {
          projects: { x: 70, y: 40 },
          experience: { x: 18, y: 40 },
          timeline: { x: 50, y: 16 },
          lab: { x: 60, y: 70 },
     },
     skills: {
          React: { x: 72, y: 24 },
          TypeScript: { x: 40, y: 20 },
          "Node.js": { x: 20, y: 58 },
          MongoDB: { x: 56, y: 60 },
          AWS: { x: 38, y: 72 },
          AI: { x: 76, y: 62 },
          ERP: { x: 24, y: 32 },
          Leadership: { x: 78, y: 46 },
     },
};

const MOBILE_LAYOUT = {
     nav: {
          projects: { x: 50, y: 24 },
          experience: { x: 50, y: 42 },
          timeline: { x: 50, y: 60 },
          lab: { x: 50, y: 78 },
     },
     skills: {
          React: { x: 20, y: 90 },
          TypeScript: { x: 50, y: 90 },
          AI: { x: 80, y: 90 },
          MongoDB: { x: 35, y: 84 },
          Leadership: { x: 65, y: 84 },
     },
};

const NAV_NODES = [
     {
          id: "projects",
          layoutId: "projects-node",
          title: "Projects",
          subtitle: "10+ Builds",
          route: "/projects",
          skills: ["React", "TypeScript", "MongoDB", "AI"],
     },
     {
          id: "experience",
          layoutId: "experience-node",
          title: "Experience",
          subtitle: "3 Companies",
          route: "/experience",
          skills: ["Leadership", "ERP"],
     },
     {
          id: "timeline",
          layoutId: "timeline-node",
          title: "Timeline",
          subtitle: "Journey So Far",
          route: "/timeline",
          skills: ["Leadership"],
     },
     {
          id: "lab",
          layoutId: "lab-node",
          title: "Lab",
          subtitle: "Experiments",
          route: "/lab",
          skills: ["AI", "React"],
     },
];

const SKILL_NODES = [
     { title: "React" },
     { title: "TypeScript" },
     { title: "Node.js" },
     { title: "MongoDB" },
     { title: "AWS" },
     { title: "AI" },
     { title: "ERP" },
     { title: "Leadership" },
];

export default function Home() {
     const navigate = useNavigate();
     const [activeNode, setActiveNode] = useState<string | null>(null);
     const centerRef = useRef<HTMLDivElement>(null);
     const nodeRefs = useRef<Record<string, HTMLDivElement | null>>({});
     const [paths, setPaths] = useState<string[]>([]);
     const [isCenterHovered, setIsCenterHovered] = useState(false);
     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
     const [screenWidth, setScreenWidth] = useState(window.innerWidth);
     const isMobile = screenWidth < 768;



     const layout =
          screenWidth < 1200
               ? TABLET_LAYOUT
               : DESKTOP_LAYOUT;

     useEffect(() => {
          const handleResize = () =>
               setScreenWidth(window.innerWidth);

          window.addEventListener("resize", handleResize);

          return () =>
               window.removeEventListener(
                    "resize",
                    handleResize
               );
     }, []);
     useEffect(() => {
          buildPaths();

          const resizeObserver =
               new ResizeObserver(buildPaths);

          if (centerRef.current) {
               resizeObserver.observe(
                    centerRef.current
               );
          }

          Object.values(nodeRefs.current).forEach(
               (node) => {
                    if (node) {
                         resizeObserver.observe(node);
                    }
               }
          );

          window.addEventListener(
               "resize",
               buildPaths
          );

          return () => {
               resizeObserver.disconnect();

               window.removeEventListener(
                    "resize",
                    buildPaths
               );
          };
     }, []);

     useEffect(() => {
          const handleMouseMove = (e: MouseEvent) => {
               setMousePosition({
                    x: (e.clientX / window.innerWidth - 0.5) * 200,
                    y: (e.clientY / window.innerHeight - 0.5) * 200,
               });
          };

          window.addEventListener(
               "mousemove",
               handleMouseMove
          );

          return () =>
               window.removeEventListener(
                    "mousemove",
                    handleMouseMove
               );
     }, []);

     const getLineOpacity = (nodeId: string) => {
          if (!activeNode) return 0.15;
          return activeNode === nodeId ? 0.8 : 0.05;
     };

     const buildPaths = () => {
          if (!centerRef.current) return;

          const centerRect =
               centerRef.current.getBoundingClientRect();

          const startX =
               centerRect.left + centerRect.width / 2;

          const startY =
               centerRect.top + centerRect.height / 2;

          const nextPaths = NAV_NODES.map((node) => {
               const target =
                    nodeRefs.current[node.id];

               if (!target) return "";

               const rect =
                    target.getBoundingClientRect();

               const endX = rect.left + rect.width / 2;
               const endY = rect.top + rect.height / 2;

               const controlX = (startX + endX) / 2;

               const controlY =
                    (startY + endY) / 2 -
                    Math.abs(endX - startX) * 0.12;

               return `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`;
          });

          setPaths(nextPaths);
     };

     if (isMobile) {
          return (
               <div className="min-h-screen bg-[#050816] text-white">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-size-[40px_40px]" />

                    <div className="relative z-10 flex min-h-screen flex-col px-5 py-8">
                         <div className="rounded-3xl border border-violet-500/30 bg-[#0B1120]/85 p-6 backdrop-blur-xl shadow-[0_0_80px_rgba(139,92,246,0.15)]">
                              <h1 className="text-3xl font-semibold">
                                   Arnav Khadkatkar
                              </h1>

                              <p className="mt-2 text-cyan-300">
                                   Full Stack Developer
                              </p>

                              <p className="mt-4 text-sm text-slate-400">
                                   Building enterprise software, AI
                                   products, and scalable web
                                   applications.
                              </p>

                              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                                   <div>
                                        <div className="text-lg font-semibold">
                                             10+
                                        </div>
                                        <div className="text-xs text-slate-500">
                                             Projects
                                        </div>
                                   </div>

                                   <div>
                                        <div className="text-lg font-semibold">
                                             3
                                        </div>
                                        <div className="text-xs text-slate-500">
                                             Companies
                                        </div>
                                   </div>

                                   <div>
                                        <div className="text-lg font-semibold">
                                             4+
                                        </div>
                                        <div className="text-xs text-slate-500">
                                             Years
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className="mt-8 flex flex-col gap-4">
                              {NAV_NODES.map((node) => (
                                   <button
                                        key={node.id}
                                        onClick={() =>
                                             navigate(node.route)
                                        }
                                        className="rounded-2xl border border-violet-500/20 bg-[#0B1120]/80 p-5 text-left backdrop-blur-md transition-all duration-300 active:scale-[0.98]"
                                   >
                                        <div className="text-lg font-medium">
                                             {node.title}
                                        </div>

                                        <div className="mt-1 text-sm text-slate-500">
                                             {node.subtitle}
                                        </div>
                                   </button>
                              ))}
                         </div>

                         <div className="mt-8 flex flex-wrap gap-2">
                              {[
                                   "React",
                                   "TypeScript",
                                   "Node.js",
                                   "MongoDB",
                                   "AWS",
                                   "AI",
                                   "ERP",
                                   "Leadership",
                              ].map((skill) => (
                                   <div
                                        key={skill}
                                        className="rounded-xl border border-white/10 bg-[#0B1120]/60 px-3 py-2 text-xs text-slate-400"
                                   >
                                        {skill}
                                   </div>
                              ))}
                         </div>

                         <div className="mt-8 flex gap-2">
                              <button className="flex-1 rounded-xl border border-cyan-400/20 py-3 text-sm">
                                   Resume
                              </button>

                              <button className="flex-1 rounded-xl border border-cyan-400/20 py-3 text-sm">
                                   GitHub
                              </button>

                              <button className="flex-1 rounded-xl border border-cyan-400/20 py-3 text-sm">
                                   LinkedIn
                              </button>
                         </div>
                    </div>
               </div>
          );
     }

     return (
          <div className="relative h-screen overflow-hidden bg-[#050816] text-white">
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

               <svg className="pointer-events-none absolute inset-0 h-full w-full">
                    {paths.map((path, index) => (
                         <path
                              key={index}
                              d={path}
                              fill="none"
                              stroke="rgb(139 92 246)"
                              strokeWidth="2"
                              opacity={getLineOpacity(
                                   NAV_NODES[index].id
                              )}
                         />
                    ))}
               </svg>

               <div className={`absolute left-1/2 top-1/2 w-[min(90vw,24rem)] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-violet-500/40 bg-[#0B1120]/85 p-6 backdrop-blur-xl transition-all duration-500 ${isCenterHovered
                    ? "shadow-[0_0_220px_rgba(139,92,246,0.35)] scale-[1.02] -translate-y-1"
                    : "shadow-[0_0_120px_rgba(139,92,246,0.15)]"}`}
                    ref={centerRef}
                    onMouseEnter={() => setIsCenterHovered(true)}
                    onMouseLeave={() => setIsCenterHovered(false)}>

                    <div className="text-center">
                         <h1 className="text-3xl font-semibold text-white">
                              Arnav Khadkatkar
                         </h1>

                         <p className="mt-2 text-sm text-cyan-300">
                              Full Stack Developer
                         </p>

                         <p className="mt-3 text-sm text-slate-500">
                              Building enterprise software, AI products,
                              and scalable web applications.
                         </p>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                         <div>
                              <div className="text-lg font-semibold">
                                   10+
                              </div>
                              <div className="text-xs text-slate-500">
                                   Projects
                              </div>
                         </div>

                         <div>
                              <div className="text-lg font-semibold">
                                   3
                              </div>
                              <div className="text-xs text-slate-500">
                                   Companies
                              </div>
                         </div>

                         <div>
                              <div className="text-lg font-semibold">
                                   4+
                              </div>
                              <div className="text-xs text-slate-500">
                                   Years
                              </div>
                         </div>
                    </div>

                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                         <button className="rounded-lg border border-cyan-400/20 px-3 py-2 text-xs hover:border-cyan-400/50">
                              Resume
                         </button>

                         <button className="rounded-lg border border-cyan-400/20 px-3 py-2 text-xs hover:border-cyan-400/50">
                              GitHub
                         </button>

                         <button className="rounded-lg border border-cyan-400/20 px-3 py-2 text-xs hover:border-cyan-400/50">
                              LinkedIn
                         </button>
                    </div>
               </div>

               {NAV_NODES.map((node, index) => {
                    const position =
                         layout.nav[
                         node.id as keyof typeof layout.nav
                         ];

                    return (
                         <NavNode
                              ref={(el) => {
                                   nodeRefs.current[node.id] = el;
                              }}
                              key={node.id}
                              id={node.layoutId}
                              title={node.title}
                              subtitle={node.subtitle}
                              className={
                                   node.id === "projects"
                                        ? isMobile
                                             ? "h-32 w-[85vw] -translate-x-1/2 -translate-y-1/2"
                                             : "h-32 w-[min(55vw,22rem)] -translate-x-1/2 -translate-y-1/2"
                                        : isMobile
                                             ? "h-24 w-[75vw] -translate-x-1/2 -translate-y-1/2"
                                             : "h-24 w-[min(35vw,14rem)] -translate-x-1/2 -translate-y-1/2"
                              }
                              style={{
                                   left: `${position.x}%`,
                                   top: `${position.y}%`,
                              }}
                              isActive={activeNode === node.id}
                              isDimmed={
                                   activeNode !== null &&
                                   activeNode !== node.id
                              }
                              onMouseEnter={() =>
                                   setActiveNode(node.id)
                              }
                              onMouseLeave={() =>
                                   setActiveNode(null)
                              }
                              onClick={() =>
                                   navigate(node.route)
                              }
                              floatDelay={index}
                         />
                    );
               })}

               {SKILL_NODES.filter((skill) => {
                    if (!isMobile) return true;

                    return [
                         "React",
                         "TypeScript",
                         "AI",
                         "MongoDB",
                         "Leadership",
                    ].includes(skill.title);
               }).map((skill) => {
                    const related =
                         activeNode &&
                         NAV_NODES.find(
                              (n) =>
                                   n.id === activeNode &&
                                   n.skills.includes(skill.title)
                         );

                    const position =
                         layout.skills[
                         skill.title as keyof typeof layout.skills
                         ];

                    if (!position) return null;

                    return (
                         <SkillNode
                              key={skill.title}
                              title={skill.title}
                              style={{
                                   left: `${position.x}%`,
                                   top: `${position.y}%`,
                              }}
                              isHighlighted={!!related}
                              isDimmed={
                                   activeNode !== null &&
                                   !related
                              }
                              className="-translate-x-1/2 -translate-y-1/2"
                         />
                    );
               })}
          </div>
     );
}