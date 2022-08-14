import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
} from "@mui/material";
import picture from "../src/images/image.png";
import pictureSM from "../src/images/image2.png";
import SendIcon from "@mui/icons-material/Send";
import { LoadingButton } from "@mui/lab";
import Modaly from "./Modal";
import { purple } from "@mui/material/colors";
import CustomTextField from "./CustomTextFiels";
import CustomImage from "./CustomImage";
import { useState } from "react";
import Telephone from "./Telephone";


export default function ValidationTextFields() {
  //the hook for the form
  const [contact, setcontact] = useState((contact) => ({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
    phone: "none",
  }));
  function handleForm(e) {
    e.preventDefault();
    // const contactdata = JSON.stringify(contact)
    const getToken = async () => {
      fetch("http://127.0.0.1:8000/api/content/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: contact.first_name,
          last_name: contact.last_name,
          email: contact.email,
          phone_number: contact.phone,
          subject: contact.subject,
          message: contact.message,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getToken();
  }
  //media queries
  const matchesSM = useMediaQuery("(max-width:900px)");
  const cmd = useMediaQuery("(min-width:900px)");
  const cxs = useMediaQuery("(max-width:599px)");
  const matchesMDAndAbove = useMediaQuery("(min-width:901px)");

  //select option state handler
  const [age, setAge] = React.useState("");
  const [error, setError] = React.useState(false);

  //setting border color to error
  let root = document.documentElement;
  var rs = getComputedStyle(root);
  const errorBorder = rs.getPropertyValue("--error-border");
  const errorTextColor = rs.getPropertyValue("--error-text");
  // root.style.setProperty("--normal-border", errorBorder);
  root.style.setProperty("--default-text", errorTextColor);


  //closing modal
  // if(error) window.onclick = () => console.log("er",error);
  if (error)
    window.onclick = () =>
      setTimeout(() => {
        setError(false);
      }, 1000);

  //handle change for subject field
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  //loading state
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(!loading);
    setError(error ? false : true);
    // setTimeout(() => {
    //   setError(false);
    // }, 3000);
    console.log("errr: ", error);
  }

  return (
    <Grid
      container
      component="form"
      alignItems={"center"}
      justifyContent="center"
      direction="row"
      pl={{ xs: 1 }}
      pr={{ xs: 1 }}
      sx={{
        "& .MuiTextField-root": { mt: 5 },
        padding: "1rem",
        // width:"100vw"
      }}
      noValidate
      autoComplete="off"
    >
      <Grid item container pl={{ xs: 1, sm: 4 }}>
        <Grid item container>
          <Typography variant="h3" gutterBottom component="div">
            Contact Us
          </Typography>
        </Grid>
        <Grid item container pl={1}>
          <Typography variant="subtitle1" gutterBottom component="div">
            Our love of God
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        rowSpacing={{ sm: -10, md: 0 }}
        xs={12}
        sm={5}
        pl={{ xs: 1, sm: 4 }}
        pr={{ xs: 1, sm: 4 }}
        md={6}
        container
        sx={{
          //   borderRadius: 1,

          padding: { xs: "8px" },
        }}
        alignItems="center"
        justifyContent={"center"}
      >
        <Grid
          item
          container
          xs={12}
          // spacing={{ xs: 0, md: 5 }}
          spacing={cxs ? 0 : cmd ? 5 : ""}
        >
          <Grid item xs={12} sm={12} md={6} sx={{ borderRadius: 1 }}>
            <CustomTextField label="Firt Name" />
          </Grid>

          <Grid item xs={12} sm={12} md={6} sx={{ borderRadius: 1 }}>
            <CustomTextField label="Last Name" />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ borderRadius: 1 }}>
          <CustomTextField label="Email Address" />
        </Grid>

        <Grid
          item
          xs={12}
          mt={4}
          md={12}
          sx={{
            borderRadius: 1,
            // border: "1px solid black",
            minWidth: { m: 1, xs: 190, sm: 200, md: 320 },
          }}
        >
          <Grid item container>
            <Typography
              variant="subtitle1"
              gutterBottom
              component="div"
              sx={{ fontSize: "300" }}
            >
              Tel:{" "}
              <em style={{ color: "#cacaca" }}>
                select country and enter phone number
              </em>
            </Typography>
          </Grid>
          <Telephone />
          <FormHelperText id="component-helper-text" sx={{paddingLeft:"16px"}} error>
            Some important helper text
          </FormHelperText>

          {/* <CustomTextField label="Telephone" />
           */}
        </Grid>
        <Grid
          item
          xs={12}
          mt={4}
          // sm={12}
          // md={6}
          sx={{
            borderRadius: 1,
          }}
        >
          <FormControl
            variant="filled"
            error
            sx={{
              m: 1,
              ml: 0,
              minWidth: { m: 1, xs: 190, sm: 200, md: 320 },

              // minWidth: 120
            }}
          >
            <InputLabel
              color="secondary"
              id="demo-simple-select-helper-label"
              required
            >
              Subject
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Subject"
              color="secondary"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Web Development"}>Web Development</MenuItem>
              <MenuItem value={"Digital Marketing"}>Digital Marketing</MenuItem>
              <MenuItem value={"Consulting"}>Consulting</MenuItem>
            </Select>
            <FormHelperText id="component-helper-text" >
              Some important helper text
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} sx={{ borderRadius: 1 }}>
          <CustomTextField label={"Message"} multiline rows={4} />
        </Grid>
        <Grid item container mt={5}>
          <Modaly opener={error} />

          <Button
            onClick={handleClick}
            fullWidth
            size="large"
            variant="contained"
            sx={{
              backgroundColor: purple[400],
              transition: "all ease 0.0.5s",
              "&:hover": { backgroundColor: purple[500] },
            }}
          >
            Send
          </Button>

          {/* if loadx render this !! remember */}
          {/* <LoadingButton
            onClick={handleClick}
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="secondary"
            fullWidth
            size="large"
          >
            {loading ? "An Error Occured" : "Send"}
          </LoadingButton> */}
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ display: { xs: "none", sm: "block" } }}
        item
        md={6}
        sm={7}
      >
        {/* conditional rendering images based on breakpoints */}
        {matchesSM && <CustomImage image={pictureSM} />}

        {matchesMDAndAbove && <CustomImage image={picture} />}
      </Grid>
    </Grid>
  );
}
