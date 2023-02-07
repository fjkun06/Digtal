import React from "react";
import HomeHeading from "src/components/reusables/HomeHeading";
import HomeServiceCard from "src/components/reusables/HomeServiceCard";
import busTablet from "src/assets/images/services/uiux/busTablet.png";
import busDesktop from "src/assets/images/services/uiux/BusDesktop.png";
import marketTablet from "src/assets/images/services/uiux/marketTablet.png";
import marketDesktop from "src/assets/images/services/uiux/marketDesktop.png";
import BusIcon from "src/assets/svg/services/uiux/BusIcon";
import MarketIcon from "src/assets/svg/services/uiux/MarketIcon";

const Projects = () => {
  const main = "uiux__projects";

  return (
    <section className={main}>
      <HomeHeading section={"Our Most Notable Projects"} />
      <article>
        <HomeServiceCard
          img={[busTablet, busDesktop]}
          icon={<BusIcon />}
          title="subject.op2"
          text="services.software"
          position="left"
          route={""}
        />
        <HomeServiceCard
          img={[marketTablet, marketDesktop]}
          icon={<MarketIcon/>}
          // icon={<BusIcon />}
          title="subject.op2"
          text="services.software"
          position="right"
          route={""}
        />
      </article>
      {/* <HomeServiceCard/> */}
    </section>
  );
};

export default Projects;
