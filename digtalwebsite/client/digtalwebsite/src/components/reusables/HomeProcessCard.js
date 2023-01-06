import React from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@material-ui/core";

export const HomeProcessCard = ({
  position,
  moon,
  moonBlue,
  separator,
  text
}) => {
  const { t } = useTranslation("home");
  const max1200 = useMediaQuery("(min-width: 1200.1px)");

  return (
    <div
      className={
        position === "left" && !max1200
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

const HomeProcessCardMini = ({ moon, moonBlue, text }) => {
  const { t } = useTranslation("home");

  return (
    <div className={"leftmagic home__magic--card"}>
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

export default HomeProcessCardMini;
