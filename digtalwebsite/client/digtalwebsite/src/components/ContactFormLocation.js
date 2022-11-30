import { Grid, Typography } from "@mui/material";
import React from "react";
import contactOffice from "../assets/images/contact-our-office.png";
import { location } from "./config/contact_config";
import ContactFormSubLocation from "./ContactFormSubLocation";
import CustomImage from "./ReusableImage";


const ContactFormLocation = () => {
  return (
    <Grid
      container
      item
      xs={12}
      sm={5}
      mb={12}
      pl={{ xs: 1, sm: 4, md: 5 }}
      pr={{ xs: 1, sm: 4, md: 5 }}
      md={5}
      sx={{
        padding: { xs: "8px" },
      }}
      alignItems="center"
      justifyContent={"center"}
      className="contact-getintouch"
    >
      <Grid item container>
        <Typography variant="h2" component={"h2"}>
          Get in touch with Us
        </Typography>
        <Typography variant="body" component={"div"}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequa
        </Typography>
      </Grid>
      <Grid item container>
        <Typography variant="h3" component={"h3"}>
          Our Office
        </Typography>
        <CustomImage alt="Snapshot of Office" image={contactOffice} />
        <Typography variant="body" component={"div"}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequa
        </Typography>
        <Grid item container direction={"row"}>
       {location.map(loc => <ContactFormSubLocation {...loc} key={loc.town}/>)}
      </Grid>
      </Grid>
     
    </Grid>
  );
};

export default ContactFormLocation;
