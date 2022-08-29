import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import './assets/sass/main.scss';
import { useState } from "react";
function App() {

  const [language, setLanguage] = useState("/en");

  return (
     <>
           <Grid>
              <Grid container className="navigation-main" id="n-main">
              <Navbar setLanguage={setLanguage} language={language} />
              <Hero/>
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
