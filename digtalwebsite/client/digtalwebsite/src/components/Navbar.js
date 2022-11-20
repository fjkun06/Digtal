import React, { useEffect, useState } from "react";
import ActiveNavLink from "../routes/ReusableNavLink";
import anglais from "../assets/images/uk64.png";
import france from "../assets/images/fr64.png";
import german from "../assets/images/de64.png";
import logo from "../assets/images/logoo.png";
import { Box, StyledEngineProvider, ThemeProvider } from "@mui/system";
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
import { DarkMode, DarkModeTwoTone, LightMode, LightModeTwoTone } from "@mui/icons-material";
import { switchTheme } from "./config/theme";
import { EnglandIcon } from "../assets/svg/EnglandIcon";

export default function Navbar({ language, setLanguage }) {
  //theme configuration
  const [websiteTheme, setWebsiteTheme] = useState("dark");

  //initialising states
  const [dropdown, setdropdown] = useState("");
  const [servicesDropdown, setServicesDropdown] = useState("");
  const [mobileServicesDropdown, setMobileServicesDropdown] = useState("");
  const [mobileSpecial, setMobileSpecial] = useState("");
  const [mobileNavbarReveal, setMobileNavbarReveal] = useState("");
  const [mobileCross, setMobileCross] = useState("");
  const [mobileMenu, setMobileMenu] = useState("");
  const [specialLanguage, setspecialLanguage] = useState(window.location.pathname[0] + window.location.pathname[1] + window.location.pathname[2]);
  // const [language, setLanguage] = useState("/en");
  const [region, setRegion] = useState(anglais);
  const navigate = useNavigate();

  //language settings
  const { t } = useTranslation(["navbar", "form"]);
  let location = useLocation();

  //codition for scrolling
  const regex = new RegExp(/\/..\/$/);

  const condition = regex.test(window.location.pathname);

  //theme configuration
  useEffect(() => {
    //setting default color scheme
    document.documentElement.className = "light";
    setWebsiteTheme(document.documentElement.className);
    console.log("theme: ", document.documentElement.className);
  }, []);

  //language flag useeffect
  useEffect(() => {
    // }
    if (window.location.pathname === "/en/") {
      setRegion(anglais);
    } else if (window.location.pathname === "/fr/") {
      setRegion(france);
    } else if (window.location.pathname === "/de/") {
      setRegion(german);
    }
  }, []);

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
  }, []);

  //navigation
  useEffect(() => {
    if (location.pathname === "/") navigate(language + "/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //media query
  const max767 = useMediaQuery("(max-width:768px)");

  console.log("condicao: ", condition);
  //
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
            // fontFamily: "Gudea",
            position: "sticky",
            zIndex: 100,
          }}
        >
          <Grid item container sx={{ backgroundColor: "white" }} alignItems={"center"} justifyContent="space-between">
            <Grid item justifyContent="flex-start" bs={3} md={3} xs={4}>
              <Gridd
                item
                className="logo"
                sx={{
                  width: {
                    md: "50%",
                    sm: "70%",
                    xs: "100%",
                    // border: "1px solid red",
                  },
                }}
                ml={{ xs: 6 }}
              >
                <img src={logo} alt="Digtal Logo" />
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
                <Grid item className="mobile-nav-bar-item">
                  <MobileActiveNavLink to={language + "/"} text={t("home")} />
                </Grid>
                <Grid item className="mobile-nav-bar-item">
                  <MobileActiveNavLink to={language + "/enterprise"} text={t("enterprise")} />
                </Grid>

                <Grid item className="mobile-nav-bar-item" onClick={() => toggleMobileServicesDropdown(mobileServicesDropdown, mobileSpecial)}>
                  <MobileActiveNavLink to={language + "/services/"} text={t("services")} />
                  <ExpandMoreOutlined sx={{ fontSize: 24 }} className="select-item-sub-arrow" />
                </Grid>
                <Grid item className="mobile-nav-bar-item">
                  <MobileActiveNavLink to={language + "/about-us"} text={t("about")} />
                </Grid>

                <Grid item className="mobile-nav-bar-item special-navbar-item">
                  <SelectDropdown language={language} t={t} classes="select-item-sub mobile-services-dropdown" />
                </Grid>
                <Grid item className="mobile-nav-bar-item">
                  <MobileActiveNavLink to={language + "/contact-us"} text={t("contact")} />
                </Grid>
                <Grid item className="mobile-nav-bar-item">
                  <DarkModeTwoTone
                    className="navbar-theme-dark"
                    sx={{ fontSize: 25, display: websiteTheme === "dark" ? "block" : "none", marginLeft: "45%" }}
                    onClick={() => {
                      switchTheme("light");
                      setWebsiteTheme("light");
                    }}
                  />
                  <LightModeTwoTone
                    className="navbar-theme-light"
                    sx={{ fontSize: 25, display: websiteTheme === "light" ? "block" : "none", marginLeft: "45%" }}
                    onClick={() => {
                      switchTheme("dark");
                      setWebsiteTheme("dark");
                    }}
                  />
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
            <Grid
              md={9}
              sm={4}
              bs={9}
              container
              item
              sx={{ display: max767 ? "none" : "", 
              // border: "1px solid red"
             }}
              alignItems={"center"}
              justifyContent="end"
              columnGap={{ bs: 3, w893: 5, md: 4, lg: 8 }}
              pl={5}
              pr={5}
            >
              <Gridd item>
                {/* <Gridd item md={location.pathname === "/fr/" ? 0.7 : "/de/" ? 0.5 : 0.3}> */}
                <ActiveNavLink to={language + "/"} text={t("home")} />
              </Gridd>

              <Gridd item>
                {/* <Gridd item md={window?.location?.pathname === "/de/" ? 1.5 : "/fr/" ? 1.0 : 0.5} lg={location.pathname === "/de/" ? 1.5 : "/fr/" ? 1.6 : 0.5} sx={{ border: "1px solid blue" }}> */}
                <ActiveNavLink to={language + "/enterprise"} text={t("enterprise")} />
              </Gridd>

              <Gridd item className="select-item-dropdown" onMouseLeave={() => (Array.from(servicesDropdown)[0].style.display = "none")}>
                {/* <Gridd item md={window?.location?.pathname.includes("/de/home") ? 1.7 : 1.3} sm={2} className="select-item"> */}
                {/* <Box className="select-item-dropdown" onMouseLeave={() => (Array.from(servicesDropdown)[0].style.display = "none")} sx={{ width: "100%", border: "1px solid red" }}> */}
                {/* <Box className="select-item-dropdown" onMouseLeave={() => (Array.from(servicesDropdown)[0].style.display = "none")} sx={{ width: "100%", border: "1px solid red" }}> */}
                <ActiveNavLink to={language + "/services/"} text={t("services")} />
                {/* <ExpandMoreOutlined fontSize="large" className="select-item-sub-arrow" onMouseEnter={() => (Array.from(servicesDropdown)[0].style.display = "block")} /> */}

                {/* <SelectDropdown language={language} t={t} classes="select-item-sub services-dropdown" /> */}
                {/* </Box> */}
              </Gridd>

              <Gridd item>
                {/* <Gridd item md={1.1} sx={{ width: "fit-content", border: "1px solid red" }}> */}
                <ActiveNavLink to={language + "/about-us"} text={t("about")} />
              </Gridd>

              <Gridd item>
                {/* <Gridd item md={1.1} sx={{ width: "fit-content", border: "1px solid red" }}> */}
                <ActiveNavLink to={language + "/contact-us"} text={t("contact")} />
              </Gridd>

              <Grid
                item
                // className="language-item"
                sx={{
                  // border: "1px solid red",
                }}
              >
              
              </Grid>

              <Gridd item>
                <Grid sx={{ width: "fit-content" }} className="language-item">
                <EnglandIcon className="navbar-theme-dark" sx={{ fontSize: 25 }} />

                  <DarkMode
                    className="navbar-theme-dark"
                    sx={{ fontSize: 25, display: websiteTheme === "dark" ? "none" : "block" }}
                    onClick={() => {
                      switchTheme("dark");
                      setWebsiteTheme("dark");
                      console.log("hello: ", websiteTheme);
                    }}
                  />
                  <LightMode
                    className="navbar-theme-light"
                    sx={{ fontSize: 25, display: websiteTheme === "light" ? "none" : "block" }}
                    onClick={() => {
                      switchTheme("light");
                      setWebsiteTheme("light");
                    }}
                  />
                </Grid>
              </Gridd>
            </Grid>
          </Grid>
          <Grid item container></Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
