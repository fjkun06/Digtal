import React from "react";

export const DarkModeIcon = () => {
  return (
    <>
      <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect y="0.5" width="25" height="25" fill="url(#pattern0)" />
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_1243_2860" transform="scale(0.01)" />
          </pattern>
          <image
            id="image0_1243_2860"
            width="100"
            height="100"
            xlink:href="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </>
  );
};
