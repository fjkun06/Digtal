import HomeServiceCard from "src/components/reusables/HomeServiceCard";
import { homeServices600 } from "./config";
import HomeHeading from "src/components/reusables/HomeHeading";

export default function ServiceSection() {
  return (
    <div className="home__service">
      <HomeHeading section={"service"} />

      {homeServices600.map(({ img, icon, text, title,position,route }) => (
        <HomeServiceCard
          img={img}
          icon={icon}
          text={text}
          title={title}
          key={title}
          position={position}
          route={route}
        />
      ))}
    </div>
  );
}
