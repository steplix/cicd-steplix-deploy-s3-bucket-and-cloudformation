export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const fadeInFromTheSide = {
  initial: {
    x: 60,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.6, -0.5, 0.01, 0.99],
    },
  },
};

export const imageHoverZoomIn = {
  scale: 1.1,
  transition: {
    duration: 0.5,
  },
};

export const pageTransition = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
};
