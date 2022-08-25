import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
   const { t, i18n } = useTranslation('pageend');

   return (
      <>
         <Suspense fallback="loading">
            <Grid
               container
               className="footer"
               sx={{}}
               alignItems="center"
               justifyContent={'center'}
               direction="row">
               <Grid item className="footer-item">
                  <Grid item className="footer-item-sub">
                     <Typography variant="h4" className="footer-item-sub-heading">
                        {t('subscribe')}
                     </Typography>
                  </Grid>
                  <Grid item className="footer-item-sub">
                     <Grid item>
                        <TextField />
                     </Grid>
                     <Grid item>
                        <Button
                           className="footer-item-sub-button"
                           variant="contained"
                           sx={{ borderRadius: '0px', padding: '8px 18px 8px 18px' }}>
                           {t('subs-button')}
                        </Button>
                     </Grid>
                  </Grid>
               </Grid>
               <Grid item className="footer-item">
                  major
               </Grid>
               <Grid item className="footer-item">
                  major
               </Grid>
            </Grid>
         </Suspense>
      </>
   );
}
