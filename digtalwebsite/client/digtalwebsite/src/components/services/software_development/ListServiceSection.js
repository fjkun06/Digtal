import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const numberVariants = {
  hidden: {
    scale: 1.5
  },
  visible: {
    scale: 6,
    transition: { duration: 3, type: "spring" }
  }
};

const detailsVariants = {
  hidden: {
    x: 1005
  },
  visible: {
    x: 0,
    transition: { type: "tween", delay: 2, duration: 1.5 }
  }
};

const ListServiceSection = ({ number, heading, info }) => {
  const [isInView, setIsInView] = useState();
  return (
    <>
      <motion.div
        className="list-service-container"
        style={{
          display: "flex",
          flexDirection: number % 2 == 0 ? "row-reverse" : "row"
        }}
        whileInView={() => {
          setIsInView(true);
          return {};
        }}
      >
        <div className="list-service-container__number">
          <motion.p
            className="number-value"
            variants={numberVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {number}
          </motion.p>
        </div>

        <motion.div
          className="list-service-container__detail"
          //   variants={detailsVariants}
          initial={{ x: number % 2 == 0 ? "-100vw" : "100vw" }}
          animate={
            isInView && {
              x: 0,
              transition: {
                delay: 1.5,
                type: "tween",
                duration: 1
              }
            }
          }
          //   whileInView="visible"
          //   viewport={{ once: true }}
        >
          <div className="list-service-container__detail-container">
            <p className="list-service-container__detail-heading">{heading}</p>
            <p className="list-service-container__detail-text">{info}</p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ListServiceSection;
