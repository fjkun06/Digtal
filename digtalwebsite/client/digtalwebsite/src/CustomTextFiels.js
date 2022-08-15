import { TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";

export default function CustomTextField({
  label,
  rows,
  errorState,
  field,
  errorText,
}) {
  return (
    <TextField
      id="filled-error"
      label={label}
      color="secondary"
      // defaultValue=""
      variant="filled"
      size="medium"
      fullWidth
      multiline
      rows={rows ?? 1}
      {...field}
      error={errorState}
      helperText={errorText}
      
    />
  );
}

{
}
