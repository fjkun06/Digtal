import { Grid } from "@mui/material";
import contactOffice from "src/assets/images/contact-our-office.png";
import React from "react";
import { useTranslation } from "react-i18next";

import ContactFormFields from "src/components/contact/ContactFormFields";
import CustomImage from "src/components/reusables/ReusableImage";
import { location } from "src/components/contact/contact_config";
import ContactFormSubLocation from "src/components/contact/ContactFormSubLocation";

export default function Contact() {
  const { t } = useTranslation(["form", "formerror"]);
  const [toggleModalDisplay, setModalDisplay] = React.useState(false);
  function modalOn() {
    setModalDisplay(true);
    console.log("modal mode: ", toggleModalDisplay);
  }

  return (
    <Grid container component="form" id="form1" noValidate autoComplete="off">
      {/* <ContactModal disp={toggleModalDisplay} /> */}
      <Grid container item className="getintouch">
        <h2>
          <mark>{t("contact-section.getintouch")}</mark>
        </h2>
        <div>
          <mark>{t("contact-section.text")}</mark>
        </div>
      </Grid>
      <Grid container item className="office">
        <span>
          <mark>{t("contact-section.office")}</mark>
        </span>
        <CustomImage
          alt="Snapshot of Office"
          image={contactOffice}
          id="office-pic"
        />
        <div className="office-body">
          <span>
            <mark>{t("contact-section.visit")}</mark>
          </span>
          <div className="office-body-location">
            {location.map(loc => (
              <ContactFormSubLocation {...loc} key={loc.town} />
            ))}
          </div>
        </div>
      </Grid>
      <ContactFormFields t={t} modal={modalOn} />
    </Grid>
  );
}
