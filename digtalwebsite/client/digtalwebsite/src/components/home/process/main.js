import HomeHeading from "src/components/reusables/HomeHeading";
import { homeProcess } from "./config";
import { HomeProcessCard } from "src/components/reusables/HomeProcessCard";


export default function ProcessSection({ position }) {
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

    </div>
  );
}
