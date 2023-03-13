import React from "react";

const SearchDesktop = () => {
  return (
    <>
      {/* <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="20" height="20" fill="url(#pattern0)" />
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use href="#image0_1525_1041" transform="scale(0.01)" />
          </pattern>
          <image
            id="image0_1525_1041"
            width="100"
            height="100"
            href="data:image/png;base64,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"
          />
        </defs>
      </svg> */}
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style></style>
        <circle cx="8" cy="8" r="7.5" stroke="rebeccapurple" stroke-width="1.5px" />
        <line x1="13" y1="13" x2="20" y2="20" stroke="rebeccapurple" stroke-width="2px" />
      </svg>
    </>
  );
};

export default SearchDesktop;
