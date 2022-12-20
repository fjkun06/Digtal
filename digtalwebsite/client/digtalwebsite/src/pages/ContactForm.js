import { Grid, Typography, useMediaQuery } from "@mui/material";
import { useForm } from "react-hook-form";
import contactOffice from "../assets/images/contact-our-office.png";

import { useTranslation } from "react-i18next";

import ContactFormFields from "./../components/contact/ContactFormFields";
import CustomImage from "./../components/reusables/ReusableImage";
import { location } from "./../components/contact/contact_config";
import ContactFormSubLocation from "./../components/contact/ContactFormSubLocation";

export default function Contact() {
  const cmd = useMediaQuery("(min-width:900px)");
  const cxs = useMediaQuery("(max-width:599px)");
  const { t } = useTranslation(["form", "formerror"]);
  const { handleSubmit } = useForm();

  return (
    <Grid
      container
      component="form"
      id="form1"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(data => console.log(data))}
    >
      <Grid container item className="getintouch">
        <Typography variant="h2" component={"h2"}>
          Get in touch with Us
        </Typography>
        <Typography variant="body" component={"div"}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequa
        </Typography>
      </Grid>
      <Grid container item className="office">
        <span>Our Office</span>
        <CustomImage alt="Snapshot of Office" image={contactOffice} />
        <div className="office-body">
          <Typography variant="body" component={"span"}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit
          </Typography>
          <div className="office-body-location">
            {location.map(loc => (
              <ContactFormSubLocation {...loc} key={loc.town} />
            ))}
          </div>
        </div>
      </Grid>
      <ContactFormFields t={t} cxs={cxs} cmd={cmd} />
    </Grid>
  );
}
