import React from "react";
import HomeHeading from "src/components/reusables/HomeHeading";
import DeviceMockupMobile from "../../../assets/images/services/uiux/DeviceMockups.png";
import CustomImage from "src/components/reusables/ReusableImage";


const ProductDesign = () => {
  const main = "uiux__productdesign";

  return (
    <secion className={main}>
      <HomeHeading section={"What Is Product Design?"} />
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
        <CustomImage image={DeviceMockupMobile} alt={"Device Mockups"}/>
      </div>
    </secion>
  );
};

export default ProductDesign;
