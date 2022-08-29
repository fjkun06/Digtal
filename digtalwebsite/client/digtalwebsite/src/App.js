import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import './assets/sass/main.scss';
import { useState } from "react";
function App() {

  const [language, setLanguage] = useState("/en");
  const condition = window.location.pathname?.includes("home");


  return (
     <>
           <Grid>
              <Grid container className="navigation-main" id="n-main" >
              {/* <Grid container className="navigation-main" id="n-main" sx={{position: condition? "fixed":"relative"}}> */}
                 <Navbar setLanguage={setLanguage} language={language}/>
              </Grid>
              <Grid id="scroll-zone" >
                 <Outlet />
              </Grid>
              <Grid>
                 <Footer language={language}/>
              </Grid>
           </Grid>
      
     </>
  );
}

export default App;
