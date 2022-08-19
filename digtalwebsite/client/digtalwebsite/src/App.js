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
           <Grid container sx={{ backgroundColor: 'blue' }}>
              <Navbar />
           </Grid>
           <Grid sx={{ backgroundColor: 'blue' }}>
              <Outlet />
           </Grid>
        </Grid>
        {/* <NavList/> */}
     </>
  );
}

export default App;
