import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FormHelperText, Grid } from "@mui/material";
import { purple } from "@mui/material/colors";
import MuiPhoneNumber from "material-ui-phone-number";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import schema from "../schemas/yupSchema";
import { contactFields } from "./config/contact_config";
import ContactFormOptions from "./ContactFormOptions";
import CustomTextField from "./ReusableTextField";

export default function ContactFormFields({ t, cxs, cmd }) {
  //select option state handler
  const [subjectValidation, setSubjectValidation] = React.useState(false);

  //handle change for subject field
  const handleChange = (value) => {
    console.log(value);
  };

  //React hook form validation with yupSchema
  const {
    handleSubmit,
    setValue,
    getValues,
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
  return (
    <Grid
      item
      rowSpacing={{ sm: -10, md: -10 }}
      xs={12}
      sm={5}
      pl={{ xs: 1, sm: 4, md: 5 }}
      pr={{ xs: 1, sm: 4, md: 5 }}
      md={5}
      container
      sx={{
        padding: { xs: "8px" },
      }}
      alignItems="center"
      justifyContent={"center"}
      className="contact-form"
    >
      <ContactFormOptions setSubject={setValue} getSubject={getValues} valid={isValid} sendSubjectState={setSubjectValidation} />

      <Grid item container xs={12} spacing={cxs ? 0 : cmd ? 2 : ""} rowSpacing={-1}>
        {contactFields.map((cf) => (
          <Grid item xs={12} sm={12} md={cf.md} sx={{ borderRadius: 1 }} key={cf.label}>
            <Controller
              render={({ field, formState, fieldState: { isDirty, invalid } }) => (
                <>
                  <CustomTextField
                    label={t(cf.label)}
                    errorState={!!formState.errors[cf.index]}
                    errorText={t(formState.errors[cf.index]?.message, {
                      ns: "formerror",
                    })}
                    field={field}
                    success={isDirty & !invalid}
                  />
                </>
              )}
              name={cf.index}
              control={control}
            />
          </Grid>
        ))}
      </Grid>

      <Grid
        item
        xs={12}
        mt={2}
        md={12}
        sx={{
          borderRadius: 1,
        }}
      >
        <Controller
          render={({ field, formState, fieldState: { isDirty, invalid } }) => (
            <>
              <MuiPhoneNumber
                defaultCountry={"cm"}
                className="contact-textfield-telephone contact-textfield "
                enableLongNumbers
                dropdownClass=""
                fullWidth
                hiddenLabel
                variant="outlined"
                error={!!formState.errors?.phone}
                focused={isDirty & !invalid ? true : undefined}
                {...field}
                color={isDirty & !invalid ? "success" : "secondary"}
                label={!isDirty & !invalid ? t("phone.tel") : null}
              />
              <FormHelperText id="component-helper-text" sx={{ paddingLeft: "14px", fontSize: "1.2rem" }} error={!!formState.errors?.phone}>
                {t(formState.errors.phone?.message, { ns: "formerror" })}
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
        mt={2}
        sx={{
          borderRadius: 1,
        }}
      ></Grid>
      <Grid item xs={12} sx={{ borderRadius: 1 }}>
        <Controller
          render={({ field, formState, fieldState: { isDirty, invalid } }) => (
            <CustomTextField
              label={t("message")}
              multiline
              rows={4}
              errorState={!!formState.errors?.message}
              errorText={t(formState.errors.message?.message, { ns: "formerror" })}
              field={field}
              success={isDirty & !invalid}
            />
          )}
          name={"message"}
          control={control}
        />
      </Grid>

      <Grid item container mt={5} mb={4}>
        
        <Button
          onClick={handleSubmit((data) => console.log("onSubmit", data))}
          fullWidth
          className="contact-submitbutton"
          size="large"
          variant="contained"
          type="submit"
          disableFocusRipple
          disableRipple
          // sx={{
          //   backgroundColor: purple[400],
          //   transition: "all ease 0.0.5s",
          //   "&:hover": { backgroundColor: purple[500] },
          // }}
          disabled={!(isValid && subjectValidation)}
        >
          {t("button")}
        </Button>
      </Grid>
    </Grid>
  );
}
