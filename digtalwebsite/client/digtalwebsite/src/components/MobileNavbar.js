import React from 'react'

export default function MobileNavbar() {
    return <>
     {/* handburger menu */}
            <Grid
              item
              sx={{
                backgroundColor: "transparent",
                height: "7rem",
                justifyContent: "end",
                zIndex: 99,
                position: "relative",
                // border: '1px solid red'
              }}
              display={{ xs: "grid", bs: "none" }}
              xs={9}
              pr={4}
              pt={1}
            >
              <MenuRoundedIcon
                sx={{
                  fontSize: "4rem",
                  "&:hover": { cursor: "pointer" },
                  // display: 'none'
                }}
                className="mobile-navbar-menu"
                onClick={() => {
                  Array.from(mobileNavbarReveal)[0].style.display = "grid";
                  Array.from(mobileCross)[0].style.display = "block";
                  Array.from(mobileMenu)[0].style.display = "none";
                }}
              />

              <CloseTwoToneIcon
                sx={{
                  fontSize: "4rem",
                  color: "white",
                  "&:hover": { cursor: "pointer" },
                  display: "none",
                }}
                className="mobile-navbar-cross"
                onClick={() => {
                  setTimeout(() => {
                    Array.from(mobileNavbarReveal)[0].style.display = "none";
                    Array.from(mobileCross)[0].style.display = "none";
                    Array.from(mobileMenu)[0].style.display = "block";
                  }, 50);
                }}
              />

              <Grid className="mobile-nav-bar mobile-navbar-reveal">
                <Grid item className="mobile-nav-bar-item">
                  <MobileActiveNavLink
                    to={language + "/home"}
                    text={t("home")}
                  />
                </Grid>
                <Grid item className="mobile-nav-bar-item">
                  <MobileActiveNavLink
                    to={language + "/enterprise"}
                    text={t("enterprise")}
                  />
                </Grid>
                <Grid
                  item
                  className="mobile-nav-bar-item"
                  onClick={() => {
                    if (
                      Array.from(mobileServicesDropdown)[0].style.display ===
                        "block" &&
                      Array.from(mobileSpecial)[0].style.display === "block"
                    ) {
                      Array.from(mobileServicesDropdown)[0].style.display =
                        "none";
                      Array.from(mobileSpecial)[0].style.display = "none";
                    } else {
                      Array.from(mobileServicesDropdown)[0].style.display =
                        "block";
                      Array.from(mobileSpecial)[0].style.display = "block";
                    }
                  }}
                >
                  <MobileActiveNavLink
                    to={language + "/services/"}
                    text={t("services")}
                  />
                  <ExpandMoreOutlined
                    sx={{ fontSize: 24 }}
                    className="select-item-sub-arrow"
                    // onMouseEnter={() => {
                    //    Array.from(mobileSpecial)[0].style.display = 'block';
                    //    Array.from(mobileServicesDropdown)[0].style.display = 'block';
                    // }}
                  />
                </Grid>
                <Grid item className="mobile-nav-bar-item special-navbar-item">
                  {/* <MobileActiveNavLink to={language + '/contact'} text={t('contact')} /> */}
                  <Box className="select-item-sub mobile-services-dropdown">
                    {/* <Box display={'none'}> */}
                    <Box className="select-item-sub-container">
                      {/* <Typography variant="h5" className="select-item-dropdown-text"></Typography> */}
                      <NavLink
                        to={language + "/services/web-development"}
                        className="select-item-dropdown-text"
                      >
                        {" "}
                        {/* Web Development */}
                        {t("subject.op2", { ns: "form" })}
                      </NavLink>
                    </Box>
                    <Box className="select-item-sub-container">
                      {/* <Typography variant="h5" className="select-item-dropdown-text">
                  Digital Marketing
               </Typography> */}
                      <NavLink
                        to={language + "/services/digital-marketing"}
                        className="select-item-dropdown-text"
                      >
                        {" "}
                        {t("subject.op3", { ns: "form" })}
                      </NavLink>
                    </Box>
                    <Box className="select-item-sub-container">
                      {/* <Typography variant="h5" className="select-item-dropdown-text"> */}
                      {/* <Typography variant="h6" className="select-item-dropdown-text" fontFamily={['Roboto', 'Helvetica Neue', 'Helvetica']}> */}
                      {/* Consulting */}
                      {/* </Typography> */}
                      <NavLink
                        to={language + "/services/consulting"}
                        className="select-item-dropdown-text"
                      >
                        {" "}
                        {t("subject.op4", { ns: "form" })}
                      </NavLink>
                    </Box>
                  </Box>
                </Grid>
                <Grid item className="mobile-nav-bar-item">
                  <MobileActiveNavLink
                    to={language + "/contact"}
                    text={t("contact")}
                  />
                </Grid>
                <Grid
                  item
                  className="mobile-nav-bar-item"
                  onClick={() => {
                    if (
                      Array.from(specialLanguage)[0].style.display === "grid"
                    ) {
                      Array.from(specialLanguage)[0].style.display = "none";
                    } else {
                      Array.from(specialLanguage)[0].style.display = "grid";
                    }
                  }}
                >
                  <img
                    src={region}
                    alt="france-flag"
                    className="language-image"
                  />
                  <ExpandMoreOutlined
                    // fontSize={40}
                    sx={{ fontSize: 24 }}
                    className="lselect-item-sub-arrow"
                    // onMouseEnter={() => (Array.from(dropdown)[0].style.display = 'grid')}
                  />
                </Grid>
                <Grid item className="mobile-nav-bar-item special-language">
                  <Box className="language-dropdown">
                    {/* <Box display={'none'}> */}
                    <Box
                      className="language-dropdown-item"
                      onClick={function () {
                        if (language === "/en") {
                          console.log("en already");
                        } else {
                          setLanguage("/en");
                          setRegion(anglais);
                          setTimeout(() => navigate("/en/home"), 300);
                          languageSwitcher("/en");
                          console.log(
                            "lang: ",
                            location,
                            "mang: ",
                            location.pathname
                          );
                        }
                      }}
                    >
                      <img
                        src={anglais}
                        alt="britain-flag"
                        className="language-image"
                      />
                    </Box>
                    <Box
                      className="language-dropdown-item"
                      onClick={function () {
                        if (language === "/fr") {
                          console.log("fr already");
                        } else {
                          setLanguage("/fr");
                          setRegion(france);
                          setTimeout(() => navigate("/fr/home"), 300);
                          languageSwitcher("/fr");
                          console.log("lang: ", language);
                        }
                      }}
                    >
                      <img
                        src={france}
                        alt="france-flag"
                        className="language-image"
                      />
                    </Box>
                    <Box
                      className="language-dropdown-item"
                      onClick={function () {
                        if (language === "/de") {
                          console.log("de already");
                        } else {
                          setLanguage("/de");
                          setRegion(german);
                          setTimeout(() => navigate("/de/home"), 300);
                          languageSwitcher("/de");
                          console.log("lang: ", language);
                        }
                      }}
                    >
                      <img
                        src={german}
                        alt="german-flag"
                        className="language-image"
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
    </>
}
