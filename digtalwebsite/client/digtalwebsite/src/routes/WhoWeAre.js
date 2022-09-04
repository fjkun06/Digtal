import React from 'react';
import MovingText from 'react-moving-text'
const WhoWeAre = () => {
  return (
    <div className="home-header-personality">
      <MovingText
      className="home-header-personality-text"
  type="slideInFromLeft"
  duration="2000ms"
  delay="3s"
  direction="normal"
  timing="ease-in-out"
  iteration="1"
  fillMode="none">
  React-Moving-Text
</MovingText>
      <MovingText
      className="home-header-personality-text"
  type="slideInFromLeft"
  duration="2000ms"
  delay="5s"
  direction="normal"
  timing="ease-in-out"
  iteration="1"
  fillMode="none">
  React-Moving-Text
</MovingText>
      <MovingText
      className="home-header-personality-text"
  type="slideInFromLeft"
  duration="2000ms"
  delay="7s"
  direction="normal"
  timing="ease-in-out"
  iteration="1"
  fillMode="none">
  React-Moving-Text
</MovingText>
    </div>
  );
}

export default WhoWeAre;
