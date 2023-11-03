import { Grid } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";

const MobileNavbarIconHandler = ({
  mobileCross,
  mobileMenu,
  setShowMobileMenu,
  showMobileMenu
}) => {
  return (
    <Grid
      item
      container
      alignItems={"center"}
      className="main-nav-sub-mobile"
      justifyContent="end"
    >
      <Grid item className="mobile-sub-container">
        <MenuIcon
          className="mobile-navbar-menu"
          sx={{ display: showMobileMenu ? "none" : "block" }}
          onClick={() => {
            setTimeout(() => setShowMobileMenu(true), 100);
          }}
        />
        <CloseTwoToneIcon
          sx={{ display: !showMobileMenu ? "none" : "block" }}
          className="mobile-navbar-cross"
          onClick={() => {
            requestAnimationFrame(() => setShowMobileMenu(false));
          }}
        />
      </Grid>
    </Grid>
  );
};

export default MobileNavbarIconHandler;
