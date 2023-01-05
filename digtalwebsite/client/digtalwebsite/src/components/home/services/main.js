import HomeServiceCard from "src/components/reusables/HomeServiceCard";
import { homeServices600 } from "./config";

export default function ServiceSection() {
  return (
    <div className="home__service">
      <div className="home__heading">
        {/* <span>'{t("solution")}'</span> */}
      </div>

      {homeServices600.map(({ img, icon, text, title }) => (
        <HomeServiceCard
          img={img}
          icon={icon}
          text={text}
          title={title}
          key={title}
        />
      ))}
    </div>
  );
}
