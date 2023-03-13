import { Grid, styled } from "@mui/material";
import { createTheme } from "@mui/system";
// import sx from "@mui/system/sx";
import anglais from "./../../assets/svg/uk.svg";
import france from "./../../assets/svg/fr.svg";
import german from "./../../assets/svg/de.svg";

export const Gridd = styled(Grid)({
  fontSize: "1.5rem",
  textAlign: "center",
  display: "block",
});

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
export const toggleMobileNavbar = (setShowMobileMenu, mobileCross, mobileMenu, shape) => {

  shape === "round" ? setShowMobileMenu(true) : setShowMobileMenu(false);
  shape === "cross" ? setShowMobileMenu(false) : setShowMobileMenu(true);
};

//mobile navbar flag toggler
export const toggleLanguage = (specialLanguage) => {
  Array.from(specialLanguage)[0].style.display === "grid" ? (Array.from(specialLanguage)[0].style.display = "none") : (Array.from(specialLanguage)[0].style.display = "grid");
};


export const selectMenu = [
  { t: "subject.op2", path: "web-development" },
  { t: "subject.op3", path: "/digital-marketing" },
  { t: "subject.op4", path: "/services/consulting" },
];

export const selectClosed = ["3/4", "4/5", "5/6", "6/7"];
export const selectOpen = ["3/8", "8/9", "9/10", "10/11"];

export const flagItems = [
  { route: "/en", src: anglais, alt: "britain-flag", id: "0" },
  { route: "/fr", src: france, alt: "france-flag", id: "1" },
  { route: "/de", src: german, alt: "germany-flag", id: "2" },
];

export const selectDropdownItems = [
  { route: "/services/software-development", textIndex: "subject.op2" },
  { route: "/services/digital-marketing", textIndex: "subject.op3" },
  { route: "/services/consulting", textIndex: "subject.op4" },
  { route: "/services/ui-ux-design", textIndex: "subject.op1" },
];

export const navbarItems = [
  { route: "/", index: "home", id: "home" },
  { route: "/enterprise", index: "enterprise", id: "enterprise" },
  { route: "/about-us", index: "about", id: "about" },
  { route: "/contact-us", index: "contact", id: "contact" },
];

console.log(navbarItems.slice(2, 0));
