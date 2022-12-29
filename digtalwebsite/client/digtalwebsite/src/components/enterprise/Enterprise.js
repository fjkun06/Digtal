import { Box } from "@mui/system";

import React from "react";
import { NavLink } from "react-router-dom";
import slideOne from "src/assets/images/carousel/noir3.webp";
import slideTwo from "src/assets/images/carousel/noir4.webp";
import slideTree from "src/assets/images/carousel/noir1.webp";
import slideFour from "src/assets/images/carousel/noir2.webp";

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

      handler.current =
        window.mozRequestAnimationFrame(loop) ||
        window.msRequestAnimationFrame(loop) ||
        window.oRequestAnimationFrame(loop) ||
        requestAnimationFrame(loop);
    };
    handler.current =
      window.mozRequestAnimationFrame(loop) ||
      window.msRequestAnimationFrame(loop) ||
      window.oRequestAnimationFrame(loop) ||
      requestAnimationFrame(loop);
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
      {counter === 0 && (
        <div>
          Changed {counter}x
          <br />
          <br />
          <img src={slideTwo} alt="placeholder" />
        </div>
      )}
      {counter === 1 && (
        <div>
          Changed {counter}x
          <br />
          <br />
          <img src={slideOne} alt="placeholder" />
        </div>
      )}
      {counter === 2 && (
        <div>
          Changed {counter}x
          <br />
          <br />
          <img src={slideTree} alt="placeholder" />
        </div>
      )}
      {counter === 3 && (
        <div>
          Changed {counter}x
          <br />
          <br />
          <img src={slideFour} alt="placeholder" />
        </div>
      )}
      {counter === 4 && (
        <div>
          Changed {counter}x
          <br />
          <br />
          <img src={slideTwo} alt="placeholder" />
        </div>
      )}
      {counter === 5 && (
        <div>
          Changed {counter}x
          <br />
          <br />
          <img src={slideOne} alt="placeholder" />
        </div>
      )}
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
    </main>
  );
}
