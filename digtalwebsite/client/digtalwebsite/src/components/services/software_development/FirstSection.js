import React from "react";
import { motion } from "framer-motion";

const firstSectionVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { duration: 2.5, delay: 0.5 }
  }
};

const FirstSection = () => {
  return (
    <div className="firstsection">
      <motion.div
        className="firstsection__header"
        variants={firstSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p>
          We build your software using the most <br /> accurate of our
          technologies
        </p>
      </motion.div>
    </div>
  );
};

export default FirstSection;
