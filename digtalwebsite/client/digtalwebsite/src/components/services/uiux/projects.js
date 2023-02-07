import React from 'react'
import HomeHeading from 'src/components/reusables/HomeHeading';
import HomeServiceCard from 'src/components/reusables/HomeServiceCard';
import busTablet from "src/assets/images/services/uiux/busTablet.png"
import busDesktop from "src/assets/images/services/uiux/BusDesktop.png"
import marketTablet from "src/assets/images/services/uiux/marketTablet.png"
import marketDesktop from "src/assets/images/services/uiux/marketDesktop.png"
import BusIcon from 'src/assets/svg/services/uiux/BusIcon';

const Projects = () => {
  const main = "uiux__projects";

  return (
    <section className={main}>
      <HomeHeading section={"Our Most Notable Projects"} />
      <HomeServiceCard img={[busTablet,busDesktop]} icon={<BusIcon/>} title="Hello" position="left" route={""}/>
      {/* <HomeServiceCard/> */}
    </section>
  )
}

export default Projects
