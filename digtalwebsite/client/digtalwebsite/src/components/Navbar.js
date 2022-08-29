import React, { useEffect, useState } from "react";
import "@fontsource/gudea";
import ActiveNavLink from "../routes/ReusableNavLink";
import anglais from "../assets/images/uk64.png";
import logo from "../assets/images/logo.png";
import { Box, ThemeProvider } from "@mui/system";
import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import MobileActiveNavLink from "../routes/ReusableMobileNavLink";
import LanguageDropdown from "./LanguageDropdown";
import { useMediaQuery, Grid } from "@mui/material";
//importing configuration
import { theme, Gridd, toggleMobileNavbar, toggleLanguage, toggleMobileServicesDropdown } from "./config/navbar_config";
import SelectDropdown from "./SelectDropdown";

export default function Navbar({ language, setLanguage }) {
  //initialising states
  const [dropdown, setdropdown] = useState("");
  const [servicesDropdown, setServicesDropdown] = useState("");
  const [mobileServicesDropdown, setMobileServicesDropdown] = useState("");
  const [mobileSpecial, setMobileSpecial] = useState("");
  const [mobileNavbarReveal, setMobileNavbarReveal] = useState("");
  const [mobileCross, setMobileCross] = useState("");
  const [mobileMenu, setMobileMenu] = useState("");
  const [specialLanguage, setspecialLanguage] = useState("");
  const [scrollUp, setScrollUp] = useState(true);
  // const [language, setLanguage] = useState("/en");
  const [region, setRegion] = useState(anglais);
  const [hasScrolled, setHasScrolled] = useState(false);
  const navigate = useNavigate();

  //language settings
  const { t } = useTranslation(["navbar", "form"]);
  let location = useLocation();

  //codition for scrolling
  
  const condition = location["pathname"]?.includes("home");

  console.log(location);
  console.log("condition: ", condition, "scrollUp: ", scrollUp);

  //first useffect hook
  useEffect(() => {
    // window.onload = () => {
    setdropdown(document.getElementsByClassName("lang-dropdown"));
    setServicesDropdown(document.getElementsByClassName("services-dropdown"));
    setMobileServicesDropdown(document.getElementsByClassName("mobile-services-dropdown"));
    setMobileSpecial(document.getElementsByClassName("special-navbar-item"));
    setMobileNavbarReveal(document.getElementsByClassName("mobile-navbar-reveal"));
    setMobileCross(document.getElementsByClassName("mobile-navbar-cross"));
    setMobileMenu(document.getElementsByClassName("mobile-navbar-menu"));
    setspecialLanguage(document.getElementsByClassName("special-language"));
  }, [language]);

  //navigation
  useEffect(() => {
    // navigate(language + "/home");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //scrolling
  useEffect(() => {
    const outlet = document.getElementById("hbody");
    const nav = document.getElementById("scroll-nav");
    const mainNav = document.getElementById("n-main");
    const navbar = getComputedStyle(nav, null);
    const sticky = outlet.offsetTop;

    if (!condition) {
      //making navbar visible
      nav.style.opacity = 1;
      mainNav.style.position = "relative";
    }
    //  else {
    //   setScrollUp(false);
    // }

    

    window.onscroll = function () {
      // print "false" if direction is down and "true" if up
      console.log("fnf", false * false);
      if (window.pageYOffset >= sticky && this.oldScroll > this.scrollY && condition) {
        setHasScrolled(true);
        nav.style.opacity = 1;
      }else{
        setHasScrolled(false);

      }

      this.oldScroll = this.scrollY;
    };
  }, [condition]);
  // }, [language,navigate]);

  //init page
  // window.onload = () => navigate(language + "/home");

  //media query
  const max767 = useMediaQuery("(max-width:768px)");

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          component={"nav"}
          container
          alignItems={"center"}
          className="main-nav"
          id="scroll-nav"
          direction="row"
          sx={{
            fontFamily: "Gudea",
            position: "sticky",
            display: condition? (hasScrolled ? "grid" : "none") : (scrollUp ? "grid" : "none"),
            // display: !condition && scrollUp ? "grid" : "none",
          }}
        >
          <Grid item container sx={{ backgroundColor: "white" }} pt={2} pb={2} alignItems={"center"} justifyContent="space-between">
            <Grid item justifyContent="flex-start" bs={3} md={3} xs={4}>
              <Gridd
                item
                sx={{
                  width: {
                    md: "50%",
                    sm: "70%",
                    xs: "100%",
                  },
                }}
                ml={{ xs: 2 }}
              >
                <img src={logo} alt="Digtal Logo" className="logo" />
              </Gridd>
            </Grid>

            {/* mobile navbar */}
            <Grid
              item
              sx={{
                backgroundColor: "transparent",
                height: "7rem",
                justifyContent: "end",
                zIndex: 99,
                position: "relative",
              }}
              display={{ xs: "grid", bs: "none" }}
              xs={8}
              pr={4}
              pt={1}
            >
              <MenuRoundedIcon
                sx={{
                  fontSize: "4rem",
                  "&:hover": { cursor: "pointer" },
                }}
                className="mobile-navbar-menu"
                onClick={() => toggleMobileNavbar(mobileNavbarReveal, mobileCross, mobileMenu, "round")}
              />

              <CloseTwoToneIcon
                sx={{
                  fontSize: "4rem",
                  color: "white",
                  "&:hover": { cursor: "pointer" },
                  display: "none",
                }}
                className="mobile-navbar-cross"
                onClick={() => {
                  setTimeout(() => toggleMobileNavbar(mobileNavbarReveal, mobileCross, mobileMenu, "cross"), 50);
                }}
              />

              <Grid className="mobile-nav-bar mobile-navbar-reveal">
                {["home", "enterprise"].map((item) => (
                  <Grid item className="mobile-nav-bar-item" key={item}>
                    <MobileActiveNavLink to={language + "/" + item} text={t(item)} />
                  </Grid>
                ))}

                <Grid item className="mobile-nav-bar-item" onClick={() => toggleMobileServicesDropdown(mobileServicesDropdown, mobileSpecial)}>
                  <MobileActiveNavLink to={language + "/services/"} text={t("services")} />
                  <ExpandMoreOutlined sx={{ fontSize: 24 }} className="select-item-sub-arrow" />
                </Grid>

                <Grid item className="mobile-nav-bar-item special-navbar-item">
                  <SelectDropdown language={language} t={t} classes="select-item-sub mobile-services-dropdown" />
                </Grid>
                <Grid item className="mobile-nav-bar-item">
                  <MobileActiveNavLink to={language + "/contact"} text={t("contact")} />
                </Grid>
                <Grid item className="mobile-nav-bar-item" onClick={() => toggleLanguage(specialLanguage)}>
                  <img src={region} alt="france-flag" className="language-image" />
                  <ExpandMoreOutlined sx={{ fontSize: 24 }} className="lselect-item-sub-arrow" />
                </Grid>
                <Grid item className="mobile-nav-bar-item special-language">
                  <LanguageDropdown location={location} language={language} setRegion={setRegion} setLanguage={setLanguage} classes={"language-dropdown"} />
                </Grid>
              </Grid>
            </Grid>

            {/* Desktop navbar */}
            <Grid md={9} sm={4} bs={9} container item sx={{ display: max767 ? "none" : "" }} alignItems={"center"} justifyContent="end" columnGap={{ bs: 3, w893: 5 }} pl={5} pr={5}>
              <Gridd item md={location.pathname === "/de/" ? 0.5 : 1}>
                <ActiveNavLink to={language + "/home"} text={t("home")} />
              </Gridd>
              <Gridd item md={location.pathname === "/de/" ? 1.5 : 2} lg={location.pathname === "/de/" ? 1.5 : 1.5}>
                <ActiveNavLink to={language + "/enterprise"} text={t("enterprise")} />
              </Gridd>
              <Gridd item md={location.pathname === "/de/home" ? 1.7 : 1.3} sm={2} className="select-item">
                <Box className="select-item-dropdown" onMouseLeave={() => (Array.from(servicesDropdown)[0].style.display = "none")}>
                  <ActiveNavLink to={language + "/services/"} text={t("services")} />
                  <ExpandMoreOutlined fontSize="large" className="select-item-sub-arrow" onMouseEnter={() => (Array.from(servicesDropdown)[0].style.display = "block")} />

                  <SelectDropdown language={language} t={t} classes="select-item-sub services-dropdown" />
                </Box>
              </Gridd>
              <Gridd item md={0.7} sx={{ width: "fit-content" }}>
                <ActiveNavLink to={language + "/contact"} text={t("contact")} />
              </Gridd>
              <Gridd item md={1.5} className="language-item">
                <Box className="language-item-sub" onMouseLeave={() => (Array.from(dropdown)[0].style.display = "none")}>
                  <img src={region} alt="language-flag" className="language-image" />

                  <ExpandMoreOutlined fontSize="large" className="language-item-sub-arrow" onMouseEnter={() => (Array.from(dropdown)[0].style.display = "grid")} />
                  <LanguageDropdown location={location} language={language} setRegion={setRegion} setLanguage={setLanguage} classes={"language-dropdown lang-dropdown"} />
                </Box>
              </Gridd>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
