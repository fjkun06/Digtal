import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Contact from "./MUIForm";
import Navbar, { NavList } from "./Navbar";
import Enterprise from "./routes/Enterprise";
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
        {/* <Enterprise/> */}
        {/* <NavList/> */}
     </>
  );
}

export default App;
