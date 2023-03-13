import React from "react";
import { nano } from "src/App";

// useSourceSets([
//   headerMobileLight,main,
//   {
//     src: headerTabletLight,
//     query: "(480px < width <= 960px)",
//     classN: "tablet"
//   },
//   { src: headerDesktopLight, query: "(width > 960px)", classN: "desktop" }
// ])
const useSourceSets = pictures => {
  // const SourceSet = pictures => {
  return (
    <picture>
      {pictures?.map(({ src, query, classN }, index) =>
        index > 1 ? (
          <source
            srcSet={src}
            media={query}
            key={nano()}
            className={`${pictures[1]}--${classN}`}
          />
        ) : null
      )}
      <img src={pictures[0]} alt="MDN" />
    </picture>
  );
};

export default useSourceSets;
