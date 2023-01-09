import { Grid, Typography } from "@mui/material";
import { StyledEngineProvider } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import logoMobile from "../../assets/images/logo2.png";
import FooterLink from "../../components/reusables/FooterLink";
import { policy, icons, enterprise, services } from "./footer_config";
import KeepItIcon from "../../assets/svg/KeepItIcon";
import Telephone from "../../assets/svg/Telephone";
import Location from "../../assets/svg/Location";
import Envelop from "../../assets/svg/Envelop";

export default function Footer({ language, location }) {
  const { t } = useTranslation("pageend");
  // console.log(window.location.pathname.includes("contact"));

  return (
    <>
      <StyledEngineProvider injectFirst>
        <div
          className="footer"
        >
          {!location && (
            <>
              <Grid item className="footer-help">
                <Typography component={"span"}>{t("help")}</Typography>

                <button type="button">{t("contact")}</button>
              </Grid>
              <Grid item className="footer-contact">
                <div className="pair">
                  <Telephone color={"red"} />
                  <div className="double-numbers">
                    <span
                      onClick={() =>
                        (window.location.href = "tel:+375292771265")
                      }
                    >
                      +237 671 234 567
                    </span>
                    <span> | </span>
                    <span
                      onClick={() =>
                        (window.location.href = "tel:+375292771265")
                      }
                    >
                      +237 671 234 567
                    </span>
                  </div>
                </div>
                <div className="pair">
                  <div
                    className="mail"
                    onClick={() =>
                      (window.location.href = "mailto:hunchofrank@gmail.com")
                    }
                  >
                    <Envelop />
                  </div>
                  <div className="double-numbers">
                    <span
                      onClick={() =>
                        (window.location.href = "mailto:hunchofrank@gmail.com")
                      }
                    >
                      contact@digtal.com
                    </span>
                    <span> | </span>
                    <span
                      onClick={() =>
                        (window.location.href = "mailto:hunchofrank@gmail.com")
                      }
                    >
                      contact@digtal.com
                    </span>
                  </div>
                </div>
                <div className="pair">
                  <div className="icon">
                    <Location />
                  </div>
                  <div className="double-numbers">
                    <span>Buea, CM</span>
                    <span> | </span>
                    <span>Castrop, DE</span>
                  </div>
                  {/* <div>
              <span>Buea, CM</span>
              <span> | </span>
              <span>Castrop, DE</span>

              </div> */}
                </div>
              </Grid>
            </>
          )}

          <Grid item className="footer-subscribe">
            <Grid item className="footer-subscribe-text">
              <Typography className="footer-subscribe-text-typ">
                {t("subscribe")}
              </Typography>
            </Grid>
            <Grid item className="footer-subscribe-item">
              <Grid item>
                <input
                  type="text"
                  id="subscribe-input"
                  placeholder={t("placeholder")}
                />
              </Grid>
              <Grid item>
                <button
                  type="button"
                  className="footer-subscribe-item-button"
                  variant="contained"
                >
                  {t("subs-button")}
                </button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className="footer-body">
            <Grid item className="footer-body-nav">
              <img src={logoMobile} alt="Digtal Logo" />
              <KeepItIcon />
            </Grid>
            <Grid item className="footer-body-items">
              <div className="enterprise">
                <span className="heading">Enterprise</span>
                <div className="links">
                  {enterprise.map(link => (
                    <FooterLink
                      key={link.label}
                      to={language + link.route}
                      text={t(link.label)}
                      className="footer-policy-link-text-item"
                      sx={{ color: "red" }}
                    />
                  ))}
                </div>
              </div>
              <div className="enterprise">
                <span className="heading">Services</span>
                <div className="links">
                  {services.map(link => (
                    <FooterLink
                      key={link.label}
                      to={language + link.route}
                      text={t(link.label)}
                      className="footer-policy-link-text-item"
                      sx={{ color: "red" }}
                    />
                  ))}
                </div>
              </div>
            </Grid>
            <Grid item className="footer-body-icons">
              {icons.map(icon => (
                <a
                  key={icon.url}
                  href={icon.url}
                  target="_blank"
                  rel=" noreferrer"
                >
                  {icon.icon}
                </a>
              ))}
            </Grid>
          </Grid>
          <Grid item className="footer-policy">
            <Grid item className="footer-policy-link-text">
              {policy.map(link => (
                <FooterLink
                  key={link.label}
                  to={language + link.route}
                  text={t(link.label)}
                  className="footer-policy-link-text-item"
                  sx={{ color: "red" }}
                />
              ))}
            </Grid>
            <Typography component={"span"}>
              © {new Date().getFullYear()} DIGTAL {t("rights")}
            </Typography>
          </Grid>
        </div>
      </StyledEngineProvider>
    </>
  );
}
