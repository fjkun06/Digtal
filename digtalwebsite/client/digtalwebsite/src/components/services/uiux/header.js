import React from "react";
import headerMobileLight from "../../../assets/images/services/uiux/headerML.jpg";
// import headerMobileDark from "../../../assets/images/services/uiux/headerMD.png";
// import headerMobile from "../../../assets/images/services/uiux/busmobile.png";
import headerTabletLight from "../../../assets/images/services/uiux/headerT.png";
// import headerTabletDark from "../../../assets/images/services/uiux/headerTD.png";
import headerDesktopLight from "../../../assets/images/services/uiux/headerDL.png";
// import headerDesktopDark from "../../../assets/images/services/uiux/headerDD.png";
// import headerTablet from "../../../assets/images/services/uiux/bustablet.png";
// import headerDesktop from "../../../assets/images/services/uiux/BusDesktop.png";
import { nanoid } from "nanoid";
// import HeaderSignatureDesktopIcon from "../../../assets/svg/services/uiux/HeaderSignatureDesktopIcon";
// import HeaderSignatureMobileIcon from "../../../assets/svg/services/uiux/HeaderSignature";
// import HeaderSignatureTabletIcon from "../../../assets/svg/services/uiux/HeaderSignatureTabletIcon";

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
  const SourceSet = pictures => {
    return (
      <picture>
        {pictures?.map(({ src, query, classN }, index) =>
          index > 0 ? (
            <source
              srcSet={src}
              media={query}
              key={nanoid()}
              className={`${main}--${classN}`}
            />
          ) : null
        )}
        <img src={pictures[0]} alt="MDN" />
      </picture>
    );
  };

  return (
    <section className={main}>
      {SourceSet([
        headerMobileLight,
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
            <span>/</span>
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
      {/* <img src={headerMobile} alt="MDN" /> */}
    </section>
  );
};

export default Header;
