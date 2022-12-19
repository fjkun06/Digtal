import { yupResolver } from "@hookform/resolvers/yup";
import { FormHelperText, Grid } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import schema from "../../utils/schemas/yupSchema";
import { contactFields } from "./contact_config";
import ContactFormOptions from "./ContactFormOptions";
import CustomTextField from "./ReusableTextField";

export default function ContactFormFields({ t, cxs, cmd }) {
  //select option state handler
  const [subjectValidation, setSubjectValidation] = React.useState(false);

  //handle change for subject field
  const handleChange = value => {
    console.log(value);
  };

  //React hook form validation with yupSchema
  const {
    handleSubmit,
    setValue,
    getValues,
    formState: { isValid },
    control
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      subject: "",
      message: "",
      phone: ""
    }
  });
  return (
    <Grid item className="contact-form formsection">
      <ContactFormOptions
        setSubject={setValue}
        getSubject={getValues}
        valid={isValid}
        sendSubjectState={setSubjectValidation}
      />

      {/* <Grid item className="top3"> */}
      {/* {contactFields.map((cf) => (
          <Grid item  key={cf.label}>
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
        ))} */}
      {/* </Grid> */}

      {/* <Grid item> */}
      {/* <Controller
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
        /> */}
      <div className="input">
        <label htmlFor={""}>
          <span>
            First Name <sup>*</sup>
          </span>
          <input type="text" name=" " id="oo" />
        </label>
      </div>
      <div className="input">
        <label htmlFor={""}>
          <span>
            Last Name <sup>*</sup>
          </span>
          <input type="text" name=" " id="oo" />
        </label>
      </div>
      <div className="input">
        <label htmlFor={""}>
          <span>
            Email <sup>*</sup>
          </span>
          <input type="text" name=" " id="oo" />
        </label>
      </div>
      <div className="input">
        <label htmlFor={""}>
          <span>
            Company Name
          </span>
          <input type="text" name=" " id="oo" />
        </label>
      </div>
      <div>
        <Controller
          render={({ field, formState, fieldState: { isDirty, invalid } }) => (
            <>
              <div className="tel">
                <label htmlFor={""}>
                  <span>
                    Telephone <sup>*</sup>
                  </span>
                  {/* <input type="text" name=" " id="oo" /> */}
                  <MuiPhoneNumber
                    tabIndex={"1"}
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
                    // label={!isDirty & !invalid ? t("phone.tel") : null}
                  />
                </label>
              </div>
              <FormHelperText
                id="component-helper-text"
                sx={{ paddingLeft: "14px", fontSize: "1.2rem" }}
                error={!!formState.errors?.phone}
              >
                {t(formState.errors.phone?.message, { ns: "formerror" })}
              </FormHelperText>
            </>
          )}
          name={"phone"}
          control={control}
        />
      </div>
      <div className="input message-area">
        <label htmlFor={""}>
          <span>
            Message <sup>*</sup>
          </span>
          {/* <input type="text" name=" " id="oo"/> */}
          <textarea id="oop">
          </textarea>
        </label>
      </div>
      {/* <div className="input">
        <label htmlFor={"oo"}>
          <span>
            First Name <sup>*</sup>
          </span>
          <input type="text" name=" " id="oo" />
        </label>
      </div> */}
      {/* </Grid> */}

      <Grid item container>
        <button
          onClick={handleSubmit(data => console.log("onSubmit", data))}
          fullWidth
          className="contact-submitbutton"
          size="large"
          variant="contained"
          type="submit"
          disableFocusRipple
          disableRipple
          disabled={!(isValid && subjectValidation)}
        >
          {t("button")}
        </button>
      </Grid>
    </Grid>
  );
}
