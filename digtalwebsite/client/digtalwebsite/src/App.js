import ValidationTextFields from './MUIForm';
import Contact from './pages/contact';

import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import digitalBusiness from './assets/images/digital-businessimg.jpg';
import { Button } from '@mui/material';

function App() {
   return (
      <>
         <ValidationTextFields />
         {/* <Contact/> */}
         <Typography variant="h2" color="secondary" align="center" margin="2rem">
            {' '}
            Let's Keep it Simple
         </Typography>
         <Grid container sx={{ padding: '4rem' }}>
            <Grid item xs={12} md={6} className=""  align="justify">
               <Typography variant="h3" align="center" color="secondary">
                  Votre transformation digitale
               </Typography>

               <Typography align="center" fontSize="2rem" padding="1rem">
                  Nous vous accompagnons dans votre transformation digitale et nous veillons à faire
                  de celle-ci une réussite. Nous vous aidons à débloquer votre potentiel au maximum
                  afin d'optimiser votre rentabilité.
               </Typography>

               <Button variant="contained" color="secondary">
                  Nous contacter
               </Button>
            </Grid>

            <Grid item xs={12} md={6}  className="">
               <img src={digitalBusiness} alt="digitalBusiness" />
            </Grid>
         </Grid>
      </>
   );
}

export default App;
