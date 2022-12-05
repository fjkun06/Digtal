import React from "react";
import NextPlanTwoToneIcon from "@mui/icons-material/NextPlanTwoTone";
import WebhookTwoToneIcon from "@mui/icons-material/WebhookTwoTone";
import EngineeringTwoToneIcon from "@mui/icons-material/EngineeringTwoTone";
import AcUnitTwoToneIcon from "@mui/icons-material/AcUnitTwoTone";
import { Grid, Tooltip } from "@mui/material";
import Headings from "./reusables/Headings";
import { useState } from "react";

export default function HomeMethodology({ heading, subHeading }) {
  const [opacity1, setOpacity1] = useState(0);
  const [opacity3, setOpacity3] = useState(0);
  const [opacity5, setOpacity5] = useState(0);
  const [opacity7, setOpacity7] = useState(0);
  const [transform1, settransform1] = useState("scale(0)");
  const [transform3, settransform3] = useState("scale(0)");
  const [transform5, settransform5] = useState("scale(0)");
  const [transform7, settransform7] = useState("scale(0)");
  // const [transform, setTransform] = useState('scale(0)')
  // const [opacity, setOpacity] = useState(0);

  const obj = [
    { num: "one", icon: <AcUnitTwoToneIcon className="methodology-icon" />, transform: transform1, setTrans: settransform1,stage: "Stage One" },
    { num: "two", icon: null, opacity: "", setTrans: (x) => console.log(x) },
    { num: "three", icon: <NextPlanTwoToneIcon className="methodology-icon" />, transform: transform3, setTrans: settransform3,stage: "Stage Two" },
    { num: "four", icon: null, opacity: "", setTrans: (x) => console.log(x) },

    { num: "five", icon: <WebhookTwoToneIcon className="methodology-icon" />, transform: transform5, setTrans: settransform5,stage: "Stage Three" },
    { num: "six", icon: null, opacity: "", setTrans: (x) => console.log(x) },

    { num: "seven", icon: <EngineeringTwoToneIcon className="methodology-icon" />, transform: transform7, setTrans: settransform7,stage: "Final Stage" },
  ];

  return (
    <>
      <Grid className="home-body-methodology">
        <Headings heading={heading} subHeading={subHeading} />

        <Grid className={"home-body-methodology-sub"}>
      
        </Grid>
      </Grid>
    </>
  );
}
