import React from "react";
import NextPlanTwoToneIcon from "@mui/icons-material/NextPlanTwoTone";
import WebhookTwoToneIcon from "@mui/icons-material/WebhookTwoTone";
import EngineeringTwoToneIcon from "@mui/icons-material/EngineeringTwoTone";
import AcUnitTwoToneIcon from "@mui/icons-material/AcUnitTwoTone";
import { Grid } from "@mui/material";
import Headings from "./reusables/Headings";

export default function HomeMethodology({ heading, subHeading }) {
  const obj = [
    { num: "one", icon: <AcUnitTwoToneIcon className="methodology-icon"/> },
    { num: "two", icon:null },
    { num: "three", icon: <NextPlanTwoToneIcon className="methodology-icon"/> },
    { num: "four", icon:null },

    { num: "five", icon: <WebhookTwoToneIcon className="methodology-icon"/> },
    { num: "six", icon:null },

    { num: "seven", icon: <EngineeringTwoToneIcon className="methodology-icon"/> },
  ];

  return (
    <>
      <Grid className="home-body-methodology">
        <Headings heading={heading} subHeading={subHeading} />

        <Grid className={"home-body-methodology-sub"}>
          {obj.map((child) => (
            <div key={child.num} className={"home-body-methodology-sub-" + child.num}>
              <div key={child.num} className={"home-body-methodology-sub-" + child.num + "-child"}>
                    {child.icon}
              </div>
            </div>
          ))}
          {/* {["two", "four", "six"].map((child) => (
            <div key={child} className={"home-body-methodology-sub-" + child}>
              <div key={child} className={"home-body-methodology-sub-" + child + "-child"}></div>
            </div>
          ))} */}
        </Grid>
      </Grid>
    </>
  );
}
