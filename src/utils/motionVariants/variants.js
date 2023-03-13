export const headerVariants = {
  hidden: {
    x: -400,
    scale: 2
  },
  visible: {
    x: -200,
    scale: 2,

    transition: { type: "tween", duration: 1 }
  }
};
export const rightVariants = {
  hidden: {
    x: 400,
    scale: 2
  },
  visible: {
    x: 200,
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

export const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  },
  transition: { staggerChildren: 1.5 }
};

// First Section Variants
export const firstSectionVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { duration: 2.5, delay: 1.5 }
  }
};
