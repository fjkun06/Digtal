import { yupResolver } from "@hookform/resolvers/yup";
import { FormHelperText, Grid } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import schema from "../../utils/schemas/yupSchema";
import { contactFields } from "./contact_config";
import ContactFormOptions from "./ContactFormOptions";
import CustomTextField from "./ReusableTextField";
import ReusableTextField from "./ReusableTextField";

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
      phone: "",
      company_name: ""
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
      {contactFields.map(cf => (
        <Controller
          key={cf.index}
          render={({
            field,
            formState,
            fieldState: { isDirty, invalid },
            value
          }) => (
            <>
              <ReusableTextField
                id={cf.label}
                sup={cf.sup}
                errorState={!!formState.errors[cf.index]}
                errorText={t(formState.errors[cf.index]?.message, {
                  ns: "formerror"
                })}
                fieldName={t(cf.label)}
                field={field}
              />
            </>
          )}
          name={cf.index}
          control={control}
        />
      ))}

      <div>
        <Controller
          render={({ field, formState, fieldState: { isDirty, invalid } }) => (
            <>
              <div className="tel">
                <label htmlFor={"phone"}>
                  <span>
                    {t("phone.tel")} <sup>*</sup>
                  </span>
                  <MuiPhoneNumber
                    tabIndex={"1"}
                    defaultCountry={"cm"}
                    className={!!formState.errors?.phone ? "error" : ""}
                    id="phone"
                    enableLongNumbers
                    fullWidth
                    variant="outlined"
                    {...field}
                  />
                </label>
              </div>
              {!!formState.errors?.phone && (
                <span id="component-helper-text">
                  {t(formState.errors.phone?.message, { ns: "formerror" })}
                </span>
              )}
            </>
          )}
          name={"phone"}
          control={control}
        />
      </div>
      <Controller
        render={({ field, formState, fieldState: { isDirty, invalid } }) => (
          <>
            <div
              className={
                !!formState.errors?.message
                  ? "input message-area problem"
                  : "input message-area"
              }
            >
              <label htmlFor={"message"}>
                <span>
                  {t("message")}
                </span>
                <textarea id="message" {...field}></textarea>
              </label>
            </div>
            {!!formState.errors?.message && (
              <span id="component-helper-text">
                {t(formState.errors.message?.message, { ns: "formerror" })}
              </span>
            )}
          </>
        )}
        name={"message"}
        control={control}
      />

      {/* <div className="input">
        <label htmlFor={"oo"}>
          <span>
            First Name <sup>*</sup>
          </span>
          <input type="text" name=" " id="oo" />
        </label>
      </div> */}
      {/* </Grid> */}

      <button
        onClick={handleSubmit(data => console.log("onSubmit", data))}
        className="contact-submitbutton"
        // disabled={true}
        disabled={!(isValid && subjectValidation)}
      >
        {t("button")}
      </button>
    </Grid>
  );
}
