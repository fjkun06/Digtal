import React from "react";
export const PlayIcon = React.forwardRef(({ state, handler }, ref) => {
  return (
    <span
      ref={ref}
      onClick={handler}
      style={{
        display: state === "paused" ? "inline-block" : "none"
      }}
    >
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,0 L15,9.5 L0,19 Z" fill="none" stroke="none" />
      </svg>
    </span>
  );
});
