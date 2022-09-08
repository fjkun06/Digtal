import React from "react";
import MovingText from "react-moving-text";
import "@fontsource/victor-mono";
import { useTranslation } from "react-i18next";
const WhoWeAre = ({ state }) => {
  const { t } = useTranslation("home");
  // const [timer, setTimer] = useState(false);

  // setTimeout(() => {
  //   setTimer(true);
  // }, 1000);
  return (
    <div className="home-header-personality" style={{ opacity: state === 0 ? 1 : 0 }}>
      {/* <div className="home-header-personality" style={{opacity: state === 0 && timer? 1: 0}}> */}
      {/* <div className="home-header-personality" style={{display: state === 0 && timer? "block": "none"}}> */}
      {/* <MovingText
      className="home-header-personality-text-1"
  // type="fadeInFromLeft"
  duration="2000ms"
  delay="1.5s"
  direction="normal"
  timing="ease-in-out"
  iteration="1"
  fillMode="none"
 >
 We are young
</MovingText>
      <MovingText
      className="home-header-personality-text-2"
  // type="fadeInFromLeft"
  duration="2000ms"
  delay="3s"
  direction="normal"
  timing="ease-in-out"
  iteration="1"
  fillMode="none">
  We are talented

</MovingText>
      <MovingText
      className="home-header-personality-text-3"
  // type="fadeInFromLeft"
  duration="2000ms"
  delay="4.5s"
  direction="normal"
  timing="ease-in-out"
  iteration="1"
  fillMode="none">
  We are professionals.

</MovingText> */}

      <MovingText
        type="typewriter"
        className="home-header-personality-text-3"
        dataText={[
          " We are young",
          "  We are talented",
          "  We are professionals.",
          // 'Salat'
        ]}
      />

      <div style={{display: "inline-flex",}}>
        {["l", "i", "i","i","i","i","i","i","i","i","i"].map((letter, index) => (
          <span>
            <MovingText type="blur" duration="1000ms" delay={`${index * 100}ms`} direction="normal" timing="ease" iteration="5" fillMode="none">
              {letter}
            </MovingText>
          </span>
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;
