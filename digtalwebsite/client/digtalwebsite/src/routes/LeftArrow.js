import React from 'react';
import { KeyboardDoubleArrowLeft } from "@mui/icons-material";
import { IconButton } from "@mui/material";


export const LeftArrow = ({index,decrementIndex}) => {
  return (
    <div className="carousel-arrow-left">
    {index === 0 ? (
      <IconButton aria-label="swipe left" onClick={decrementIndex} disabled disableRipple >
        <KeyboardDoubleArrowLeft />
      </IconButton>
    ) : (
      <IconButton aria-label="swipe left" onClick={decrementIndex}  disableRipple className="carousel-arrow-left-icon">
        <KeyboardDoubleArrowLeft />
      </IconButton>
    )}
  
  </div>
  );
}


