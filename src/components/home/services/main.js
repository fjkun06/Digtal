import HomeServiceCard from "src/components/reusables/HomeServiceCard";
import { homeServices600 } from "./config";
import HomeHeading from "src/components/reusables/HomeHeading";

export default function ServiceSection() {
  return (
    <div className="home__service">
      <HomeHeading section={"service"} />

      {homeServices600.map((service) => (
        <HomeServiceCard
          {...service}
          key={service.title}
          
        />
      ))}
    </div>
  );
}
