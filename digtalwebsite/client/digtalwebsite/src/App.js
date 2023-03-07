import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./layouts/footer/Footer";
import Navbar from "./layouts/navbar/Navbar";
import "./assets/sass/main.scss";
import { useState } from "react";
import { StyledEngineProvider } from "@mui/system";
import React from "react";
import { useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
export { nanoid as nano };

function App() {
  const loc = useLocation();
  const [language, setLanguage] = useState("/en");
  const { pathname } = useLocation();

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
