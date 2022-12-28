import { Box } from "@mui/system";

import React from "react";
import { NavLink } from "react-router-dom";

export default function Enterprise() {
  const [counter, setCounter] = React.useState(0);
  let elapsed = 0;
  const requestRef = React.useRef()
  function raf(func, ms) {
    const handler = {};
    let start = performance.now();
    const loop = curr => {
      if (curr - start >= ms) {
        // if (Date.now() - start >= ms) {
        func(curr);
        //   func(Date.now());
        start = curr;
        //   start = Date.now();
        console.log("start: ", curr - start);
      }

      requestRef.current = requestAnimationFrame(loop);
    };
    requestRef.current = requestAnimationFrame(loop);
    // return handler.id;
  }

  // let interval = raf(gameLoop, 3000);
  function gameLoop(timestamp) {
    console.log("c1: ", counter);
    setCounter(counter => counter + 1);
    console.log("c2: ", 1 % 2);

    //   requestAnimationFrame(gameLoop);
  }
  // requestAnimationFrame(gameLoop);

  React.useEffect(() => {
    raf(gameLoop, 1000);

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="enterprise-page">
      <span>Changed {counter}x</span>
      {
        // counter + 2 %
      }
      <span>Changed {counter}x</span>
      <span>Changed {counter}x</span>
      <span>Changed {counter}x</span>
      <button
        type="button"
        onClick={() => {
          cancelAnimationFrame(requestRef.current);
          console.log("stopped");
        }}
      >
        stopper
      </button>
      <button
        type="button"
        onClick={() => {
          raf(gameLoop, 1000);
          console.log("started");
        }}
      >
        starter
      </button>
      <div className="container">
        <div className="up">up</div>
        <div className="down">down</div>
      </div>
    </div>
  );
}
