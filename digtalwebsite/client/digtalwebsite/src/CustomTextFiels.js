import { TextField } from '@mui/material';
import React from 'react'

export default function CustomTextField({ label, rows }) {
    
  return (
    <TextField
      error
      required
      id="filled-error"
      label={label}
      color="secondary"
          defaultValue=""
          
      variant="filled"
      size="medium"
        helperText="Madhauss."
      fullWidth
          multiline
        //   onFocus={}
      rows={rows ?? 1}
      // sx={{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"no-wrap"}}
    />
  );
}
