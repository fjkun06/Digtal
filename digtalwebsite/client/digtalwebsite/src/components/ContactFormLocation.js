import { Grid, Typography } from "@mui/material";
import React from "react";
import contactOffice from "../assets/images/contact-our-office.png";
import CustomImage from "./ReusableImage";
import mapIcon from "../assets/svg/map-pin.svg";
import telIcon from "../assets/svg/telephone.svg";

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
      </Grid>
      <Grid item container direction={"row"}>
        <Grid item container md={6}>
          <Typography variant="h4" component={"h4"} className="contact-getintouch-country">
            Germany
          </Typography>
          <Grid item container direction={"row"} spacing={0}>
            <Grid item container pl={0.1} md={1.5}>
              <img src={mapIcon} alt="svg" />
            </Grid>

            <Grid
              item
              container
              pl={0}
              direction={"column"}
              md={10}
              // sx={{ border: "1px solid red" }}
            >
              <Typography variant="h5" component={"h5"}>
                Berlin, Brandenburg
              </Typography>
              <Typography variant="h5" component={"h5"}>
                Germany
              </Typography>
              <Typography variant="h5" component={"h5"}>
                Rue 1234.
              </Typography>
            </Grid>
          </Grid>
          <Grid item container direction={"row"} spacing={0} pt={3}>
            <Grid item container pl={0.1} md={1.5}>
              <img src={telIcon} alt="tel" />
            </Grid>

            <Grid
              item
              container
              direction={"column"}
              md={10}
              // sx={{ border: "1px solid red" }}
            >
              <Typography variant="h5" component={"h5"}>
                +49 1234 567 89
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          md={6}
          //  sx={{ border: "1px solid red" }}
        >
          <Typography variant="h4" component={"h4"} className="contact-getintouch-country">
            Cameroon
          </Typography>
          <Grid item container direction={"row"} spacing={0}>
            <Grid item container pl={0.1} md={1.5}>
              <img src={mapIcon} alt="svg" />
            </Grid>

            <Grid
              item
              container
              pl={0}
              direction={"column"}
              md={10}
              // sx={{ border: "1px solid red" }}
            >
              <Typography variant="h5" component={"h5"}>
                Douala, Littoral
              </Typography>
              <Typography variant="h5" component={"h5"}>
                Cameroon
              </Typography>
              <Typography variant="h5" component={"h5"}>
                Rue 1234.
              </Typography>
            </Grid>
          </Grid>
          <Grid item container direction={"row"} spacing={0} pt={3}>
            <Grid item container pl={0.1} md={1.5}>
              <img src={telIcon} alt="tel" />
            </Grid>

            <Grid
              item
              container
              direction={"column"}
              md={10}
              // sx={{ border: "1px solid red" }}
            >
              <Typography variant="h5" component={"h5"}>
                +237 1234 567 89
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactFormLocation;
