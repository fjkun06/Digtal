import React from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@material-ui/core";

export const HomeProcessCard = ({
  position,
  moon,
  moonBlue,
  separator,
  text,
  toggleOff,
  toggleOn
}) => {
  const { t } = useTranslation("home");
  const max1500 = useMediaQuery("(min-width: 1500.1px)");
  const max768 = useMediaQuery("(min-width: 768.1px)");

  return (
    <div
      className={
        position === "left" && !max1500
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

      <div className="text" onMouseEnter={toggleOn} onMouseLeave={toggleOff}>
        {max768 ? (
          <>
            <span>{t(text.title)}</span>
            <p>
            {t(text.body)}
            </p>
          </>
        ) : (
          <>{t(text.title)}. {t(text.body)}</>
        )}
        
      </div>
      <div className="moon" onMouseLeave={toggleOff} onMouseEnter={toggleOn}>
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
      <div className="text">
        {t(text)}
        {/* <span>Title</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          assumenda eius pariatur deleniti aspernatur ab aut! Sunt quam amet
          nesciunt.
        </p> */}
      </div>
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
