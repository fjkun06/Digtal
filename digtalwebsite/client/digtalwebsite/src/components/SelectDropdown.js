import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import { selectMenu } from "./config/navbar_config";

export default function SelectDropdown({language,t,classes}) {
  return (
    <Box className={classes}>
      {selectMenu.map((item) => (
        <Box className="select-item-sub-container" key={item.t}>
          <NavLink to={language + "/services/" + item.path} className="select-item-dropdown-text">
            {" "}
            {t(item.t, { ns: "form" })}
          </NavLink>
        </Box>
      ))}
    </Box>
  );
}
