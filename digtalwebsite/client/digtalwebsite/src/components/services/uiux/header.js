import React from "react";
import headerMobileLight from "../../../assets/images/services/uiux/headerML.jpg";
import headerTabletLight from "../../../assets/images/services/uiux/headerT.png";
import headerDesktopLight from "../../../assets/images/services/uiux/headerDL.png";

import useSourceSets from "src/hooks/useSourceSets";


const HeaderSignatureDesktopIcon = React.lazy(() =>
  import("../../../assets/svg/services/uiux/HeaderSignatureDesktopIcon")
);
const HeaderSignatureMobileIcon = React.lazy(() =>
  import("../../../assets/svg/services/uiux/HeaderSignature")
);
const HeaderSignatureTabletIcon = React.lazy(() =>
  import("../../../assets/svg/services/uiux/HeaderSignatureTabletIcon")
);

const Header = () => {
  const main = "uiux__header";

  return (
    <header className={main}>
      {useSourceSets([
        headerMobileLight,main,
        {
          src: headerTabletLight,
          query: "(480px < width <= 960px)",
          classN: "tablet"
        },
        { src: headerDesktopLight, query: "(width > 960px)", classN: "desktop" }
      ])}
      <div className={`${main}--backdrop`}></div>
      <div className={`${main}--text`}>
        <div>
          <div>
            <span>UI</span>
            <span id="slash">/</span>
            <span>UX</span>
          </div>
          <div>
            <span>DESIGN</span>
          </div>
        </div>

        <div className={`${main}--text-icons`}>
          <HeaderSignatureMobileIcon />
          <HeaderSignatureTabletIcon />
          <HeaderSignatureDesktopIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
