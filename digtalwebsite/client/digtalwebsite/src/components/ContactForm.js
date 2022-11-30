import * as React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { useForm } from "react-hook-form";
import contactOffice from "../assets/images/contact-our-office.png";

// import { useState } from "react";
import { useTranslation } from "react-i18next";

import ContactFormFields from "./ContactFormFields";
import ContactFormLocation from "./ContactFormLocation";
import CustomImage from "./ReusableImage";
import { location } from "./config/contact_config";
import ContactFormSubLocation from "./ContactFormSubLocation";

export default function Contact() {
  //the hook for the form
  // const [contact, setContact] = useState({});

  //   //media queries
  // const matchesSM = useMediaQuery("(max-width:900px)");
  const cmd = useMediaQuery("(min-width:900px)");
  const cxs = useMediaQuery("(max-width:599px)");
  // const matchesMDAndAbove = useMediaQuery("(min-width:901px)");

  //   //setting up language translator
  const { t } = useTranslation(["form", "formerror"]);
  const { handleSubmit } = useForm();

  return (
    <Grid
      container
      component="form"
      m={4}
      ml={0}
      mt={10}
      id="form1"
      // alignItems={"center"}
      // justifyContent="center"
      // direction="row"
      pl={{ xs: 1 }}
      pr={{ xs: 1 }}
      sx={{
        "& .MuiTextField-root": { mt: 5 },
        padding: "1rem",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      {/* <ContactFormLocation /> */}
      <Grid
        container
        item
        // xs={12}
        // sm={5}
        // mb={12}
        // pl={{ xs: 1, sm: 4, md: 5 }}
        // pr={{ xs: 1, sm: 4, md: 5 }}
        // md={5}
        sx={{
          padding: { xs: "8px" },
          border: "1px solid red",
        }}
        className="contact-getintouch getintouch"
      >
        <Typography variant="h2" component={"h2"}>
          Get in touch with Us
        </Typography>
        <Typography variant="body" component={"div"}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequa
        </Typography>
      </Grid>
      <Grid
        container
        item
        // xs={12}
        // sm={5}
        // mb={12}
        // pl={{ xs: 1, sm: 4, md: 5 }}
        // pr={{ xs: 1, sm: 4, md: 5 }}
        // md={5}
        sx={{
          padding: { xs: "8px" },
          border: "1px solid red",

        }}
        className="contact-getintouch office"
      >
        <Typography variant="h4" component={"h4"}>
          Our Office
        </Typography>
        <CustomImage alt="Snapshot of Office" image={contactOffice} />
        <Typography variant="body" component={"div"}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequa
        </Typography>
        <Grid item container direction={"row"}>
          {location.map((loc) => (
            <ContactFormSubLocation {...loc} key={loc.town} />
          ))}
        </Grid>
      </Grid>
      <ContactFormFields t={t} cxs={cxs} cmd={cmd} />
    </Grid>
  );
}
