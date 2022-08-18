import { FormHelperText, TextField } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function CustomTextField({
   label,
   rows,
   errorState,
   field,
   errorText,
   success
}) {

   return (
      <>
         {success ? (
            <TextField
               id="filled-error"
               label={label}
               color={success ? 'success' : 'secondary'}
               // defaultValue=""
               variant="filled"
               size="medium"
               fullWidth
               focused
               multiline
               rows={rows ?? 1}
               {...field}
               error={errorState}
               helperText={errorText}
            // {}
            />
         ) : (
            <TextField
               id="filled-error"
               label={label}
               color={success ? 'success' : 'secondary'}
               // defaultValue=""
               variant="filled"
               size="medium"
               fullWidth
               multiline
               rows={rows ?? 1}
               {...field}
               error={errorState}
            // helperText={errorText}
            // {}
            />
         )}
         <FormHelperText
            id="component-helper-text"
            sx={{ paddingLeft: '14px', fontSize: '0.9rem' }}
            error={errorState}>
            {errorText}
         </FormHelperText>
      </>
   );



}
