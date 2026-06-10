import { useEffect, useRef } from "react";

export function useProjectSlides() {
     const isAnimating = useRef(false);

     useEffect(() => {
          const handleWheel = (e: WheelEvent) => {
               if (isAnimating.current) {
                    e.preventDefault();
                    return;
               }

               const slides = Array.from(
                    document.querySelectorAll("[data-slide]")
               ) as HTMLElement[];

               const currentScroll = window.scrollY;

               const currentIndex = slides.findIndex(
                    (slide, index) => {
                         const nextSlide =
                              slides[index + 1];

                         if (!nextSlide) {
                              return (
                                   currentScroll >=
                                   slide.offsetTop
                              );
                         }

                         return (
                              currentScroll >=
                              slide.offsetTop &&
                              currentScroll <
                              nextSlide.offsetTop
                         );
                    }
               );

               if (currentIndex === -1) return;

               const currentSlide =
                    slides[currentIndex];

               const slideTop =
                    currentSlide.offsetTop;

               const slideBottom =
                    slideTop +
                    currentSlide.offsetHeight;

               const viewportBottom =
                    window.scrollY +
                    window.innerHeight;

               if (e.deltaY > 0) {
                    const canScrollInside =
                         viewportBottom <
                         slideBottom - 10;

                    if (
                         canScrollInside
                    )
                         return;

                    const nextSlide =
                         slides[
                         currentIndex + 1
                         ];

                    if (!nextSlide) return;

                    e.preventDefault();

                    isAnimating.current = true;

                    nextSlide.scrollIntoView({
                         behavior: "smooth",
                         block: "start",
                    });

                    setTimeout(() => {
                         isAnimating.current =
                              false;
                    }, 800);
               }

               if (e.deltaY < 0) {
                    const canScrollInside =
                         window.scrollY >
                         slideTop + 10;

                    if (
                         canScrollInside
                    )
                         return;

                    const prevSlide =
                         slides[
                         currentIndex - 1
                         ];

                    if (!prevSlide) return;

                    e.preventDefault();

                    isAnimating.current = true;

                    prevSlide.scrollIntoView({
                         behavior: "smooth",
                         block: "start",
                    });

                    setTimeout(() => {
                         isAnimating.current =
                              false;
                    }, 800);
               }
          };

          window.addEventListener(
               "wheel",
               handleWheel,
               { passive: false }
          );

          return () =>
               window.removeEventListener(
                    "wheel",
                    handleWheel
               );
     }, []);
}