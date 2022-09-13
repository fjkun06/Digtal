import React from "react";
import NextPlanTwoToneIcon from "@mui/icons-material/NextPlanTwoTone";
import WebhookTwoToneIcon from "@mui/icons-material/WebhookTwoTone";
import EngineeringTwoToneIcon from "@mui/icons-material/EngineeringTwoTone";
import AcUnitTwoToneIcon from "@mui/icons-material/AcUnitTwoTone";
import { Grid } from "@mui/material";
import Headings from "./reusables/Headings";
import { useState } from "react";

export default function HomeMethodology({ heading, subHeading }) {
  const [display1, setDisplay1] = useState("none");
  const [display3, setDisplay3] = useState("none");
  const [display5, setDisplay5] = useState("none");
  const [display7, setDisplay7] = useState("none");

  const obj = [
    { num: "one", icon: <AcUnitTwoToneIcon className="methodology-icon" onClick={() => setDisplay1('flex')}/>,display: display1 ,setDisp:setDisplay1},
    { num: "two", icon: null,display:  '',setDisp:(x) => console.log(x)},
    { num: "three", icon: <NextPlanTwoToneIcon className="methodology-icon" />,display: display3 ,setDisp:setDisplay3},
    { num: "four", icon: null ,display: '',setDisp:(x) => console.log(x)},

    { num: "five", icon: <WebhookTwoToneIcon className="methodology-icon" />,display: display5 ,setDisp:setDisplay5},
    { num: "six", icon: null ,display: '',setDisp:(x) => console.log(x)},

    { num: "seven", icon: <EngineeringTwoToneIcon className="methodology-icon" />,display:  display7,setDisp:setDisplay7},
  ];

  return (
    <>
      <Grid className="home-body-methodology">
        <Headings heading={heading} subHeading={subHeading} />

        <Grid className={"home-body-methodology-sub"}>
          {obj.map(({num,icon,display,setDisp}) => (
            <div key={num} className={"home-body-methodology-sub-" + num}>
              <div key={num} className={"home-body-methodology-sub-" + num + "-child"}
              //  onMouseEnter={() => setDisp("")} 
               onClick={() => setDisp(display === ""? display: "none")} >
                {icon }
                <span className={"methodology-span-" + num} style={{ display: display }}>
                  <span class={"methodology-span-" + num + "-title"}>Hello</span>
                  <span class={"methodology-span-" + num + "-text"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste soluta blanditiis iusto culpa </span>
                </span>
              </div>
            </div>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
