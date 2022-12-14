import React from "react";

const Envelop = () => {
  return (
    <div>
      <svg width="20" height="27" viewBox="0 0 20 20" fill = "none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
        <rect width="20" height="20" fill="url(#pattern0)" />
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use href="#image0_587_3053" transform="scale(0.01)" />
          </pattern>
          <image
            id="image0_587_3053"
            width="100"
            height="100"
            href="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </div>
  );
};

export default Envelop;
