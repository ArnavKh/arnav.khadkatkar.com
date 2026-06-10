import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavNode from "../components/home/NavNode";
import SkillNode from "../components/home/SkillNode";
import { DESKTOP_LAYOUT, TABLET_LAYOUT, NAV_NODES, SKILL_NODES } from "../components/home/layout";
import CenterNode from "../components/home/CenterNode";
import NetworkBackground from "../components/home/NetworkBackground";
import MobileHome from "../components/home/MobileHome";

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
     const layout = screenWidth < 1200 ? TABLET_LAYOUT : DESKTOP_LAYOUT;

     useEffect(() => {
          const handleResize = () =>
               setScreenWidth(window.innerWidth);
          window.addEventListener("resize", handleResize);

          return () =>
               window.removeEventListener("resize", handleResize);
     }, []);

     useEffect(() => {
          buildPaths();

          const resizeObserver =
               new ResizeObserver(buildPaths);

          if (centerRef.current) {
               resizeObserver.observe(centerRef.current);
          }

          Object.values(nodeRefs.current).forEach(
               (node) => {
                    if (node) {
                         resizeObserver.observe(node);
                    }
               }
          );

          window.addEventListener("resize", buildPaths);

          return () => {
               resizeObserver.disconnect();
               window.removeEventListener("resize", buildPaths);
          };
     }, []);

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

     const getLineOpacity = (nodeId: string) => {
          if (!activeNode) return 0.15;
          return activeNode === nodeId ? 0.8 : 0.05;
     };

     const buildPaths = () => {
          if (!centerRef.current) return;

          const centerRect = centerRef.current.getBoundingClientRect();
          const startX = centerRect.left + centerRect.width / 2;
          const startY = centerRect.top + centerRect.height / 2;
          const nextPaths = NAV_NODES.map((node) => {
               const target = nodeRefs.current[node.id];

               if (!target) return "";

               const rect = target.getBoundingClientRect();
               const endX = rect.left + rect.width / 2;
               const endY = rect.top + rect.height / 2;
               const controlX = (startX + endX) / 2;
               const controlY = (startY + endY) / 2 - Math.abs(endX - startX) * 0.12;

               return `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`;
          });

          setPaths(nextPaths);
     };

     if (isMobile) {
          return (
               <MobileHome navigate={navigate} mousePosition={mousePosition} />
          );
     }

     return (
          <div className="relative h-screen overflow-hidden bg-[#050816] text-white">

               <NetworkBackground mousePosition={mousePosition} />

               <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
                    <defs>
                         <filter
                              id="packetGlow"
                              x="-100%"
                              y="-100%"
                              width="300%"
                              height="300%"
                         >
                              <feGaussianBlur
                                   stdDeviation="6"
                                   result="blur"
                              />

                              <feMerge>
                                   <feMergeNode in="blur" />
                                   <feMergeNode in="SourceGraphic" />
                              </feMerge>
                         </filter>
                    </defs>
                    {paths.map((path, index) => {
                         const nodeId = NAV_NODES[index].id;
                         const isActive = activeNode === nodeId;

                         return (
                              <g key={nodeId}>
                                   <path
                                        d={path}
                                        fill="none"
                                        stroke="rgb(139 92 246)"
                                        strokeWidth="2"
                                        opacity={getLineOpacity(nodeId)}
                                   />

                                   {isActive && (
                                        <>
                                             <circle
                                                  r="4"
                                                  fill="#22d3ee"
                                                  style={{
                                                       filter:
                                                            "drop-shadow(0 0 8px #22d3ee)",
                                                  }}
                                             >
                                                  <animateMotion
                                                       dur="2.2s"
                                                       repeatCount="indefinite"
                                                       path={path}
                                                  />
                                             </circle>

                                             <circle
                                                  r="4"
                                                  fill="#22d3ee"
                                                  style={{
                                                       filter:
                                                            "drop-shadow(0 0 8px #a78bfa)",
                                                  }}
                                             >
                                                  <animateMotion
                                                       dur="2.2s"
                                                       begin="-1.1s"
                                                       repeatCount="indefinite"
                                                       path={path}
                                                  />
                                             </circle>
                                        </>
                                   )}
                              </g>
                         );
                    })}
               </svg>

               <CenterNode
                    ref={centerRef}
                    isHovered={isCenterHovered}
                    onMouseEnter={() => setIsCenterHovered(true)}
                    onMouseLeave={() => setIsCenterHovered(false)}
               />

               {NAV_NODES.map((node, index) => {
                    const position = layout.nav[node.id as keyof typeof layout.nav];

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
                                   isMobile
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
                              onMouseEnter={() => setActiveNode(node.id)}
                              onMouseLeave={() => setActiveNode(null)}
                              onClick={() => navigate(node.route)}
                              floatDelay={index}
                         />
                    );
               })}

               {SKILL_NODES.filter((skill) => {
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

                    const position = layout.skills[skill.title as keyof typeof layout.skills];

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
                              isDimmed={activeNode !== null && !related}
                              className="-translate-x-1/2 -translate-y-1/2"
                         />
                    );
               })}
          </div>
     );
}