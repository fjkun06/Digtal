import HomeHeading from "src/components/reusables/HomeHeading";
import { homeProcess } from "./config";
import { HomeProcessCard } from "src/components/reusables/HomeProcessCard";
import { useMediaQuery } from "@material-ui/core";
import { useState } from "react";

export default function ProcessSection() {
  const modalStyled = {
    zIndex: "2",
    opacity: "1"
  };
  const modalNormal = {opacity: "0",zIndx: "0"};
  const max1200 = useMediaQuery("(min-width: 1200.1px)");
  // const [state, setState] = useState(modalStyle);
  const [state, setState] = useState({opacity: "0",zIndx: "0"});
  function toggleModal() {
    setState( state => state.opacity === "0" ? modalStyled : modalNormal)
    console.log("Toggling modal")
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
            toggle={toggleModal}
          />
        )
      )}

      {max1200 && (
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
