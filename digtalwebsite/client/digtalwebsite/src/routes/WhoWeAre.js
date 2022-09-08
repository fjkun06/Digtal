import React from "react";
import MovingText from "react-moving-text";
import { useTranslation } from "react-i18next";
const WhoWeAre = ({ state }) => {
  const { t } = useTranslation("home");
  // const [timer, setTimer] = useState(false);

  // setTimeout(() => {
  //   setTimer(true);
  // }, 1000);
  return (
    <div className="home-header-personality" style={{ opacity: state === 0 ? 1 : 0 }}>
      <MovingText
        type="typewriter"
        className="home-header-personality-text-3"
        dataText={[
          t("digtal-carousel.one"),
          t("digtal-carousel.two"),
          t("digtal-carousel.three"),

          // 'Salat'
        ]}
      />
    </div>
  );
};

export default WhoWeAre;
