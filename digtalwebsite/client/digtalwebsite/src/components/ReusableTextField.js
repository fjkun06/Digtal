import styled from "@emotion/styled";
import { FormHelperText, TextField } from "@mui/material";
import React from "react";


function ReusableTextField({ label, rows, errorState, field, success, focused }) {
  return (
    <TextField
      className="contact-textfield"
      id="filled-error"
      label={!success ? label : null}
      hiddenLabel
      color={success ? "success" : "secondary"}
      variant="outlined"
      size="medium"
      fullWidth
      multiline
      rows={rows ?? 1}
      {...field}
      error={errorState}
      focused={focused}
      // helperText={errorText}
    />
  );
}

export default function CustomTextField({ label, rows, errorState, field, errorText, success }) {
  const prop = { label, rows, errorState, field, errorText, success };
  return (
    <>
      {success ? <ReusableTextField focused={true} {...prop} /> : <ReusableTextField {...prop} />}
      <FormHelperText id="component-helper-text" sx={{ paddingLeft: "14px", fontSize: "1.2rem" }} error={errorState}>
        {errorText}
      </FormHelperText>
    </>
  );
}
