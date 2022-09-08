import { KeyboardDoubleArrowRight } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';

export const RightArrow = ({index,incrementIndex}) => {
  return (
    <div className="carousel-arrow-right">
    {index === 3 ? (
      <IconButton aria-label="swipe right" onClick={incrementIndex} disabled disableRipple >
        <KeyboardDoubleArrowRight />
      </IconButton>
    ) : (
      <IconButton aria-label="swipe right" onClick={incrementIndex}  disableRipple className="carousel-arrow-right-icon">
        <KeyboardDoubleArrowRight />
      </IconButton>
    )}
  
  </div>
  );
}

