import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Contact from "./MUIForm";
import Navbar, { NavList } from "./Navbar";
function App() {
  return (
     <>
        {/* <Contact/> */}
           <Grid>
              <Grid container>
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
