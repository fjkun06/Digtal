import React from "react";
import HomeHeading from "src/components/reusables/HomeHeading";
// import DeviceMockupsMobile from "../../../assets/svg/services/uiux/DeviceMockupsMobile";
import DeviceMockupsMobile from "../../../assets/svg/services/uiux/DeviceMockups.svg";
import DeviceMockupsTablet from "../../../assets/svg/services/uiux/DeviceMockupsTD.svg";

const ProductDesign = () => {
  const main = "uiux__productdesign";

  return (
    <section className={main}>
      <HomeHeading section={"What Is Product Design?"} />
      <section>
        <div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div>
          {/* <DeviceMockupsMobile/> */}
          <img src={DeviceMockupsMobile} alt="" />
          <img src={DeviceMockupsTablet} alt="" />
          <img src={DeviceMockupsTablet} alt="" />
          {/* <DeviceMockupsTablet/>
        <DeviceMockupsTablet/> */}
        </div>
      </section>
    </section>
  );
};

export default ProductDesign;
