import React from "react";

const FacebookDark = () => {
  return (
    <span>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="red" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
        <rect width="28" height="28" fill="url(#pattern0)" />
        <use href="#image0_542_2907" transform="scale(0.01)" fill="red"/>

        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use href="#image0_542_2907" transform="scale(0.01)" />
          </pattern>
          <image
            id="image0_542_2907"
            width="100"
            height="100"
            href="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </span>
  );
};

export default FacebookDark;
