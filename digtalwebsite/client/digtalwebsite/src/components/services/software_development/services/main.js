import HomeServiceCard from "src/components/reusables/HomeServiceCard";
import { homeServices600 } from "./config";
import HomeHeading from "src/components/reusables/HomeHeading";
import { useTranslation } from "react-i18next";

export default function ServiceSection() {
  const { t } = useTranslation(["softwaredevelopment"]);

  return (
    <div className="home__service">
      <div className="home__heading">
      <span>{t("project")}</span>
    </div>

      {homeServices600.map(({ img, icon, text, title,position,route }) => (
        <HomeServiceCard
          img={img}
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
