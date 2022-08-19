import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import ValidationTextFields from "./MUIForm";
import Navbar, { NavList } from "./Navbar";
import Contact from "./pages/contact";
function App() {
  return (
     <>
        {/* <ValidationTextFields/> */}
        {/* <Contact/> */}
        <Grid>
           <Grid>
              <Navbar />
           </Grid>
           <Grid>
              <Outlet />
           </Grid>
        </Grid>
        {/* <NavList/> */}
     </>
  );
}

export default App;
