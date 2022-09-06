import React from 'react';
import { KeyboardDoubleArrowLeft } from "@mui/icons-material";
import { IconButton } from "@mui/material";


export const LeftArrow = ({index,decrementIndex}) => {
  return (
    <div className="carousel-arrow-left">
    {index === 0 ? (
      <IconButton aria-label="swipe left" onClick={decrementIndex} disabled disableRipple >
        <KeyboardDoubleArrowLeft onClick={decrementIndex} />
      </IconButton>
    ) : (
      <IconButton aria-label="swipe left" onClick={decrementIndex}  disableRipple className="carousel-arrow-left-icon">
        <KeyboardDoubleArrowLeft onClick={decrementIndex} />
      </IconButton>
    )}
  
  </div>
  );
}


