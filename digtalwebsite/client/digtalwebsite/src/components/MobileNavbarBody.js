import { ExpandMoreOutlined } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";
import Search from "../assets/svg/Search";
import ActiveNavLink from "../routes/ReusableNavLink";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import { flagItems, navbarItems, selectClosed, selectDropdownItems } from "./config/navbar_config";
import { icons } from "./config/footer_config";
import { useTranslation } from "react-i18next";

const MobileNavbarBody = ({ language, showMobileMenu, toggleMobileSelect, mobileSelectState, switchLanguage }) => {
  const { t } = useTranslation(["navbar", "form", "pageend"]);

  return (
    <Grid item container className="main-nav-sub--mobile-body" sx={{ display: !showMobileMenu ? "none !important" : "grid" }}>
      <div className="mobile-body--section search">
        <div>
          <Search />
        </div>
      </div>
      <div className="mobile-body--section menu">
        <div className="menu-sub">
          {navbarItems.slice(0, 2).map((item, index) => (
            <Grid item key={index} className="mobile-nav-bar-item" gridRow={selectClosed[index + 1]}>
              <ActiveNavLink to={language + item.route} text={t(item.index)} />
            </Grid>
          ))}

          <Grid item>
            <span onClick={toggleMobileSelect}>{t("services")}</span>
            {!mobileSelectState ? (
              <ExpandMoreOutlined onClick={toggleMobileSelect} sx={{ fontSize: 24, marginTop: "-5px" }} className="select-item-sub-arrow" />
            ) : (
              <ExpandLessOutlinedIcon onClick={toggleMobileSelect} sx={{ fontSize: 24, marginTop: "-5px" }} className="select-item-sub-arrow" />
            )}
            <div style={{ display: !mobileSelectState ? "none" : "block" }}>
              {selectDropdownItems.map((item) => (
                <Grid item className="mobile-nav-bar-item" key={item.textIndex}>
                  <ActiveNavLink to={language + item.route} text={t(item.textIndex, { ns: "form" })} />
                </Grid>
              ))}
            </div>
          </Grid>

          {navbarItems.slice(2, 4).map((item, index) => (
            <Grid item key={index} className="mobile-nav-bar-item" gridRow={selectClosed[index + 1]}>
              <ActiveNavLink to={language + item.route} text={t(item.index)} />
            </Grid>
          ))}

          <Grid sx={{ width: "fit-content" }} className="language-item" gridRow={selectClosed[3]}>
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
