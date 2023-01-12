import React from "react";
import { motion } from "framer-motion";
import FirstSection from "../components/services/software_development/FirstSection";
import ListServiceSection from "../components/services/software_development/ListServiceSection";
import { useTranslation } from "react-i18next";
import {
  headerVariants,
  rightVariants,
  subTextVariants
} from "../utils/motionVariants/variants";

const SoftwareDevelopment = () => {
  const { t } = useTranslation("softwaredevelopment");

  const detailsData = [
    {
      heading: t("services.planning"),
      info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,ut corrupti. Similique in dicta minima debitis sapiente ipsum voluptatem consequuntur facere adipisci vel, possimus et culpa asperiores aliquid amet obcaecati quod libero neque excepturi repudiandae soluta. Necessitatibus architecto quos earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus offiinventore ea soluta, voluptates ut asperiores quidem aut eos quia."
    },
    {
      heading: t("services.product"),
      info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,ut corrupti. Similique in dicta minima debitis sapiente ipsum voluptatem consequuntur facere adipisci vel, possimus et culpa asperiores aliquid amet obcaecati quod libero neque excepturi repudiandae soluta. Necessitatibus architecto quos earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus offiinventore ea soluta, voluptates ut asperiores quidem aut eos quia."
    },
    {
      heading: t("services.release"),
      info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,ut corrupti. Similique in dicta minima debitis sapiente ipsum voluptatem consequuntur facere adipisci vel, possimus et culpa asperiores aliquid amet obcaecati quod libero neque excepturi repudiandae soluta. Necessitatibus architecto quos earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus offiinventore ea soluta, voluptates ut asperiores quidem aut eos quia."
    },
    {
      heading: t("services.sprint"),
      info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,ut corrupti. Similique in dicta minima debitis sapiente ipsum voluptatem consequuntur facere adipisci vel, possimus et culpa asperiores aliquid amet obcaecati quod libero neque excepturi repudiandae soluta. Necessitatibus architecto quos earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus offiinventore ea soluta, voluptates ut asperiores quidem aut eos quia."
    },
    {
      heading: t("services.daily"),
      info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,ut corrupti. Similique in dicta minima debitis sapiente ipsum voluptatem consequuntur facere adipisci vel, possimus et culpa asperiores aliquid amet obcaecati quod libero neque excepturi repudiandae soluta. Necessitatibus architecto quos earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus offiinventore ea soluta, voluptates ut asperiores quidem aut eos quia."
    },
    {
      heading: t("services.review"),
      info: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,ut corrupti. Similique in dicta minima debitis sapiente ipsum voluptatem consequuntur facere adipisci vel, possimus et culpa asperiores aliquid amet obcaecati quod libero neque excepturi repudiandae soluta. Necessitatibus architecto quos earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus offiinventore ea soluta, voluptates ut asperiores quidem aut eos quia."
    }
  ];

  return (
    <>
      <div className="main-header">
        <div className="left">
          <div className="text">
            <motion.p
              variants={headerVariants}
              initial="hidden"
              animate="visible"
            >
              {t("software_development")}
            </motion.p>
          </div>

          <div className="left-bottom">
            <div className="sub-text">
              <p>
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="text">
            <motion.p
              variants={rightVariants}
              initial="hidden"
              animate="visible"
            >
              {t("software_development")}
            </motion.p>
          </div>
          <div className="right-bottom">
            <div className="sub-text">
              <motion.p
                variants={subTextVariants}
                initial="hidden"
                animate="visible"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                molestias!
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* first section */}
      <FirstSection />

      {/* services section */}
      {detailsData.map((data, index) => (
        <ListServiceSection
          number={index + 1}
          heading={data.heading}
          info={data.info}
        />
      ))}
    </>
  );
};

export default SoftwareDevelopment;
