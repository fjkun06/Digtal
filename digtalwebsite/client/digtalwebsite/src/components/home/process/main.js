import HomeHeading from "src/components/reusables/HomeHeading";
import { homeProcess } from "./config";
import { HomeProcessCard } from "src/components/reusables/HomeProcessCard";
import { useMediaQuery } from "@material-ui/core";
import { useState } from "react";

export default function ProcessSection() {
  const modalStyled = {
    zIndex: "3",
    opacity: "1"
  };
  const modalNormal = { opacity: "0", zIndex: "1" };
  const max1500 = useMediaQuery("(min-width: 1500.1px)");
  // const [state, setState] = useState(modalStyle);
  const [state, setState] = useState({ opacity: "0", zIndx: "0" });
  function toggleModalOn() {
    setState(modalStyled);
    console.log("entered");
    requestAnimationFrame(toggleModalOn);
  }
  function toggleModalOff() {
    setState(modalNormal);
    requestAnimationFrame(toggleModalOff);
  }

  return (
    <div className="home__magic">
      <HomeHeading section={"magic"} />
      {homeProcess.map(
        ({ position, moon, moonBlue, separator, text }, index) => (
          <HomeProcessCard
            key={index}
            position={position}
            moon={moon}
            moonBlue={moonBlue}
            separator={separator}
            text={text}
            toggleOn={toggleModalOn}
            toggleOff={toggleModalOff}
          />
        )
      )}

      {max1500 && (
        <div className="home__magic--modal" style={state}>
          {/* <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
            <filter id="blurMe">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>

            <rect width="10" height="10" fill="white" filter="url(#blurMe)" />
          </svg> */}
        </div>
      )}
    </div>
  );
}
