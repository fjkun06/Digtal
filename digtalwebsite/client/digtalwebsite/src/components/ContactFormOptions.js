import { Grid } from "@mui/material";
import { StyledEngineProvider } from "@mui/system";
import React, { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const ContactFormOptions = () => {
  const { t, i18n } = useTranslation("form");
  const [index, setIndex] = useState(4);

  const interests = [t("subject.op2"), t("subject.op1"), t("subject.op4"), t("subject.op3"), ". . "];
  const bordered = "contact-formoptions--pills--bordered";

  useEffect(() => {
    const allInterests = Array.from(document.querySelectorAll(".contact-formoptions--pills-pill"));

    function testState(id) {
      return allInterests.filter((li) => li.classList.contains(bordered)).some((elt) => elt.id === id);
    }

    function removeBorderFromOtherElements(id) {
      allInterests.forEach((int) => {
        if (int.id !== id) {
          int.classList.remove(bordered);
        } else {
          int.classList.add(bordered);
        }
      });
    }

    allInterests.forEach(elt => {
      elt.addEventListener("click", (e) => {
        setIndex(Number(e.target.id));
        if (testState(e.target.id)) {
        } else {
          removeBorderFromOtherElements(e.target.id);
        }
      });
    });
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <Grid container className="contact-formoptions">
        <Grid item container className="contact-formoptions-heading">
          <span>I am interested in {interests[index]}.</span>
        </Grid>
        <Grid item container className="contact-formoptions--pills">
          <h5 component={"span"} id={"0"} sx={{ fontFamily: "Poppins" }} className="contact-formoptions--pills-pill">
            {t("subject.op2")}
          </h5>
          <h5 className="contact-formoptions--pills-pill" id={"1"}>
            {t("subject.op1")}
          </h5>
          <h5 id={"2"} className="contact-formoptions--pills-pill">
            {t("subject.op4")}
          </h5>
          <h5 id={"3"} className="contact-formoptions--pills-pill">
            {t("subject.op3")}
          </h5>
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
};

export default ContactFormOptions;
