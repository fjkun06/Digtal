import { Grid, styled } from "@mui/material";
import { createTheme } from "@mui/system";
import sx from "@mui/system/sx";

export const Gridd = styled(Grid)(
  sx({
    fontSize: "1.5rem",
    textAlign: "center",
    display: "block",
  })
);

//theme
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      bs: 793,
      w793: 796,
      w893: 893,
      lg: 1200,
      xl: 1536,
    },
  },
});

//navbar icon switcher
export const toggleMobileNavbar = (mobileNavbarReveal, mobileCross, mobileMenu, shape) => {
  Array.from(mobileNavbarReveal)[0].style.display = shape === "round" ? "grid" : "none";
  Array.from(mobileCross)[0].style.display = shape === "round" ? "block" : "none";
  Array.from(mobileMenu)[0].style.display = shape === "round" ? "none" : "block";
};

//mobile navbar flag toggler
export const toggleLanguage = (specialLanguage) => {
  Array.from(specialLanguage)[0].style.display === "grid" ? (Array.from(specialLanguage)[0].style.display = "none") : (Array.from(specialLanguage)[0].style.display = "grid");
};

export const toggleMobileServicesDropdown = (mobileServicesDropdown, mobileSpecial) => {
  if (Array.from(mobileServicesDropdown)[0].style.display === "block" && Array.from(mobileSpecial)[0].style.display === "block") {
    Array.from(mobileServicesDropdown)[0].style.display = "none";
    Array.from(mobileSpecial)[0].style.display = "none";
  } else {
    Array.from(mobileServicesDropdown)[0].style.display = "block";
    Array.from(mobileSpecial)[0].style.display = "block";
  }
};

export const selectMenu = [
  { t: "subject.op2", path: "web-development" },
  { t: "subject.op3", path: "/digital-marketing" },
  { t: "subject.op4", path: "/services/consulting" },
];
