import React from "react";
import { motion } from "framer-motion";
import FirstSection from "../components/services/software_development/FirstSection";
import ListServiceSection from "../components/services/software_development/ListServiceSection";

const containerVariants = {
  hidden: {
    x: -200
  },
  visible: {
    x: "60%",
    transition: { type: "tween", delay: 0.5, duration: 1.5 }
  }
};
const nextVariants = {
  hidden: {
    x: 200
  },
  visible: {
    x: "-40%",
    transition: { type: "tween", delay: 0.5, duration: 1.5 }
  }
};
const subTextVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { delay: 2.5 }
  }
};
const spanTextVariants = {
  hidden: {
    opacity: 1
  },
  visible: {
    opacity: 0,
    transition: { delay: 1 }
  }
};

const detailsData = [
  {
    heading: " Project Planning",
    info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,ut corrupti. Similique in dicta minima debitis sapiente ipsum voluptatem consequuntur facere adipisci vel, possimus et culpa asperiores aliquid amet obcaecati quod libero neque excepturi repudiandae soluta. Necessitatibus architecto quos earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus offiinventore ea soluta, voluptates ut asperiores quidem aut eos quia."
  },
  {
    heading: " Product roadmap creation",
    info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,ut corrupti. Similique in dicta minima debitis sapiente ipsum voluptatem consequuntur facere adipisci vel, possimus et culpa asperiores aliquid amet obcaecati quod libero neque excepturi repudiandae soluta. Necessitatibus architecto quos earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus offiinventore ea soluta, voluptates ut asperiores quidem aut eos quia."
  },
  {
    heading: " Project Planning",
    info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,ut corrupti. Similique in dicta minima debitis sapiente ipsum voluptatem consequuntur facere adipisci vel, possimus et culpa asperiores aliquid amet obcaecati quod libero neque excepturi repudiandae soluta. Necessitatibus architecto quos earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus offiinventore ea soluta, voluptates ut asperiores quidem aut eos quia."
  },
  {
    heading: " Release Planning",
    info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,ut corrupti. Similique in dicta minima debitis sapiente ipsum voluptatem consequuntur facere adipisci vel, possimus et culpa asperiores aliquid amet obcaecati quod libero neque excepturi repudiandae soluta. Necessitatibus architecto quos earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus offiinventore ea soluta, voluptates ut asperiores quidem aut eos quia."
  },
  {
    heading: " Daily stand-ups",
    info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,ut corrupti. Similique in dicta minima debitis sapiente ipsum voluptatem consequuntur facere adipisci vel, possimus et culpa asperiores aliquid amet obcaecati quod libero neque excepturi repudiandae soluta. Necessitatibus architecto quos earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus offiinventore ea soluta, voluptates ut asperiores quidem aut eos quia."
  },
  {
    heading: "Sprint review and retrospective",
    info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,ut corrupti. Similique in dicta minima debitis sapiente ipsum voluptatem consequuntur facere adipisci vel, possimus et culpa asperiores aliquid amet obcaecati quod libero neque excepturi repudiandae soluta. Necessitatibus architecto quos earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus offiinventore ea soluta, voluptates ut asperiores quidem aut eos quia."
  }
];

const SoftwareDevelopment = () => {
  return (
    <>
      <div
        style={{ position: "relative", width: "100vw", height: "100vh" }}
        onScroll={() => console.log("heeeeeeeeeeeeeeeeeeeeee")}
      >
        <div className="softwaredev">
          <div className="softwaredev__header">
            <div className="softwaredev__headerContainer">
              +
              <div className="softwaredev__textContainer">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="softwaredev__textStyle"
                  style={{ color: "blue" }}
                >
                  Software Development
                </motion.div>
                <motion.div
                  className="softwaredev__textStyle"
                  variants={nextVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    color: "pink",
                    maxWidth: "450px",
                    maxHeight: "50px",
                    overflow: "hidden"
                  }}
                >
                  Software De
                  <motion.span
                    variants={spanTextVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    velopment
                  </motion.span>
                </motion.div>
              </div>
              <motion.div
                className="softwaredev__subText"
                variants={subTextVariants}
                initial="hidden"
                animate="visible"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
                illo dicta aliquam consequatur officiis voluptas
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* first section */}
      <FirstSection />

      {/* services section */}
      {detailsData.map((data, index) => (
        <ListServiceSection
        key={index}
          number={index + 1}
          heading={data.heading}
          info={data.info}
        />
      ))}
    </>
  );
};

export default SoftwareDevelopment;