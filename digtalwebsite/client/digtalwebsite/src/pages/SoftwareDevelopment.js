import React from "react";
import { motion } from "framer-motion";
import FirstSection from "../components/services/software_development/FirstSection";
import ServiceSection from "../components/services/software_development/services/main";
import BrandSection from "../components/home/brands/main";
import ListServiceSection from "../components/services/software_development/ListServiceSection";
import { useTranslation } from "react-i18next";
import { containerVariants } from "../utils/motionVariants/variants";
import { useMediaQuery } from "@mui/material";
import Patner from "src/components/services/software_development/patner";

const SoftwareDevelopment = () => {
  const { t } = useTranslation("softwaredevelopment");
  const matchesLaptop = useMediaQuery("(max-width:1199px)");
  const matchesTablet = useMediaQuery("(max-width:919px)");
  console.log(matchesLaptop);

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
          <div className="overflow-x-hidden break-keep text-center font-bold text-white tablet:text-[25px] laptop:text-[40px] desktop:text-[50px]">
            <motion.p
              // style={matchesTablet && { fontSize: "20px" }}
              initial={{ x: -300 }}
              animate={
                matchesTablet
                  ? {
                      x: 135,
                      transition: {
                        duration: 2,
                        type: "tween"
                      }
                    }
                  : matchesLaptop
                  ? {
                      x: 217,
                      transition: {
                        duration: 2,
                        type: "tween"
                      }
                    }
                  : {
                      x: 270,
                      transition: {
                        duration: 2,
                        type: "tween"
                      }
                    }
              }
            >
              {t("software_development")}
            </motion.p>
          </div>
        </div>
        <div className="right">
          <div className="relative overflow-x-hidden text-center font-bold text-[#663399] tablet:text-[25px] laptop:text-[40px] desktop:text-[50px]">
            <motion.p
              initial={{ x: 300 }}
              animate={
                matchesTablet
                  ? {
                      x: -135,
                      transition: {
                        duration: 2,
                        type: "tween"
                      }
                    }
                  : matchesLaptop
                  ? {
                      x: -217,
                      transition: {
                        duration: 2,
                        type: "tween"
                      }
                    }
                  : {
                      x: -270,
                      transition: {
                        duration: 2,
                        type: "tween"
                      }
                    }
              }
            >
              {t("software_development")}
            </motion.p>
          </div>
          <div className="absolute right-0 w-3/5 break-words text-end text-sm font-extralight">
            <motion.p>{t("software_development_slogan")}</motion.p>
          </div>
        </div>
      </div>

      {/* first section */}
      <FirstSection />

      {/* services section */}
      {detailsData.map((data, index) => (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ListServiceSection
            key={index}
            number={index + 1}
            heading={data.heading}
            info={data.info}
          />
        </motion.div>
      ))}
      <div className=" mt-16">
        <BrandSection heading={"technologies"} />
      </div>
      <div className="mt-16">
       <Patner/>
      </div>
      <div className=" mt-16">
        <ServiceSection />
      </div>
    </>
  );
};

export default SoftwareDevelopment;
