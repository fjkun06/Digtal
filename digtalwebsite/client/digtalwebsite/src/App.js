import { Grid } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./layouts/footer/Footer";
import Navbar from "./layouts/navbar/Navbar";
import "./assets/sass/main.scss";
import { useState } from "react";
import { StyledEngineProvider } from "@mui/system";
import React from "react";
import { useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import Cookies from "universal-cookie";

export { nanoid as nano };

function App() {
  const loc = useLocation();
  const [language, setLanguage] = useState("/en");
  const { pathname } = useLocation();

    //langguage route settings
    const navigate = useNavigate();

    //navigation
    React.useEffect(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (!cookies.get("langguage")) {
        cookies.set("language", userTheme ? "dark" : "light", { path: "/" });
      }
      setCookie(cookies.get("theme"));
      if (loc.pathname === "/") navigate(language + "/");

    }, [language, loc.pathname, navigate]);

  //cookies and theme
  const cookies = React.useMemo(() => new Cookies(), []);

  const [userTheme, _] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // const [cookie, setCookie] = useState(cookies.get('theme'));
  const [cookie, setCookie] = useState("");

  React.useEffect(() => {
    //checking if cookie exists and or creating a new one

    if (!cookies.get("theme")) {
      cookies.set("theme", userTheme ? "dark" : "light", { path: "/" });
    }
    setCookie(cookies.get("theme"));
    //setting default color scheme
    document.documentElement.className = cookie;
  }, [cookie, cookies, userTheme]);

  //cookie handler
  const setThemeCookie = val => {
    cookies.set("theme", val, { path: "/" });
    setCookie(val);
  };

  //select dropdown state
  const [mobileSelectState, setMobileSelectState] = useState(false);

  //language dropdown state
  const [showFlagDropdown, setshowFlagDropdown] = useState(false);

  function toggleMobileSelect() {
    setMobileSelectState(mobileSelectState === true ? false : true);
  }

  React.useEffect(() => {
    const handleScroll = event => {
      setMobileSelectState(false);
      setshowFlagDropdown(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //scrollToTop useeffects

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);



  return (
    <>
      <StyledEngineProvider injectFirst>
        <div>
          <Grid container className="navigation-main" id="n-main">
            <Navbar
              setLanguage={setLanguage}
              language={language}
              toggleMobileSelect={toggleMobileSelect}
              setMobileSelectState={setMobileSelectState}
              mobileSelectState={mobileSelectState}
              showFlagDropdown={showFlagDropdown}
              setshowFlagDropdown={setshowFlagDropdown}
              setThemeCookie={setThemeCookie}
              cookie={cookie}
            />
          </Grid>

          <div
            id="scroll-zone"
            onClick={() => {
              setMobileSelectState(false);
              setshowFlagDropdown(false);
            }}
          >
            <Outlet />
          </div>
          <div>
            <Footer
              language={language}
              location={loc.pathname.includes("contact")}
            />
          </div>
        </div>
      </StyledEngineProvider>
    </>
  );
}

export default App;
