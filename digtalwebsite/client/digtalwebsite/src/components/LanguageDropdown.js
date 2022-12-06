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
    { route: "/en", src: anglais,alt:"britain-flag",id:"0" },
    { route: "/fr", src: france ,alt:"france-flag",id:"1"},
    { route: "/de", src: german,alt:"germany-flag",id:"2" },
  ];

  const bordered = "flag--bordered";


  React.useEffect(() => {
    const allFlags = Array.from(document.querySelectorAll(".mobile-select--flag"));

    function testState(id) {
      return allFlags.filter((flag) => flag.classList.contains(bordered)).some((elt) => elt.id === id);
    }

    function removeBorderFromOtherElements(id) {
      allFlags.forEach((flag) => {
        if (flag.id !== id) {
          flag.classList.remove(bordered);
        } else {
          flag.classList.add(bordered);
        }
      });
    }

    allFlags.forEach((elt) => {
      elt.addEventListener("click", (e) => {
        // setIndex(Number(e.target.id));


        //hanling border
        if (testState(e.target.id)) {
        } else {
          removeBorderFromOtherElements(e.target.id);
        }

        //handling changes
        if (language === e.target.route) {
          console.log(e.target.route + " already");
        } else {
          setLanguage(e.target.route);
          setTimeout(() => window.location.reload(false), 300);
          languageSwitcher(e.target.route);
          console.log("lang: ", location, "mang: ", location.pathname);
        }
      });
    });
  });

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
              setRegion(item.src);
              setTimeout(() => navigate(item.route + "/"), 300);
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
