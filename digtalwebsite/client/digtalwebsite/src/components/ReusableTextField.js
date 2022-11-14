import styled from "@emotion/styled";
import { FormHelperText, TextField } from "@mui/material";
import React from "react";

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'rebeccapurple',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'rebeccapurple',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rebeccapurple',
    },
    '&:hover fieldset': {
      borderColor: 'rebeccapurple',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rebeccapurple',
    },
  },
});

function ReusableTextField({ label, rows, errorState, field, errorText, success,focused }) {
  return <TextField className="contact-textfield" id="filled-error" label={label} color={success ? "success" : "secondary"} variant="outlined" size="medium" fullWidth multiline rows={rows ?? 1} {...field} error={errorState} focused={focused}/>;
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
