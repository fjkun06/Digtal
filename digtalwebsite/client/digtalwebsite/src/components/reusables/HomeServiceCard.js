import { useTranslation } from "react-i18next";
export const HomeServiceCard = ({ img, icon, title, text, position }) => {
  const { t } = useTranslation(["home", "form"]);

  return (
    <div
      className={
        position === "left" ? "left home__service--card" : "home__service--card"
      }
    >
      <div className="home__service--card-image">
        <img src={img} alt="xxx" />
      </div>
      <div className="home__service--card-subcard">
        <div className="icon">{icon}</div>
        <div className="mini-card">
          <div className="title">{t(title, { ns: "form" })}</div>
          <div className="text">{t(text)}</div>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceCard;
