import React from "react";
import { useTranslation } from "react-i18next";

export const HomeProcessCard = ({
  position,
  moon,
  moonBlue,
  separator,
  text
}) => {
  const { t } = useTranslation("home");
  return (
    <div
      className={
        position === "left"
          ? "leftmagic home__magic--card"
          : "home__magic--card"
      }
    >
      {separator && (
        <div className="icon">
          <span>
            <img src={separator} alt="moon" />
          </span>
        </div>
      )}

      <div className="text">{t(text)}</div>
      <div className="moon">
        <span>
          <img src={moon} alt="moon" />
          <img src={moonBlue} alt="moon" />
        </span>
      </div>
    </div>
  );
};
