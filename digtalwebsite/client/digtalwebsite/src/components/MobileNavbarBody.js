import { ExpandMoreOutlined } from '@mui/icons-material'
import { Grid } from '@mui/material'
import React from 'react'
import Search from '../assets/svg/Search'
import ActiveNavLink from '../routes/ReusableNavLink'
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import { dropdownItems, selectClosed } from './config/navbar_config'
import { icons } from "./config/footer_config";



const MobileNavbarBody = ({language,showMobileMenu,toggleMobileSelect,mobileSelectState,t,switchLanguage}) => {

  
  return (
    <Grid item container className="main-nav-sub--mobile-body" sx={{ display: !showMobileMenu ? "none !important" : "grid" }}>
    <div className="mobile-body--section search">
      <div>
        <Search />
      </div>
    </div>
    <div className="mobile-body--section menu">
      <div className="menu-sub">
        <Grid item>
          <ActiveNavLink to={language + "/"} text={t("home")} />
        </Grid>
        <Grid item>
          <ActiveNavLink to={language + "/enterprise"} text={t("enterprise")} />
        </Grid>

        <Grid item>
          <span onClick={toggleMobileSelect}>{t("services")}</span>
          {!mobileSelectState ? (
            <ExpandMoreOutlined onClick={toggleMobileSelect} sx={{ fontSize: 24, marginTop: "-5px" }} className="select-item-sub-arrow" />
          ) : (
            <ExpandLessOutlinedIcon onClick={toggleMobileSelect} sx={{ fontSize: 24, marginTop: "-5px" }} className="select-item-sub-arrow" />
          )}
          <div style={{ display: !mobileSelectState ? "none" : "block" }}>
            <Grid item className="mobile-nav-bar-item">
              <ActiveNavLink to={language + "/software-development"} text={t("subject.op2", { ns: "form" })} />
            </Grid>
            <Grid item className="mobile-nav-bar-item">
              <ActiveNavLink to={language + "/digital-marketing"} text={t("subject.op3", { ns: "form" })} />
            </Grid>
            <Grid item className="mobile-nav-bar-item">
              <ActiveNavLink to={language + "/consulting"} text={t("subject.op4", { ns: "form" })} />
            </Grid>
            <Grid item className="mobile-nav-bar-item">
              <ActiveNavLink to={language + "/ui-ux-design"} text={t("subject.op1", { ns: "form" })} />
            </Grid>
          </div>
        </Grid>
        <Grid item className="mobile-nav-bar-item" gridRow={selectClosed[1]}>
          <ActiveNavLink to={language + "/about-us"} text={t("about")} />
        </Grid>
        <Grid item className="mobile-nav-bar-item" gridRow={selectClosed[2]}>
          <ActiveNavLink to={language + "/contact-us"} text={t("contact")} />
        </Grid>

        <Grid sx={{ width: "fit-content" }} className="language-item" gridRow={selectClosed[3]}>
          {dropdownItems.map((flag) => (
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
  )
}

export default MobileNavbarBody
