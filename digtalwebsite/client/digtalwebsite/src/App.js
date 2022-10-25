import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./assets/sass/main.scss";
import "./fonts/fonts";
import { useState } from "react";
function App() {
  const [language, setLanguage] = useState("/en");

  console.log("im in app");

  return (
    <>
      <Grid>
        <Grid container className="navigation-main" id="n-main">
          {/* <Grid container className="navigation-main" id="n-main" sx={{position: condition? "fixed":"relative"}}> */}
          <Navbar setLanguage={setLanguage} language={language} />
        </Grid>
        {/* Bill put your componenets here, i will route them as we progress: Remember React + TS */}
        <Grid>
          <Footer language={language} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
