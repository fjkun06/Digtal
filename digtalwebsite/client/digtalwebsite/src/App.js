import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./layouts/footer/Footer";
import Navbar from "./layouts/navbar/Navbar";
import "./assets/sass/main.scss";
import { useState } from "react";
import { StyledEngineProvider } from "@mui/system";
import React from "react";
import { useLocation } from "react-router-dom";

function App() {
  const loc = useLocation();
  const [language, setLanguage] = useState("/en");

  const [mobileSelectState, setMobileSelectState] = useState(false);

  function toggleMobileSelect() {
    setMobileSelectState(mobileSelectState === true ? false : true);
  }

  const outlet = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = event => {
      setMobileSelectState(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <StyledEngineProvider injectFirst>
        <div
          
        >
          <Grid container className="navigation-main" id="n-main">
            <Navbar
              setLanguage={setLanguage}
              language={language}
              toggleMobileSelect={toggleMobileSelect}
              setMobileSelectState={setMobileSelectState}
              mobileSelectState={mobileSelectState}
            />
          </Grid>

          <div
            id="scroll-zone"
            onClick={() => {
              setMobileSelectState(false);
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
