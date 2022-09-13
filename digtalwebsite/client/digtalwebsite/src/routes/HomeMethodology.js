import React from "react";
import NextPlanTwoToneIcon from "@mui/icons-material/NextPlanTwoTone";
import WebhookTwoToneIcon from "@mui/icons-material/WebhookTwoTone";
import EngineeringTwoToneIcon from "@mui/icons-material/EngineeringTwoTone";
import AcUnitTwoToneIcon from "@mui/icons-material/AcUnitTwoTone";
import { Grid, Tooltip } from "@mui/material";
import Headings from "./reusables/Headings";
import { useState } from "react";

export default function HomeMethodology({ heading, subHeading }) {
  const [display1, setOpacity1] = useState(0);
  const [display3, setOpacity3] = useState(0);
  const [display5, setOpacity5] = useState(0);
  const [display7, setOpacity7] = useState(0);
  // const [opacity, setOpacity] = useState(0);

  const obj = [
    { num: "one", icon: <AcUnitTwoToneIcon className="methodology-icon" />, opacity: display1, setOp: setOpacity1 },
    { num: "two", icon: null, display: "" },
    { num: "three", icon: <NextPlanTwoToneIcon className="methodology-icon" />, opacity: display3, setOp: setOpacity3 },
    { num: "four", icon: null, display: "" },

    { num: "five", icon: <WebhookTwoToneIcon className="methodology-icon" />, opacity: display5, setOp: setOpacity5 },
    { num: "six", icon: null, display: "" },

    { num: "seven", icon: <EngineeringTwoToneIcon className="methodology-icon" />, opacity: display7, setOp: setOpacity7 },
  ];

  return (
    <>
      <Grid className="home-body-methodology">
        <Headings heading={heading} subHeading={subHeading} />

        <Grid className={"home-body-methodology-sub"}>
          {obj.map(({ num, icon, opacity, setOp }, index) => (
            <div key={num} className={"home-body-methodology-sub-" + num}>
                  <Tooltip title="Click to display." placement="bottom">

              <div
                key={num}
                className={"home-body-methodology-sub-" + num + "-child"}
                onMouseEnter={() => {
                  setOp(0.99);
                  // setOpacity(1)
                }}
                onMouseLeave={() => {
                  setOp(opacity === 1 ? opacity : 0);
                  // setOpacity(display === "flex" ? 1 : 0)
                }}
                //  onClick={() => }
                onClick={() => {
                  setOp(opacity === 0 || opacity === 0.99 ? 1 : 0);
                  // setOpacity(1);

                  // console.log("display: ",display)
                }}
              >
                {icon}
                {(index + 1) % 2 === 1 ? (
                    <span className={"methodology-span"} style={{ opacity: opacity }}>
                      <span class={"methodology-span-title"}>Hello</span>
                      <span class={"methodology-span-text"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste soluta blanditiis iusto culpa </span>
                    </span>
                ) : (
                  () => console.log("no")
                )}
              </div>
              </Tooltip>

            </div>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
