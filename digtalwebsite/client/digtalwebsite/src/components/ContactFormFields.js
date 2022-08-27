import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import schema from "../schemas/yupSchema";
import { contactFields } from "./config/contact_config";
import CustomTextField from "./ReusableTextField";
import Telephone from "./Telephone";

export default function ContactFormFields({ t, cxs, cmd }) {
  //select option state handler
  const [age, setAge] = React.useState("");

  //handle change for subject field
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  //React hook form validation with yupSchema
  const {
    // handleSubmit,
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
      rowSpacing={{ sm: -10, md: 0 }}
      xs={12}
      sm={5}
      pl={{ xs: 1, sm: 4 }}
      pr={{ xs: 1, sm: 4 }}
      md={6}
      container
      sx={{
        padding: { xs: "8px" },
      }}
      alignItems="center"
      justifyContent={"center"}
    >
      <Grid item container xs={12} spacing={cxs ? 0 : cmd ? 5 : ""} rowSpacing={1}>
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
        mt={4}
        md={12}
        sx={{
          borderRadius: 1,
          minWidth: { m: 1, xs: 190, sm: 200, md: 320 },
        }}
      >
        <Controller
          render={({ field, formState, fieldState: { isDirty, invalid } }) => (
            <>
              <Grid item container>
                <Typography variant="subtitle1" gutterBottom component="div" sx={{ fontSize: "300" }}>
                  {t("phone.tel")} <em style={{ color: "#cacaca" }}>{t("phone.sel")}</em>
                </Typography>
              </Grid>
              <Telephone errorState={!!formState.errors?.phone} field={field} success={isDirty & !invalid} />
              <FormHelperText id="component-helper-text" sx={{ paddingLeft: "14px", fontSize: "0.9rem" }} error={!!formState.errors?.phone}>
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
        mt={4}
        sx={{
          borderRadius: 1,
        }}
      >
        <Controller
          render={({ field, formState, fieldState: { isDirty, invalid } }) => (
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
                <InputLabel color={isDirty & !invalid ? "success" : "secondary"} id="demo-simple-select-helper-label" required>
                  {t("subject.label")}
                </InputLabel>
                <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" value={age} label={t("subject.label")} color={isDirty & !invalid ? "success" : "secondary"} onChange={handleChange} error={!!formState.errors?.subject} {...field}>
                  <MenuItem value={"other"}>
                    <em>{t("subject.op1")}</em>
                  </MenuItem>
                  {["subject.op2", "subject.op3", "subject.op4"].map((item) => (
                    <MenuItem value={t(item)} key={item}>
                      {t(item)}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText id="component-helper-text" sx={{ fontSize: "0.9rem" }}>
                  {t(formState.errors.subject?.message, { ns: "formerror" })}
                </FormHelperText>
              </FormControl>
            </>
          )}
          name={"subject"}
          control={control}
        />
      </Grid>
      <Grid item xs={12} sx={{ borderRadius: 1 }}>
        <Controller render={({ field, formState, fieldState: { isDirty, invalid } }) => <CustomTextField label={t("message")} multiline rows={4} errorState={!!formState.errors?.message} errorText={t(formState.errors.message?.message, { ns: "formerror" })} field={field} success={isDirty & !invalid} />} name={"message"} control={control} />
      </Grid>
      <Grid item container mt={5}>
        <Button
          // onClick={handleClick}
          fullWidth
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
          {t("button")}
        </Button>
      </Grid>
    </Grid>
  );
}