import HomeHeading from "src/components/reusables/HomeHeading";
import { homeProcess } from "./config";
import { HomeProcessCard } from "src/components/reusables/HomeProcessCard";
import { useMediaQuery } from "@material-ui/core";

export default function ProcessSection() {
  const max1200 = useMediaQuery("(min-width: 1200.1px)");

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
          />
        )
      )}

      {max1200 && (
        <div className="home__magic--modal">
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
