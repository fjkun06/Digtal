import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import './scss/footer.scss';

export default function Footer() {
   const { t, i18n } = useTranslation('pageend');

   return (
      <>
         <Suspense fallback="loading">
            <Grid
               container
               className="main-footer"
               sx={{}}
               alignItems="center"
               justifyContent={'center'}
               direction="row">
               <Grid item className="main-footer-item">
                  <Grid item className="main-footer-item-sub">
                     <Typography variant="h4" className="main-footer-item-sub-heading">
                        {t('subscribe')}
                     </Typography>
                  </Grid>
                  <Grid item className="main-footer-item-sub">
                     <Grid item>
                        <TextField />
                     </Grid>
                     <Grid item>
                        <Button
                           className="main-footer-item-sub-button"
                           variant="contained"
                           sx={{ borderRadius: '0px', padding: '8px 18px 8px 18px' }}>
                           {t('subs-button')}
                        </Button>
                     </Grid>
                  </Grid>
               </Grid>
               <Grid item className="main-footer-item">
                  major
               </Grid>
               <Grid item className="main-footer-item">
                  major
               </Grid>
            </Grid>
         </Suspense>
      </>
   );
}
