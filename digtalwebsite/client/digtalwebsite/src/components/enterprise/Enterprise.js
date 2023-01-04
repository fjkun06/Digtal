import { Box } from "@mui/system";

import React from "react";



export default function Enterprise() {
  const [counter, setCounter] = React.useState(0);
  const requestRef = React.useRef();
  console.log("COUNTER: ", counter);

  function raf(func, ms, handler) {
    let start = performance.now();
    const loop = curr => {
      if (curr - start >= ms) {
        func(curr);
        start = curr;
        console.log("start: ", curr - start);
      }

      handler.current = requestAnimationFrame(loop);
    };
    handler.current = requestAnimationFrame(loop);
  }

  function gameLoop(timestamp) {
    console.log("c1: ", timestamp);
    setCounter(counter => counter + 1);
  }

  React.useEffect(() => {
    const func = gameLoop;
    raf(func, 3500, requestRef);
    const nestedRef = requestRef.current;

    return () => {
      cancelAnimationFrame(nestedRef);
    };
  }, []);

  if (counter === 6) {
    cancelAnimationFrame(requestRef.current);
    setCounter(0);

    raf(gameLoop, 3500, requestRef);
  }

  return (
    <main className="enterprise-page">

    </main>
  );
}
