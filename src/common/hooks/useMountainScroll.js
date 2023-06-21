import { useRef, useEffect } from 'react';

export function useMountainScroll() {
  const scrollableContainerRef = useRef();

  useEffect(() => {
    const scrollableContainer = scrollableContainerRef.current;

    if (scrollableContainer) {
      return () => scrollableContainer;
    }
  }, []);

  return scrollableContainerRef;
}
