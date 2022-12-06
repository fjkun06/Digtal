import React, { useEffect, useState } from "react";
import ActiveNavLink from "../routes/ReusableNavLink";
import anglais from "../assets/svg/uk.svg";
import france from "../assets/svg/fr.svg";
import german from "../assets/svg/de.svg";
import logo from "../assets/images/logoo.png";
import logoMobile from "../assets/images/logo2.png";
import { Box, StyledEngineProvider, ThemeProvider } from "@mui/system";
import languageSwitcher from "../i18n/languageSwitcher";

import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import MobileActiveNavLink from "../routes/ReusableMobileNavLink";
import LanguageDropdown from "./LanguageDropdown";
import { useMediaQuery, Grid } from "@mui/material";
//importing configuration
import { theme, Gridd, toggleMobileNavbar, toggleLanguage, toggleMobileServicesDropdown, selectClosed, selectOpen, dropdownItems } from "./config/navbar_config";
import SelectDropdown from "./SelectDropdown";
import { DarkMode, DarkModeTwoTone, LightMode, LightModeTwoTone } from "@mui/icons-material";
import { switchTheme } from "./config/theme";
import { EnglandIcon } from "../assets/svg/EnglandIcon";
import { FranceIcon } from "../assets/svg/FranceIcon";
import { GermanyIcon } from "../assets/svg/GermanyIcon";
import Search from "../assets/svg/Search";
import { icons } from "./config/footer_config";

export default function Navbar({ language, setLanguage }) {
  //theme configuration
  const [websiteTheme, setWebsiteTheme] = useState("dark");

  //initialising states
  const [dropdown, setdropdown] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [mobileSelectState, setMobileSelectState] = useState(false);

  const [servicesDropdown, setServicesDropdown] = useState("");
  const [mobileSelectGridRows, setmobileSelectGridRows] = useState(selectClosed);
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
  const { t } = useTranslation(["navbar", "form", "pageend"]);
  let location = useLocation();
  console.log(location);

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

  const allFlags = Array.from(document.querySelectorAll(".mobile-select--flag"));

  const bordered = "flag--bordered";

  //language switching function
  async function switchLanguage(name) {
    if (location.pathname.slice(0, 3) === name) {
      // if (language === e.target.route) {
      console.log(name + " already");
    } else {
     await setLanguage(name);
      setTimeout(() => navigate(name + location.pathname.slice(3 - location.pathname.length)), 300);
      languageSwitcher(name);
    }
  }

  React.useEffect(() => {
    function testState(id) {
      return allFlags.filter((flag) => flag.classList.contains(bordered)).some((elt) => elt.id === id);
    }

    function removeBorderFromOtherElements(id) {
      allFlags.forEach((flag) => {
        if (flag.id !== id) {
          flag.classList.remove(bordered);
        } else {
          flag.classList.add(bordered);
        }
      });
    }

    //setting default flag

    allFlags.forEach((flag) => {
      if (flag.name === location.pathname.slice(0, 3)) {
        flag.classList.add(bordered);
      } else {
        flag.classList.remove(bordered);
      }
    });

    allFlags.forEach((elt) => {
      console.log("hel: ", location.pathname.slice(3 - location.pathname.length));
      // console.log("hel: ",location.pathname.slice(3,location.pathname.length - 3))

      elt.addEventListener("click", (e) => {
        // handling changes
        //hanling border
        if (testState(e.target.id)) {
        } else {
          removeBorderFromOtherElements(e.target.id);
        }

      });
    });
  }, [language, location, setLanguage, navigate, allFlags]);

  //media query
  const max480 = useMediaQuery("(max-width:480px)");

  function toggleMobileSelect() {
    setMobileSelectState(mobileSelectState === true ? false : true);
  }

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
            position: "sticky",
            zIndex: 100,
          }}
        >
          <Grid item container className="main-nav-sub" height={showMobileMenu ? "99.5vh" : "9vh"}>
            {/* navbar logo */}

            <Grid
              item
              justifyContent="flex-start"
              className="main-nav-sub-logo"
              // bs={3}
              // md={3}
              // xs={4}
            >
              <Gridd
                item
                className="logo"
                sx={{
                  width: {
                    md: "50%",
                    sm: "70%",
                    xs: "100%",
                  },
                }}
                // ml={{ xs: 6 }}
              >
                {max480 ? <img src={logoMobile} alt="Digtal Logo" /> : <img src={logo} alt="Digtal Logo" />}
              </Gridd>
            </Grid>

            {/* Desktop navbar */}
            <Grid
              // md={8}
              // sm={9}
              // bs={9}
              container
              item
              // sx={{ display: max793 ? "none" : "", border: "1px solid red", backgroundColor: "red" }}
              alignItems={"center"}
              justifyContent="end"
              columnGap={{ bs: 3, w893: 5, md: 4, lg: 8 }}
              className="main-nav-sub-links"

              // pl={5}
              // pr={5}
            >
              <Gridd item className="main-nav-sub-links--item">
                {/* <Gridd item md={location.pathname === "/fr/" ? 0.7 : "/de/" ? 0.5 : 0.3}> */}
                <ActiveNavLink to={language + "/"} text={t("home")} />
              </Gridd>

              <Gridd item className="main-nav-sub-links--item">
                {/* <Gridd item md={window?.location?.pathname === "/de/" ? 1.5 : "/fr/" ? 1.0 : 0.5} lg={location.pathname === "/de/" ? 1.5 : "/fr/" ? 1.6 : 0.5} sx={{ border: "1px solid blue" }}> */}
                <ActiveNavLink to={language + "/enterprise"} text={t("enterprise")} />
              </Gridd>

              <Gridd item className="select-item-dropdown main-nav-sub-links--item" onMouseLeave={() => (Array.from(servicesDropdown)[0].style.display = "none")}>
                {/* <Gridd item md={window?.location?.pathname.includes("/de/home") ? 1.7 : 1.3} sm={2} className="select-item"> */}
                {/* <Box className="select-item-dropdown" onMouseLeave={() => (Array.from(servicesDropdown)[0].style.display = "none")} sx={{ width: "100%", border: "1px solid red" }}> */}
                {/* <Box className="select-item-dropdown" onMouseLeave={() => (Array.from(servicesDropdown)[0].style.display = "none")} sx={{ width: "100%", border: "1px solid red" }}> */}
                <ActiveNavLink to={language + "/services/"} text={t("services")} />
                {/* <ExpandMoreOutlined fontSize="large" className="select-item-sub-arrow" onMouseEnter={() => (Array.from(servicesDropdown)[0].style.display = "block")} /> */}

                {/* <SelectDropdown language={language} t={t} classes="select-item-sub services-dropdown" /> */}
                {/* </Box> */}
              </Gridd>

              <Gridd item className="main-nav-sub-links--item">
                {/* <Gridd item md={1.1} sx={{ width: "fit-content", border: "1px solid red" }}> */}
                <ActiveNavLink to={language + "/about-us"} text={t("about")} />
              </Gridd>

              <Gridd item className="main-nav-sub-links--item">
                {/* <Gridd item md={1.1} sx={{ width: "fit-content", border: "1px solid red" }}> */}
                <ActiveNavLink to={language + "/contact-us"} text={t("contact")} />
              </Gridd>

              <Grid
                item
                // className="language-item"
                className="main-nav-sub-links--item"
                sx={
                  {
                    // border: "1px solid red",
                  }
                }
              ></Grid>

              <Gridd item className="main-nav-sub-links--itemx">
                <Grid sx={{ width: "fit-content" }} className="language-item">
                  <EnglandIcon className="navbar-theme-dark main-nav-sub-links--country" sx={{ fontSize: 25 }} />
                </Grid>

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
              </Gridd>
            </Grid>
            <Grid item container md={1} sm={9} bs={9} alignItems={"center"} className="main-nav-sub-mobile" justifyContent="end">
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
                display={{ xs: "grid", bs: "grid" }}
                className="mobile-sub-container"
                // xs={8}
                // pr={4}
                // pt={1}
              >
                <MenuIcon
                  sx={
                    {
                      // display:"none"
                    }
                  }
                  className="mobile-navbar-menu"
                  onClick={() => toggleMobileNavbar(setShowMobileMenu, mobileCross, mobileMenu, "round")}
                />

                <CloseTwoToneIcon
                  sx={{
                    display: "none",
                  }}
                  className="mobile-navbar-cross"
                  onClick={() => {
                    setTimeout(() => toggleMobileNavbar(setShowMobileMenu, mobileCross, mobileMenu, "cross"), 50);
                  }}
                />

              </Grid>
            </Grid>

            {/* mobile navbar body */}
            <Grid item container className="main-nav-sub--mobile-body" sx={{ display: !showMobileMenu ? "none !important" : "grid" }}>
              <div className="mobile-body--section search">
                <div>
                  <Search />
                </div>
              </div>
              <div className="mobile-body--section menu">
                <div className="menu-sub">
                  <Grid item >
                    <ActiveNavLink to={language + "/"} text={t("home")} />
                  </Grid>
                  <Grid item >
                    <ActiveNavLink to={language + "/enterprise"} text={t("enterprise")} />
                  </Grid>

                  <Grid item >
                    <span onClick={toggleMobileSelect}>{t("services")}</span>
                    {!mobileSelectState ? (
                      <ExpandMoreOutlined onClick={toggleMobileSelect} sx={{ fontSize: 24, marginTop: "-5px" }} className="select-item-sub-arrow" />
                    ) : (
                      <ExpandLessOutlinedIcon onClick={toggleMobileSelect} sx={{ fontSize: 24, marginTop: "-5px" }} className="select-item-sub-arrow" />
                    )}
                    <div style={{ display: !mobileSelectState ? "none" : "block" }}>
                      <Grid item className="mobile-nav-bar-item">
                        <ActiveNavLink to={language + "/software-development"} text={t("subject.op2", { ns: "form" })} />
                      </Grid>
                      <Grid item className="mobile-nav-bar-item">
                        <ActiveNavLink to={language + "/digital-marketing"} text={t("subject.op3", { ns: "form" })} />
                      </Grid>
                      <Grid item className="mobile-nav-bar-item">
                        <ActiveNavLink to={language + "/consulting"} text={t("subject.op4", { ns: "form" })} />
                      </Grid>
                      <Grid item className="mobile-nav-bar-item">
                        <ActiveNavLink to={language + "/ui-ux-design"} text={t("subject.op1", { ns: "form" })} />
                      </Grid>
                    </div>
                  </Grid>
                  <Grid item className="mobile-nav-bar-item" gridRow={mobileSelectGridRows[1]}>
                    <ActiveNavLink to={language + "/about-us"} text={t("about")} />
                  </Grid>
                  <Grid item className="mobile-nav-bar-item" gridRow={mobileSelectGridRows[2]}>
                    <ActiveNavLink to={language + "/contact-us"} text={t("contact")} />
                  </Grid>

                  <Grid sx={{ width: "fit-content" }} className="language-item" gridRow={mobileSelectGridRows[3]}>
                    {dropdownItems.map((flag) => (
                      <div key={flag.id}>
                        <img src={flag.src} alt={flag.alt} name={flag.route} route={flag.route} id={flag.id} className="mobile-select--flag" onClick={() => switchLanguage(flag.route)}/>
                      </div>
                    ))}
                  </Grid>
                </div>
              </div>
              <div className="mobile-body--section icons">
                <div>
                  {icons.map((icon) => (
                    <a key={icon.url} href={icon.url} target="_blank" rel=" noreferrer">
                      {icon.icon}
                    </a>
                  ))}
                </div>

                <div>
                  © {new Date().getFullYear()} DIGTAL {t("rights", { ns: "pageend" })}
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
