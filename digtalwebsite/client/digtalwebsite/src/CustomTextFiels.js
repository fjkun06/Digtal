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
  success
}) {
  return success ? (
    <TextField
      id="filled-error"
      label={label}
      color={success ? "success" : "secondary"}
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
      color={success ? "success" : "secondary"}
      // defaultValue=""
      variant="filled"
      size="medium"
      fullWidth
      multiline
      rows={rows ?? 1}
      {...field}
      error={errorState}
      helperText={errorText}
      // {}
    />
  );
}

{
}
