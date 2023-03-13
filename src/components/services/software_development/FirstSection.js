import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { firstSectionVariants } from "../../../utils/motionVariants/variants";

const FirstSection = () => {
  const { t } = useTranslation("softwaredevelopment");

  return (
    <div className="firstsection bg-[#663399] bg-blend-darken">
      <motion.div
        className="firstsection__header"
        variants={firstSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p>
          {t("section.first_part")} <br /> {t("section.second_part")}
        </p>
      </motion.div>
    </div>
  );
};

export default FirstSection;
