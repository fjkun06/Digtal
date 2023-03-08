import React from "react";
import { motion } from "framer-motion";
import FirstSection from "../components/services/software_development/FirstSection";
import ServiceSection from "../components/services/software_development/services/main";
import BrandSection from "../components/home/brands/main";
import ListServiceSection from "../components/services/software_development/ListServiceSection";
import { useTranslation } from "react-i18next";
import { containerVariants } from "../utils/motionVariants/variants";
import { useMediaQuery } from "@mui/material";

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
      <div className=" mt-10">
        <BrandSection heading={"technologies"} />
      </div>
      <div className=" softwaredev__svg mt-10">
        <span>
          <svg
            viewBox="0 0 251 223"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M163.923 178.387L138.266 222.987H71.0733C65.0786 222.987 59.5428 219.777 56.5623 214.576L2.21279 119.817C-0.737598 114.665 -0.737598 108.335 2.21279 103.183L22.8964 67.135L48.4249 111.493L86.91 178.387H163.923Z" />
            <path d="M248.634 119.817L194.284 214.591C191.306 219.794 185.768 223.003 179.773 223H138.252L163.909 178.4L202.422 111.494L163.909 44.6H215.023L248.619 103.183C251.595 108.327 251.601 114.668 248.634 119.817Z" />
            <path d="M215.036 44.6H86.9101L48.4249 111.494L22.8965 67.1223L56.5624 8.41114C59.5403 3.20728 65.0778 -0.00245221 71.0734 1.40571e-06H179.787C185.78 0.00541525 191.314 3.21313 194.296 8.41114L215.036 44.6Z" />
            <path d="M163.924 44.6L202.409 111.494L163.909 178.387H86.9237L48.4258 111.494L86.9109 44.6H163.924Z" />
            <path d="M125.423 144.948C143.899 144.948 158.877 129.97 158.877 111.494C158.877 93.0173 143.899 78.0393 125.423 78.0393C106.947 78.0393 91.9688 93.0173 91.9688 111.494C91.9688 129.97 106.947 144.948 125.423 144.948Z" />
          </svg>
        </span>{" "}
      </div>
      <div className=" mt-10">
        <ServiceSection />
      </div>
    </>
  );
};

export default SoftwareDevelopment;
