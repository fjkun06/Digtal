import { Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import { StyledEngineProvider } from "@mui/system";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { array } from "yup";

const ContactFormOptions = () => {
  const { t, i18n } = useTranslation("form");
  const ref = useRef([]);
  const [index, setIndex] = useState(4);
  const style = {
    border: "3px solid rgba(#663399, 1)",
    color: "rgba(#663399, 1)",
  };
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

    allInterests.map((elt) => {
      elt.addEventListener("click", (e) => {
        setIndex(Number(e.target.id))
        if (testState(e.target.id)) {
        } else {
          removeBorderFromOtherElements(e.target.id)
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
          <h5
            component={"span"}
            ref={(el) => (ref.current[0] = el)}
            id={"0"}
            onClick={() => {
              // setIndex(0);
              // ref.current[index].classList.toggle(bordered);
              // console.log(index === 0 ? ref.current[index] : "wtf");
            }}
            sx={{ fontFamily: "Poppins", border: "3px solid #663399", color: "red" }}
            className="contact-formoptions--pills-pill"
          >
            {/* <h5 component={"span"} ref={ref} index={0} onClick={() => setIndex(0)} sx={{ fontFamily: "Poppins",border: index === 0 ? style.border : "",color: index === 0 ? style.color : ""  }} className="contact-formoptions--pills-pill"> */}
            {t("subject.op2")}
          </h5>
          <h5
            className="contact-formoptions--pills-pill"
            ref={(el) => (ref.current[1] = el)}
            id={"1"}
            onClick={() => {
              // console.log(index);
              // setIndex(index + 1);
              // console.log(index);
              // index === 1 ? console.log(ref.current[index]) : console.log("");
            }}
          >
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
