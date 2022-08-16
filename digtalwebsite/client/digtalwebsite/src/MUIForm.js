import * as React from "react";
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
import { LoadingButton } from "@mui/lab";
import Modaly from "./Modal";
import { purple } from "@mui/material/colors";
import CustomTextField from "./CustomTextFiels";
import CustomImage from "./CustomImage";
import { useState } from "react";
import Telephone from "./Telephone";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schemas/yupSchema";

export default function ValidationTextFields() {
  //the hook for the form
  const [contact, setContact] = useState({});
  // const [contact, setContact] = useState((contact) => ({
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  //   phone: "none",
  // }));
  // function handleForm(e) {
  //   e.preventDefault();
  //   // const contactdata = JSON.stringify(contact)
  //   const getToken = async () => {
  //     fetch("http://127.0.0.1:8000/api/content/contact/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         first_name: contact.first_name,
  //         last_name: contact.last_name,
  //         email: contact.email,
  //         phone_number: contact.phone,
  //         subject: contact.subject,
  //         message: contact.message,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   };
  //   getToken();
  // }
  //media queries
  const matchesSM = useMediaQuery("(max-width:900px)");
  const cmd = useMediaQuery("(min-width:900px)");
  const cxs = useMediaQuery("(max-width:599px)");
  const matchesMDAndAbove = useMediaQuery("(min-width:901px)");

  //select option state handler
  const [age, setAge] = React.useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

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
  function handleClick() {
    setLoading(true);
    // setError(error ? false : true);
  }

  //React hook form validation with yupSchema
  const {
    handleSubmit,
    formState: { isValid },
    control,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      subject: "",
      message: "",
      phone: "",
    },
  });

  const onSubmit = (data) => {
    console.log("onSubmit", data);

    setContact(data);
  };

  return (
    <Grid
      container
      component="form"
      id="form1"
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
      onSubmit={handleSubmit(onSubmit)}
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
            <Controller
              render={({
                field,
                formState,
                fieldState: { isDirty, invalid },
              }) => (
                <CustomTextField
                  label="First Name"
                  // name="first_name"
                  errorState={!!formState.errors?.first_name}
                  errorText={formState.errors.first_name?.message}
                  field={field}
                  success={isDirty & !invalid}
                />
              )}
              name={"first_name"}
              control={control}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6} sx={{ borderRadius: 1 }}>
            <Controller
              render={({
                field,
                formState,
                fieldState: { isDirty, invalid },
              }) => (
                <CustomTextField
                  label="Last Name"
                  // name="last_name"
                  errorState={!!formState.errors?.last_name}
                  errorText={formState.errors.last_name?.message}
                  field={field}
                  success={isDirty & !invalid}
                />
              )}
              name={"last_name"}
              control={control}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ borderRadius: 1 }}>
          <Controller
            render={({
              field,
              formState,
              fieldState: { isDirty, invalid },
            }) => (
              <CustomTextField
                label="Email"
                // name="email"
                errorState={!!formState.errors?.email}
                errorText={formState.errors.email?.message}
                field={field}
                success={isDirty & !invalid}
              />
            )}
            name={"email"}
            control={control}
          />
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
          <Controller
            render={({
              field,
              formState,
              fieldState: { isDirty, invalid },
            }) => (
              <>
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
                <Telephone
                  errorState={!!formState.errors?.phone}
                  errorText={formState.errors.phone?.message}
                  field={field}
                  success={isDirty & !invalid}
                />
                <FormHelperText
                  id="component-helper-text"
                  sx={{ paddingLeft: "16px" }}
                  error={!!formState.errors?.phone}
                >
                  {formState.errors.phone?.message}
                </FormHelperText>
              </>
            )}
            name={"phone"}
            control={control}
          />
        </Grid>
        <Grid
          item
          xs={12}
          mt={4}
          sx={{
            borderRadius: 1,
          }}
        >
          <Controller
            render={({
              field,
              formState,
              fieldState: { isDirty, invalid },
            }) => (
              <>
                <FormControl
                  variant="filled"
                  error={!!formState.errors?.subject}
                  sx={{
                    m: 1,
                    ml: 0,
                    minWidth: { m: 1, xs: 190, sm: 200, md: 320 },
                  }}
                >
                  <InputLabel
                    color={isDirty & !invalid ? "success" : "secondary"}
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
                    color={isDirty & !invalid ? "success" : "secondary"}
                    onChange={handleChange}
                    error={!!formState.errors?.subject}
                    {...field}
                  >
                    <MenuItem value={"   "}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Web Development"}>
                      Web Development
                    </MenuItem>
                    <MenuItem value={"Digital Marketing"}>
                      Digital Marketing
                    </MenuItem>
                    <MenuItem value={"Consulting"}>Consulting</MenuItem>
                  </Select>
                  <FormHelperText id="component-helper-text">
                    {formState.errors.subject?.message}
                  </FormHelperText>
                </FormControl>
              </>
            )}
            name={"subject"}
            control={control}
          />
        </Grid>
        <Grid item xs={12} sx={{ borderRadius: 1 }}>
          <Controller
            render={({
              field,
              formState,
              fieldState: { isDirty, invalid },
            }) => (
              <CustomTextField
                label="Message"
                multiline
                rows={4}
                // name="first_name"
                errorState={!!formState.errors?.message}
                errorText={formState.errors.message?.message}
                field={field}
                success={isDirty & !invalid}
              />
            )}
            name={"message"}
            control={control}
          />
        </Grid>
        <Grid item container mt={5}>
          <Modaly opener={error} />

          <Button
            onClick={handleClick}
            fullWidth
            // endIcon={<SendIcon />}
            size="large"
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: purple[400],
              transition: "all ease 0.0.5s",
              "&:hover": { backgroundColor: purple[500] },
            }}
            disabled={!isValid}
          >
            Send
          </Button>

          {/* if loadx render this !! remember */}
          {/* <LoadingButton
            loading={loading}
            // variant="secondary"
            fullWidth
            onClick={handleClick}
            loadingPosition="center"
            size="large"
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: purple[400],
              transition: "all ease 0.0.5s",
              "&:hover": { backgroundColor: purple[500] },
            }}
            disabled={!isValid}
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