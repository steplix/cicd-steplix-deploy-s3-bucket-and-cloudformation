import { useRef, useEffect } from "react";

export function useMountainScroll() {
  const scrollableContainerRef = useRef();
  const SCROLL_SIZE = 250;

  useEffect(() => {
    const scrollableContainer = scrollableContainerRef.current;

    if (scrollableContainer) {
      const onWheel = (e) => {
        if (e.deltaY == 0) return;

        e.preventDefault();

        scrollableContainer.scrollTo({
          left:
            scrollableContainer.scrollLeft +
            (e.deltaY > 0 ? SCROLL_SIZE : SCROLL_SIZE * -1),
          behavior: "smooth",
        });
      };
      scrollableContainer.addEventListener("wheel", onWheel);
      return () => scrollableContainer.removeEventListener("wheel", onWheel);
    }
  }, []);

  return scrollableContainerRef;
}
