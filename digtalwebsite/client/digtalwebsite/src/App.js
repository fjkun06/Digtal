import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./components/ContactForm";
import Navbar from "./components/Navbar";
import './assets/sass/main.scss';
function App() {
  return (
     <>
           <Grid>
              <Grid container>
                 <Navbar />
              </Grid>
              <Grid>
                 <Outlet />
              </Grid>
              <Grid>
                 <Footer/>
              </Grid>
           </Grid>
      
     </>
  );
}

export default App;
