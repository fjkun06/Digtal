import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@mui/material";

const ListServiceSection = ({ number, heading, info }) => {
  const matches = useMediaQuery('(min-width:920px)');

  const { ref, inView } = useInView({ threshold: matches? 0.6 : 0.4});

  return (
    <>
      <motion.div
        ref={ref}
        className={`flex flex-col ${
          number % 2 === 0 ? "laptop:flex-row-reverse" : "laptop:flex-row"
        }`}
      >
        <div className="flex h-[200px] items-center justify-center text-[50px]  font-semibold text-[var(--software-development-number)] laptop:h-auto laptop:w-3/12 laptop:text-[60px]">
          <motion.p
            className="number-value"
            initial={{ scale: 1 }}
            animate={
              inView && {
                scale: 3,
                transition: { duration: 2, type: "spring" }
              }
            }
          >
            {number}
          </motion.p>
        </div>

        <motion.div
          className="laptop:w-9/12 shadow-2xl"
          initial={matches ? { x: number % 2 === 0 ? "-100vw" : "100vw" }: {y: "100vh"}}
          animate={
            inView && matches ? {
             x: 0,
              transition: {
                duration: 2,
                type : "tween"
              }
            }: inView &&{
              y:0,
               transition: {
                 duration: 2,
                 type : "tween"
               }
             }
          }
        >
          <motion.div className="bg-[#663399] py-20 px-20 text-center text-[16] text-white laptop:p-40 laptop:text-left">
            <motion.p
              className=" mb-3 text-[16px] font-semibold laptop:text-[20]
            desktop:text-[30px]"
              initial={{ opacity: 0  }}
              animate={
                inView && {
                  opacity: 1,
                  transition: {
                    type: "tween",
                    duration: 1,
                    delay: 1.5
                  }
                }
              }
            >
              {heading}
            </motion.p>
            <motion.p
              className=" text-[10px] laptop:text-[14px] desktop:text-[19px]"
              initial={{ opacity: 0  }}
              animate={
                inView && {
                  opacity: 1,
                  transition: {
                    type: "tween",
                    duration: 1,
                    delay: 1.5
                  }
                }
              }
            >
              {info}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ListServiceSection;
