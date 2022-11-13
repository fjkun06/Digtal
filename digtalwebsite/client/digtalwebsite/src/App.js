import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ServiceSection from "./components/home/services/main";
import "./assets/sass/main.scss";
import "./fonts/fonts";
import { useState } from "react";
import CarouselSection from "./components/home/carousel/carousel";

// import ServiceFirst, { ServiceFourth } from "./components/home/services/service";
// import Title from "./components/home/services/title";
// import { ServiceSecond } from "./components/home/services/service";
// import { ServiceThird } from "./components/home/services/service";

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
        {/* bill's work starts here */}
          <CarouselSection />
          <ServiceSection />
        {/* bill's work ends here */}
        <Grid>
          <Footer language={language} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
