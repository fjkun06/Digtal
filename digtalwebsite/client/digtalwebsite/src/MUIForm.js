import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
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

export default function ValidationTextFields() {
  //media queries
  const matchesSM = useMediaQuery("(max-width:900px)");
  const matchesMDAndAbove = useMediaQuery("(min-width:901px)");

  //select option state handler
  const [age, setAge] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  //loading state
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(!loading);
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 3000);
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
        <Grid item container xs={12} spacing={{ xs: 0, md: 5 }}>
          <Grid item xs={12} sm={12} md={6} sx={{ borderRadius: 1 }}>
            <TextField
              //   error
              id="filled-error"
              label="First Name"
              color="success"
              defaultValue=""
              // variant="filled"
              size="medium"
              //   helperText="Madhauss."
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6} sx={{ borderRadius: 1 }}>
            <TextField
              //   error
              id="filled-error"
              label="Last Name"
              color="success"
              defaultValue=""
              // variant="filled"
              size="medium"
              //   helperText="Madhauss."
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ borderRadius: 1 }}>
          <TextField
            //   error
            fullWidth
            id="filled-error"
            label="Email Address"
            color="success"
            defaultValue=""
            // variant="filled"
            size="medium"
            // helperText="Madhauss."
          />
        </Grid>

        <Grid item xs={12} sx={{ borderRadius: 1 }} mt={5}>
          {/* <TextField
            //   error
            fullWidth
            id="filled-error"
            label="Subject (Service)"
            color="success"
            defaultValue=""
            // variant="filled"
            size="medium"
            // helperText="Madhauss."
          /> */}
          <FormControl
            variant="filled"
            sx={{
              minWidth: { xs: 190, sm: 200, md: 320 },
              border: "1px solid gray",
              borderRadius: "2px",
            }}
          >
            <InputLabel id="demo-simple-select-filled-label">
              Subject
            </InputLabel>
            <Select
              color="success"
              variant="standard"
              width={100}
              size="large"
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Web Development</MenuItem>
              <MenuItem value={20}>Digital Marketing</MenuItem>
              <MenuItem value={30}>Consulting</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sx={{ borderRadius: 1 }}>
          <TextField
            //   error
            fullWidth
            id="filled-error"
            label="Message"
            color="success"
            defaultValue=""
            // variant="filled"
            size="medium"
            multiline
            rows={4}
            // helperText="Madhauss."
          />
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
        {matchesSM && (
          <img
            src={pictureSM}
            alt="pima"
            loading="lazy"
            objectfit="cover"
            height={{ sm: "auto" }}
            width={{ sm: "100px" }}
          />
        )}

        {matchesMDAndAbove && (
          <img
            src={picture}
            alt="pima"
            loading="lazy"
            objectfit="cover"
            height={{ sm: "auto" }}
            width={{ sm: "100px" }}
          />
        )}
      </Grid>

      {/* <div>
        <TextField
          error
          id="standard-error"
          label="Error"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="standard"
        />
      </div> */}
    </Grid>
  );
}
