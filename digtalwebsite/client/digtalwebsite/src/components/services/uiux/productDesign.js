import React from "react";
import DeviceMockupsMobile from "../../../assets/svg/services/uiux/DeviceMockups.svg";
import DeviceMockupsTablet from "../../../assets/svg/services/uiux/DeviceMockupsTD.svg";
import { nano } from "src/App";
const HomeHeading = React.lazy(() =>
  import("src/components/reusables/HomeHeading")
);

const ProductDesign = () => {
  const main = "uiux__product_design";
  const mockups = [
    DeviceMockupsMobile,
    DeviceMockupsTablet,
    DeviceMockupsTablet
  ];

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
          {mockups.map(m => (
            <img src={m} alt="Design Mockup" key={nano()} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default ProductDesign;
