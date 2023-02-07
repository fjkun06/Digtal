import LineIconMobileLight from "../../../assets/svg/services/uiux/lineml.svg";
import LineIconTabletLight from "../../../assets/svg/services/uiux/linetl.svg";
import LineIconDesktopLight from "../../../assets/svg/services/uiux/linedl.svg";
import UnionLightLeftIcon from "../../../assets/svg/services/uiux/UnionLightLeftIcon";
import UnionLightRightIcon from "../../../assets/svg/services/uiux/UnionLightRightIcon";
import React from "react";
import BrushIconMobile from "../../../assets/svg/services/uiux/brushm.svg";
import BrushIconTablet from "../../../assets/svg/services/uiux/brusht.svg";
import BrushIconDesktop from "../../../assets/svg/services/uiux/brushd.svg";
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
          <img src={LineIconMobileLight} alt="" />
          <img src={LineIconTabletLight} alt="" />
          <img src={LineIconDesktopLight} alt="" />

            {/* <LineIconLight /> */}
          </div>
          <div className={main + "--svg"}>
            <img src={BrushIconMobile} alt="" />
            <img src={BrushIconTablet} alt="" />
            <img src={BrushIconDesktop} alt="" />
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
