import { Grid, Typography } from "@mui/material";
import { StyledEngineProvider } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import logoHalfPNG from "../../assets/images/digtal_logo@0.5x.png";
import FooterLink from "../../components/reusables/FooterLink";
import { policy, icons, enterprise, services } from "./footer_config";
import KeepItIcon from "../../assets/svg/KeepItIcon";
import Telephone from "../../assets/svg/Telephone";
import Location from "../../assets/svg/Location";
import Envelop from "../../assets/svg/Envelop";
import FooterContactLink from "src/components/reusables/FooterContactLink";

export default function Footer({ language, location }) {
  const { t } = useTranslation("pageend");
  // console.log(window.location.pathname.includes("contact"));

  return (
    <>
      <StyledEngineProvider injectFirst>
        <div className="footer">
          {!location && (
            <>
              {/* help section */}
              <Grid item className="footer-help">
                <Typography component={"span"}>{t("help")}</Typography>

                <button type="button">
                  <span
                    className="footer__link-contact footer__link"
                    style={{ color: "white", fontFamily: "Montserrat" }}
                    onClick={() =>
                      (window.location.href = language + "/contact-us")
                    }
                  >
                    {t("contact")}
                  </span>
                </button>
              </Grid>
              {/* means of contact section */}
              <Grid item className="footer-contact">
                <div className="pair">
                  <Telephone color={"red"} />
                  <div className="double-numbers">
                    <FooterContactLink text="tel:+237650906666">
                      +237 650 906 666
                    </FooterContactLink>
                    <FooterContactLink> | </FooterContactLink>
                    <FooterContactLink text="tel:+491771577232">
                      +49 1771 577 232
                    </FooterContactLink>
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
                    <FooterContactLink text="mailto:dgitald5@gmail.com">
                      dgitald5@gmail.com
                    </FooterContactLink>
                    <FooterContactLink> | </FooterContactLink>
                    <FooterContactLink text="mailto:hunchofrank@gmail.com">
                      contact@digtal.com
                    </FooterContactLink>
                  </div>
                </div>
                <div className="pair">
                  <div className="icon">
                    <Location />
                  </div>
                  <div className="double-numbers">
                    <FooterContactLink>Buea, CM</FooterContactLink>
                    <FooterContactLink> | </FooterContactLink>
                    <FooterContactLink>Castrop, DE</FooterContactLink>
                  </div>
                </div>
              </Grid>
            </>
          )}
          {/* subscribe row */}
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
              <span className="footer-subscribe-item-svg">
                <svg
                  width="86"
                  height="16"
                  id="exe"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 84 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="galaxy">
                      <stop offset="0" stopColor="rgb(0, 162, 255)">
                        <animate
                          attributeName="stop-color"
                          values="#663399;rgb(0, 162, 255);#663399;rgb(0, 162, 255);#663399;rgb(0, 162, 255);#663399;"
                          dur="15s"
                          repeatCount="indefinite"
                          begin="exe.mouseenter"
                          end="exe.mouseleave"
                        ></animate>
                      </stop>
                      <stop offset="1" stopColor="#663399">
                        <animate
                          attributeName="stop-color"
                          // values="blue;green;yellow;orange;red;purple;blue;"
                          values="#663399;rgb(0, 162, 255);#663399;rgb(0, 162, 255);#663399;rgb(0, 162, 255);#663399;"
                          dur="15s"
                          repeatCount="indefinite"
                          begin="exe.mouseenter"
                          end="exe.mouseleave"
                        ></animate>
                      </stop>
                    </linearGradient>
                  </defs>

                  <rect width="84" height="16" id="exe" />
                  <text
                    x="42"
                    y="9"
                    dominantBaseline="middle"
                    textAnchor="middle"
                  >
                    {t("subs-button")}
                  </text>
                </svg>
              </span>
            </Grid>
          </Grid>
          {/* footer body */}
          <Grid item className="footer-body">
            <Grid item className="footer-body-nav">
              <img src={logoHalfPNG} alt="Digtal Logo" />
              <KeepItIcon />
            </Grid>
            <Grid item className="footer-body-items">
              <div className="enterprise">
                <span className="heading">{t("ent")}</span>
                <div className="links">
                  {enterprise.map(link => (
                    <FooterLink
                      key={link.label}
                      to={language + link.route}
                      text={t(link.label)}
                      className="footer-policy-link-text-item"
                      sx={{ color: "red" }}
                      inactive={link.state}
                    />
                  ))}
                </div>
              </div>
              <div className="enterprise">
                <span className="heading">{t("serv")}</span>
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
          {/* footer policy section */}
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
