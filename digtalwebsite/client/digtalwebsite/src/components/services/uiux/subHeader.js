import React from "react";

//SVG files
import LineIconMobileLight from "../../../assets/svg/services/uiux/lineml.svg";
import LineIconTabletLight from "../../../assets/svg/services/uiux/linetl.svg";
import LineIconDesktopLight from "../../../assets/svg/services/uiux/linedl.svg";
import BrushIconMobile from "../../../assets/svg/services/uiux/brushm.svg";
import BrushIconTablet from "../../../assets/svg/services/uiux/brusht.svg";
import BrushIconDesktop from "../../../assets/svg/services/uiux/brushd.svg";
import { nano } from "src/App";

//SVG Components
const UnionLightLeftIcon = React.lazy(() =>
  import("../../../assets/svg/services/uiux/UnionLightLeftIcon")
);
const UnionLightRightIcon = React.lazy(() =>
  import("../../../assets/svg/services/uiux/UnionLightRightIcon")
);
const UnionTabletLeftLight = React.lazy(() =>
  import("../../../assets/svg/services/uiux/UnionTabletLeftLight")
);
const UnionDesktopLeftLight = React.lazy(() =>
  import("../../../assets/svg/services/uiux/UnionDesktopLeftLight")
);
const UnionTabletRightLight = React.lazy(() =>
  import("../../../assets/svg/services/uiux/UnionTabletRightLight")
);
const UnionDesktopRightLight = React.lazy(() =>
  import("../../../assets/svg/services/uiux/UnionDesktopRightLight")
);

const SubHeader = () => {
  const main = "uiux__subheader";
  const lines = [
    LineIconMobileLight,
    LineIconTabletLight,
    LineIconDesktopLight
  ];
  const brushes = [BrushIconMobile, BrushIconTablet, BrushIconDesktop];

  return (
    <section className={main}>
      <div>
        <UnionLightLeftIcon />
        <UnionTabletLeftLight />
        <UnionDesktopLeftLight />
      </div>
      <div>
        <section>
          <span>All Ideas Need a blueprint</span>
          <div className={main + "--svg"}>
            {lines.map(line => (
              <img src={line} alt="curly_line" key={nano()} />
            ))}
          </div>
          <div className={main + "--svg"}>
            {brushes.map(brush => (
              <img src={brush} alt="brush" key={nano()} />
            ))}
          </div>
        </section>
      </div>
      <div>
        <UnionLightRightIcon />
        <UnionTabletRightLight />
        <UnionDesktopRightLight />
      </div>
    </section>
  );
};

export default SubHeader;
