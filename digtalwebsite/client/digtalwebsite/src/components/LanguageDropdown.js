import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import languageSwitcher from "../i18n/languageSwitcher";
import anglais from "../assets/images/uk64.png";
import france from "../assets/images/fr64.png";
import german from "../assets/images/de64.png";

export default function LanguageDropdown({
  setLanguage,
  setRegion,
  location,
  language,
  classes,
}) {
  const navigate = useNavigate();
  const dropdownItems = [
    { route: "/en", src: anglais },
    { route: "/fr", src: france },
    { route: "/de", src: german },
  ];

  return (
    <Box className={classes}>
      {dropdownItems.map((item) => (
        <Box
          className="language-dropdown-item"
          key={item.route}
          onClick={function () {
            if (language === item.route) {
              console.log(item.route + " already");
            } else {
              setLanguage(item.route);
              setRegion(anglais);
              setTimeout(() => navigate(item.route + "/home"), 300);
              languageSwitcher(item.route);
              console.log("lang: ", location, "mang: ", location.pathname);
            }
          }}
        >
          <img src={item.src} alt="britain-flag" className="language-image" />
        </Box>
      ))}
    </Box>
  );
}
