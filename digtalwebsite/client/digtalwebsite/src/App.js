import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import './assets/sass/main.scss';
import { useState } from "react";
function App() {

  const [language, setLanguage] = useState("/en");

  return (
     <>
           <Grid>
              <Grid container>
                 <Navbar setLanguage={setLanguage} language={language}/>
              </Grid>
              <Grid>
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
