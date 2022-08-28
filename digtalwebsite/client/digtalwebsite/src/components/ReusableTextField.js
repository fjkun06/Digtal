import { FormHelperText, TextField } from "@mui/material";
import React from "react";

function ReusableTextField({ label, rows, errorState, field, errorText, success,focused }) {
  return <TextField id="filled-error" label={label} color={success ? "success" : "secondary"} variant="filled" size="medium" fullWidth multiline rows={rows ?? 1} {...field} error={errorState} focused={focused}/>;
}

export default function CustomTextField({ label, rows, errorState, field, errorText, success }) {
   const prop = { label, rows, errorState, field, errorText, success };
  return (
    <>
      {success ? <ReusableTextField focused={true} helperText={errorText} {...prop}/> : <ReusableTextField {...prop}/>}
      <FormHelperText id="component-helper-text" sx={{ paddingLeft: "14px", fontSize: "0.9rem" }} error={errorState}>
        {errorText}
      </FormHelperText>
    </>
  );
}
