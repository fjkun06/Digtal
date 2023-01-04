import { ExpandMoreOutlined } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";
import search from "../../assets/svg/magnifier.svg";
import ActiveNavLink, { MobileActiveNavLink } from "../reusables/ReusableNavLink";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import { flagItems, navbarItems, selectDropdownItems } from "../../layouts/navbar/navbar_config";
import { icons } from "../../layouts/footer/footer_config";
import { useTranslation } from "react-i18next";

const MobileNavbarBody = ({ language, showMobileMenu, toggleMobileSelect, mobileSelectState, switchLanguage,setShowMobileMenu }) => {
  const { t } = useTranslation(["navbar", "form", "pageend"]);

  return (
    <Grid item container className="main-nav-sub--mobile-body" sx={{ display: !showMobileMenu ? "none !important" : "grid" }}>
      <div className="mobile-body--section search" id="desktop-search">
        <div>
          <img src={search} alt={"Search"}  />

        </div>
      </div>
      <div className="mobile-body--section menu">
        <div className="menu-sub">
          {navbarItems.slice(0, 2).map((item, index) => (
            <Grid item key={index} id={item.id}>
              <MobileActiveNavLink to={language + item.route} text={t(item.index)} toggleMobile={setShowMobileMenu}/>
            </Grid>
          ))}

          <Grid item>
            <span onClick={toggleMobileSelect} id="services">{t("services")}</span>
            {!mobileSelectState ? (
              <ExpandMoreOutlined onClick={toggleMobileSelect} sx={{ fontSize: 24, marginTop: "-5px" }} className="select-item-sub-arrow" />
            ) : (
              <ExpandLessOutlinedIcon onClick={toggleMobileSelect} sx={{ fontSize: 24, marginTop: "-5px" }} className="select-item-sub-arrow" />
            )}
            <div style={{ display: !mobileSelectState ? "none" : "block" }}>
              {selectDropdownItems.map((item) => (
                <Grid item key={item.textIndex}>
                  <MobileActiveNavLink to={language + item.route} text={t(item.textIndex, { ns: "form" })} toggleMobile={setShowMobileMenu}/>
                </Grid>
              ))}
            </div>
          </Grid>

          {navbarItems.slice(2, 4).map((item, index) => (
            <Grid item key={index}id={item.id}>
              <MobileActiveNavLink to={language + item.route} text={t(item.index)} toggleMobile={setShowMobileMenu}/>
            </Grid>
          ))}

          <Grid sx={{ width: "fit-content" }} className="language-item" id="flags">
            {flagItems.map((flag) => (
              <div key={flag.id}>
                <img src={flag.src} alt={flag.alt} name={flag.route} route={flag.route} id={flag.id} className="mobile-select--flag" onClick={() => switchLanguage(flag.route)} />
              </div>
            ))}
          </Grid>
        </div>
      </div>
      <div className="mobile-body--section icons">
        <div>
          {icons.map((icon) => (
            <a key={icon.url} href={icon.url} target="_blank" rel=" noreferrer">
              {icon.icon}
            </a>
          ))}
        </div>

        <div>
          © {new Date().getFullYear()} DIGTAL {t("rights", { ns: "pageend" })}
        </div>
      </div>
    </Grid>
  );
};

export default MobileNavbarBody;
