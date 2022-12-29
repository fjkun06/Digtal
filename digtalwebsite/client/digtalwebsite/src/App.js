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
  const [outletState, setOutletState] = useState(false);

  function toggleOutletSelectState() {
    setOutletState(true);
  }

  function toggleOutletSelectStateOff() {
    setOutletState(false);
  }

  return (
    <>
      <StyledEngineProvider injectFirst>
        <div>
          <Grid container className="navigation-main" id="n-main">
            {/* <Grid container className="navigation-main" id="n-main" sx={{position: condition? "fixed":"relative"}}> */}

            <Navbar
              setLanguage={setLanguage}
              language={language}
              toggleOutletSelect={toggleOutletSelectState}
              outletState={outletState}
              toggleOutletSelectStateOff={toggleOutletSelectStateOff}
            />
          </Grid>
          {/* bill's work starts here */}
          <div
            id="scroll-zone"
            // onClick={() => {
            //   console.log("hello shxt");
            //   setOutletState(false);
            // }}
          >
            <Outlet />
          </div>
          <div >
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
