import { Box } from '@mui/system';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import languageSwitcher from '../i18n/languageSwitcher';
import anglais from "../assets/images/uk64.png";
import france from "../assets/images/fr64.png";
import german from "../assets/images/de64.png";

export default function LanguageDropdown({ setLanguage,setRegion,location,language,classes }) {
  const navigate = useNavigate();
    
  
    
  return  <Box className={classes}>
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
}
