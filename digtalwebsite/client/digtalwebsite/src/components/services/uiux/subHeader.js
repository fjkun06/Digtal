import LineIconLight from "../../../assets/svg/services/uiux/LineIconLight";
import UnionLightLeftIcon from "../../../assets/svg/services/uiux/UnionLightLeftIcon";
import UnionLightRightIcon from "../../../assets/svg/services/uiux/UnionLightRightIcon";
import React from "react";
import BrushIconLight from "../../../assets/svg/services/uiux/brush.svg";
import UnionTabletLeftLight from "../../../assets/svg/services/uiux/UnionTabletLeftLight";
import UnionDesktopLeftLight from "../../../assets/svg/services/uiux/UnionDesktopLeftLight";
import UnionTabletRightLight from "../../../assets/svg/services/uiux/UnionTabletRightLight";
import UnionDesktopRightLight from "../../../assets/svg/services/uiux/UnionDesktopRightLight";
const HeaderSignatureDesktopIcon = React.lazy(() =>
  import("../../../assets/svg/services/uiux/HeaderSignatureDesktopIcon")
);
const HeaderSignatureMobileIcon = React.lazy(() =>
  import("../../../assets/svg/services/uiux/HeaderSignature")
);
const HeaderSignatureTabletIcon = React.lazy(() =>
  import("../../../assets/svg/services/uiux/HeaderSignatureTabletIcon")
);

const SubHeader = () => {
  const main = "uiux__subheader";

  return (
    <section className={main}>
      <div>
        <UnionDesktopLeftLight />

        <UnionTabletLeftLight />
        <UnionTabletLeftLight />
        {/* <UnionLightLeftIcon /> */}
      </div>
      <div>
        <section>
          <span>All Ideas Need a blueprint</span>
          <div className={main + "--svg"}>
            <LineIconLight />
          </div>
          <div className={main + "--svg"}>
            <img src={BrushIconLight} alt="" />
          </div>
        </section>
        {/* <div id={main + "--text"}> */}

        {/* </div> */}
      </div>
      <div>
        <UnionDesktopRightLight />

        <UnionTabletRightLight />
        <UnionTabletRightLight />
        {/* <UnionLightRightIcon /> */}
      </div>
    </section>
  );
};

export default SubHeader;
