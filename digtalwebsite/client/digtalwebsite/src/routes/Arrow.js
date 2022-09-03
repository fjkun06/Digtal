import React from "react";
import { Tooltip, Zoom } from "@mui/material";

export default function Arrow({text}) {
  return (
    <div id="title">
      <div className="header-1">
        <Tooltip TransitionComponent={Zoom} title={<h3>{text}</h3>} >
          <div className="header-arrow-1"></div>
        </Tooltip>
      </div>
      <div className="header-2">
        <Tooltip TransitionComponent={Zoom}  title={<h3>{text}</h3>}>
          <div className="header-arrow-2"></div>
        </Tooltip>
      </div>
      <div className="header-3">
        <Tooltip TransitionComponent={Zoom}  title={<h3>{text}</h3>}>
          <div className="header-arrow-3"></div>
        </Tooltip>
      </div>
      <div className="header-4">
        <Tooltip TransitionComponent={Zoom}  title={<h3>{text}</h3>}>
          <div className="header-arrow-4"></div>
        </Tooltip>
      </div>
    </div>
  );
}
