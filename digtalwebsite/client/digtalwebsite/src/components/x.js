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
<Grid
  item
  container
  xs={12}
  // spacing={{ xs: 0, md: 5 }}
  spacing={cxs ? 0 : cmd ? 5 : ""}
>
  <Grid item xs={12} sm={12} md={6} sx={{ borderRadius: 1 }}>
    <Controller
      render={({ field, formState, fieldState: { isDirty, invalid } }) => (
        <CustomTextField
          label={t("name.first")}
          // name="first_name"
          errorState={!!formState.errors?.first_name}
          errorText={t(formState.errors.first_name?.message, { ns: "formerror" })}
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
      render={({ field, formState, fieldState: { isDirty, invalid } }) => (
        <>
          <CustomTextField
            label={t("name.last")}
            // name="last_name"
            errorState={!!formState.errors?.last_name}
            //   errorText={formState.errors.last_name?.message}
            errorText={t(formState.errors.last_name?.message, {
              ns: "formerror",
            })}
            field={field}
            success={isDirty & !invalid}
          />
        </>
      )}
      name={"last_name"}
      control={control}
    />
  </Grid>
</Grid>
<Grid item xs={12} sx={{ borderRadius: 1 }}>
  <Controller
    render={({ field, formState, fieldState: { isDirty, invalid } }) => (
      <CustomTextField
        label={t("email")}
        // name="email"
        errorState={!!formState.errors?.email}
        //   errorText={formState.errors.email?.message}
        errorText={t(formState.errors.email?.message, { ns: "formerror" })}
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
            <MenuItem value={t("subject.op2")}>{t("subject.op2")}</MenuItem>
            <MenuItem value={t("subject.op3")}>{t("subject.op3")}</MenuItem>
            <MenuItem value={t("subject.op4")}>{t("subject.op4")}</MenuItem>
          </Select>
          <FormHelperText id="component-helper-text" sx={{ fontSize: "0.9rem" }}>
            {/* {formState.errors.subject?.message} */}
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
  <Controller
    render={({ field, formState, fieldState: { isDirty, invalid } }) => (
      <CustomTextField
        label={t("message")}
        multiline
        rows={4}
        errorState={!!formState.errors?.message}
        //   errorText={formState.errors.message?.message}
        errorText={t(formState.errors.message?.message, { ns: "formerror" })}
        field={field}
        success={isDirty & !invalid}
      />
    )}
    name={"message"}
    control={control}
  />
</Grid>
<Grid item container mt={5}>
  <Button
    onClick={handleClick}
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