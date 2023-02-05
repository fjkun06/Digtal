import React from "react";

export const X = ({classN}) => {
  return (
 
    <span className={classN}>
      <svg viewBox="0 0 147 301" fill="red" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_544_3985)">
          <circle cx="150.63" cy="150.21" r="90.21" />
        </g>
        <defs>
          <filter
            id="filter0_f_544_3985"
            x="0.419922"
            y="0"
            width="300.42"
            height="300.42"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="25"
              result="effect1_foregroundBlur_544_3985"
            />
          </filter>
        </defs>
      </svg>
    </span>
  );
};
