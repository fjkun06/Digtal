import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ArrowIcon from "src/assets/svg/ArrowIcon";
export const HomeServiceCard = ({ img, icon, title, text, position,route }) => {
  const { t } = useTranslation(["home", "form"]);
  const navigate = useNavigate();

  return (
    <div
      className={
        position === "left" ? "left home__service--card" : "home__service--card"
      }
    >
      <div className="home__service--card-image">
        <picture>
          <source media="(min-width:480.01px)" srcset={img[1]} />
          <img src={img[0]} alt="Service" />
        </picture>
      </div>
      <div className="home__service--card-subcard">
        <div className="icon">{icon}</div>
        <div className="mini-card">
          <div className="title">{t(title, { ns: "form" })}</div>
          <div className="text">{t(text)}</div>
        </div>
      </div>
      <div className="home__service--card-arrow" onClick={() => navigate(route)}>
        <div className="home__service--card-arrow-one">
          <ArrowIcon />
        </div>
        <div className="home__service--card-arrow-two">
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default HomeServiceCard;
