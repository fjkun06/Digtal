import { Grid, FormHelperText } from "@mui/material";
import { StyledEngineProvider } from "@mui/system";
import React, { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const ContactFormOptions = ({ setSubject, getSubject,valid,sendSubjectState }) => {
  const { t } = useTranslation("form");
  const [index, setIndex] = useState(4);
  const [subject, setSubjectx] = useState(getSubject("subject"));

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

    allInterests.forEach((elt) => {
      elt.addEventListener("click", (e) => {
        setIndex(Number(e.target.id));
        setSubject("subject", e.target.textContent);
        setSubjectx(getSubject("subject"));
        console.log("subject: ", getSubject("subject"));

        if (testState(e.target.id)) {
        } else {
          removeBorderFromOtherElements(e.target.id);
        }
      });
    });
  });

  //subject useeffect
   useEffect(() => {
    sendSubjectState(subject.length > 0)
   
  }, [subject.length,sendSubjectState]);

  return (
    <StyledEngineProvider injectFirst>
      <Grid container className="contact-formoptions">
        <Grid item container className="contact-formoptions-heading">
          <span>
            {t("interest")} {interests[index]}.
          </span>
        </Grid>
        <Grid item container className="contact-formoptions--pills">
          {interests.slice(0, 4).map((elt, index) => (
            <h5 key={index} id={String(index)} sx={{ fontFamily: "Poppins" }} className="contact-formoptions--pills-pill">
              {elt}
            </h5>
          ))}
          <FormHelperText id="component-helper-text" sx={{ paddingLeft: "14px", fontSize: "1.2rem", display: valid?  (subject.length > 0 ? "none" : "inline-block") : "none" }} error={true}>
            Please select an option or subject.
          </FormHelperText>
          {/* <FormHelperText id="component-helper-text" sx={{ paddingLeft: "14px", fontSize: "1.2rem" }} error={!!formState.errors?.phone}>
                {t(formState.errors.phone?.message, { ns: "formerror" })}
              </FormHelperText> */}
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
};

export default ContactFormOptions;
