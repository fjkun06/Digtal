import { Grid } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { toggleMobileNavbar } from "../../layouts/navbar/navbar_config";

const MobileNavbarIconHandler = ({ mobileCross, mobileMenu, setShowMobileMenu }) => {
  return (
    <Grid item container alignItems={"center"} className="main-nav-sub-mobile" justifyContent="end">
      <Grid item className="mobile-sub-container">
        <MenuIcon className="mobile-navbar-menu" onClick={() => toggleMobileNavbar(setShowMobileMenu, mobileCross, mobileMenu, "round")} />
        <CloseTwoToneIcon
          sx={{ display: "none" }}
          className="mobile-navbar-cross"
          onClick={() => {
            setTimeout(() => toggleMobileNavbar(setShowMobileMenu, mobileCross, mobileMenu, "cross"), 50);
          }}
        />
      </Grid>
    </Grid>
  );
};

export default MobileNavbarIconHandler;
