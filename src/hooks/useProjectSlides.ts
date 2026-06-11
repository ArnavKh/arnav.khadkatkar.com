import { useEffect, useRef } from "react";

export function useProjectSlides() {
     const isAnimating = useRef(false);

     useEffect(() => {
          const getSlides = () =>
               Array.from(
                    document.querySelectorAll("[data-slide]")
               ) as HTMLElement[];

          const getCurrentSlideIndex = (
               slides: HTMLElement[]
          ) => {
               const center =
                    window.scrollY +
                    window.innerHeight / 2;

               return slides.findIndex(
                    (slide, index) => {
                         const next =
                              slides[index + 1];

                         if (!next) return true;

                         return (
                              center >=
                              slide.offsetTop &&
                              center <
                              next.offsetTop
                         );
                    }
               );
          };

          const scrollToIndex = (
               slides: HTMLElement[],
               index: number
          ) => {
               if (
                    index < 0 ||
                    index >= slides.length
               )
                    return;

               isAnimating.current = true;

               // slides[index].scrollIntoView({
               //      behavior: "smooth",
               //      block: "start",
               // });

               window.scrollTo({
                    top: slides[index].offsetTop,
                    behavior: "smooth",
               });


               setTimeout(() => {
                    isAnimating.current = false;
               }, 400);
          };

          const handleWheel = (
               e: WheelEvent
          ) => {
               if (isAnimating.current) {
                    e.preventDefault();
                    return;
               }

               const slides = getSlides();

               const current =
                    getCurrentSlideIndex(slides);

               if (current === -1) return;

               if (Math.abs(e.deltaY) < 20)
                    return;

               e.preventDefault();

               if (e.deltaY > 0) {
                    scrollToIndex(
                         slides,
                         current + 1
                    );
               } else {
                    scrollToIndex(
                         slides,
                         current - 1
                    );
               }
          };

          const handleKeyDown = (
               e: KeyboardEvent
          ) => {
               if (isAnimating.current) return;

               const slides = getSlides();

               const current =
                    getCurrentSlideIndex(slides);

               if (current === -1) return;

               switch (e.key) {
                    case "ArrowDown":
                    case "ArrowRight":
                         e.preventDefault();
                         scrollToIndex(
                              slides,
                              current + 1
                         );
                         break;

                    case "ArrowUp":
                    case "ArrowLeft":
                         e.preventDefault();
                         scrollToIndex(
                              slides,
                              current - 1
                         );
                         break;
               }
          };

          window.addEventListener(
               "wheel",
               handleWheel,
               { passive: false }
          );

          window.addEventListener(
               "keydown",
               handleKeyDown
          );

          return () => {
               window.removeEventListener(
                    "wheel",
                    handleWheel
               );

               window.removeEventListener(
                    "keydown",
                    handleKeyDown
               );
          };
     }, []);
}