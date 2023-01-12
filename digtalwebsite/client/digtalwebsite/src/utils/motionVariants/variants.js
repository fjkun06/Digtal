export const headerVariants = {
  hidden: {
    x: -80,
    scale: 2
  },
  visible: {
    x: 208,
    scale: 2,

    transition: { type: "tween", duration: 1 }
  }
};
export const rightVariants = {
  hidden: {
    x: 80,
    scale: 2
  },
  visible: {
    x: -222,
    scale: 2,

    transition: { type: "tween", duration: 1 }
  }
};
export const subTextVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { delay: 2 }
  }
};

// First Section Variants
export const firstSectionVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { duration: 2.5, delay: 0.5 }
  }
};
