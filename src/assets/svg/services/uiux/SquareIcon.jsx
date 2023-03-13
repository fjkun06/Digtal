import React from "react";

const SquareIcon = () => {
  return (
    <span>
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1_3291_5767" fill="white">
          <rect width="44" height="44" rx="2.5" />
        </mask>
        <rect
          width="44"
          height="44"
          rx="2.5"
          stroke="#9747FF"
          strokeWidth="5.64"
          mask="url(#path-1-inside-1_3291_5767)"
        />
        <mask id="path-2-inside-2_3291_5767" fill="white">
          <rect x="6" y="6" width="32" height="32" rx="2.5" />
        </mask>
        <rect
          x="6"
          y="6"
          width="32"
          height="32"
          rx="2.5"
          stroke="#00D0FF"
          strokeWidth="5.64"
          mask="url(#path-2-inside-2_3291_5767)"
        />
        <mask id="path-3-inside-3_3291_5767" fill="white">
          <rect x="11.5" y="11.5" width="20.5" height="20.5" rx="2.5" />
        </mask>
        <rect
          x="11.5"
          y="11.5"
          width="20.5"
          height="20.5"
          rx="2.5"
          stroke="#663399"
          strokeWidth="5.64"
          mask="url(#path-3-inside-3_3291_5767)"
        />
      </svg>
    </span>
  );
};

export default SquareIcon;
