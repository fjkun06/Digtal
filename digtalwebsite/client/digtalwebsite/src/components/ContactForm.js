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
import picture from "../assets/images/image.png";
import pictureSM from "../assets/images/image2.png";
import { purple } from "@mui/material/colors";
import CustomTextField from "./ReusableTextField";
import CustomImage from "./ReusableImage";
import { useState } from "react";
import Telephone from "./Telephone";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from 'react-i18next';

import schema from "../schemas/yupSchema";

export default function Contact() {
   //the hook for the form
   const [contact, setContact] = useState({});

   //   //media queries
   const matchesSM = useMediaQuery('(max-width:900px)');
   const cmd = useMediaQuery('(min-width:900px)');
   const cxs = useMediaQuery('(max-width:599px)');
   const matchesMDAndAbove = useMediaQuery('(min-width:901px)');

   //   //setting up language translator
      const { t, i18n, ready } = useTranslation(['form', 'formerror']);

   //select option state handler
   const [age, setAge] = React.useState('');
   const [loading, setLoading] = React.useState(false);

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
      control
   } = useForm({
      resolver: yupResolver(schema),
      mode: 'onChange',
      defaultValues: {
         first_name: '',
         last_name: '',
         email: '',
         subject: '',
         message: '',
         phone: ''
      }
   });

   const onSubmit = (data) => {
      console.log('onSubmit', data);

      setContact(data);
   };

   return (
      <Grid
         container
         component="form"
         id="form1"
         alignItems={'center'}
         justifyContent="center"
         direction="row"
         pl={{ xs: 1 }}
         pr={{ xs: 1 }}
         sx={{
            '& .MuiTextField-root': { mt: 5 },
            padding: '1rem'
            // width:"100vw"
         }}
         noValidate
         autoComplete="off"
         //   onSubmit={handleSubmit(onSubmit)}
      >
         <Grid item container pl={{ xs: 1, sm: 4 }}>
            <Grid item container>
               <Typography variant="h3" gutterBottom component="div">
                  {/* Contact Us */}
                  {t('contact-section.contact')}
               </Typography>
            </Grid>
            <Grid item container pl={1}>
               <Typography variant="subtitle1" gutterBottom component="div">
                  {t('contact-section.our')}
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

               padding: { xs: '8px' }
            }}
            alignItems="center"
            justifyContent={'center'}>
            <Grid
               item
               container
               xs={12}
               // spacing={{ xs: 0, md: 5 }}
               spacing={cxs ? 0 : cmd ? 5 : ''}>
               <Grid item xs={12} sm={12} md={6} sx={{ borderRadius: 1 }}>
                  <Controller
                     render={({ field, formState, fieldState: { isDirty, invalid } }) => (
                        <CustomTextField
                           label={t('name.first')}
                           // name="first_name"
                           errorState={!!formState.errors?.first_name}
                           errorText={t(formState.errors.first_name?.message, { ns: 'formerror' })}
                           field={field}
                           success={isDirty & !invalid}
                        />
                     )}
                     name={'first_name'}
                     control={control}
                  />
               </Grid>

               <Grid item xs={12} sm={12} md={6} sx={{ borderRadius: 1 }}>
                  <Controller
                     render={({ field, formState, fieldState: { isDirty, invalid } }) => (
                        <>
                           <CustomTextField
                              label={t('name.last')}
                              // name="last_name"
                              errorState={!!formState.errors?.last_name}
                              //   errorText={formState.errors.last_name?.message}
                              errorText={t(formState.errors.last_name?.message, {
                                 ns: 'formerror'
                              })}
                              field={field}
                              success={isDirty & !invalid}
                           />
                        </>
                     )}
                     name={'last_name'}
                     control={control}
                  />
               </Grid>
            </Grid>
            <Grid item xs={12} sx={{ borderRadius: 1 }}>
               <Controller
                  render={({ field, formState, fieldState: { isDirty, invalid } }) => (
                     <CustomTextField
                        label={t('email')}
                        // name="email"
                        errorState={!!formState.errors?.email}
                        //   errorText={formState.errors.email?.message}
                        errorText={t(formState.errors.email?.message, { ns: 'formerror' })}
                        field={field}
                        success={isDirty & !invalid}
                     />
                  )}
                  name={'email'}
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
                  minWidth: { m: 1, xs: 190, sm: 200, md: 320 }
               }}>
               <Controller
                  render={({ field, formState, fieldState: { isDirty, invalid } }) => (
                     <>
                        <Grid item container>
                           <Typography
                              variant="subtitle1"
                              gutterBottom
                              component="div"
                              sx={{ fontSize: '300' }}>
                              {t('phone.tel')}{' '}
                              <em style={{ color: '#cacaca' }}>{t('phone.sel')}</em>
                           </Typography>
                        </Grid>
                        <Telephone
                           errorState={!!formState.errors?.phone}
                           field={field}
                           success={isDirty & !invalid}
                        />
                        <FormHelperText
                           id="component-helper-text"
                           sx={{ paddingLeft: '14px', fontSize: '0.9rem' }}
                           error={!!formState.errors?.phone}>
                           {t(formState.errors.phone?.message, { ns: 'formerror' })}
                        </FormHelperText>
                     </>
                  )}
                  name={'phone'}
                  control={control}
               />
            </Grid>
            <Grid
               item
               xs={12}
               mt={4}
               sx={{
                  borderRadius: 1
               }}>
               <Controller
                  render={({ field, formState, fieldState: { isDirty, invalid } }) => (
                     <>
                        <FormControl
                           variant="filled"
                           error={!!formState.errors?.subject}
                           sx={{
                              m: 1,
                              ml: 0,
                              minWidth: { m: 1, xs: 190, sm: 200, md: 320 }
                           }}>
                           <InputLabel
                              color={isDirty & !invalid ? 'success' : 'secondary'}
                              id="demo-simple-select-helper-label"
                              required>
                              {t('subject.label')}
                           </InputLabel>
                           <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              value={age}
                              label={t('subject.label')}
                              color={isDirty & !invalid ? 'success' : 'secondary'}
                              onChange={handleChange}
                              error={!!formState.errors?.subject}
                              {...field}>
                              <MenuItem value={'other'}>
                                 <em>{t('subject.op1')}</em>
                              </MenuItem>
                              <MenuItem value={t('subject.op2')}>{t('subject.op2')}</MenuItem>
                              <MenuItem value={t('subject.op3')}>{t('subject.op3')}</MenuItem>
                              <MenuItem value={t('subject.op4')}>{t('subject.op4')}</MenuItem>
                           </Select>
                           <FormHelperText id="component-helper-text" sx={{ fontSize: '0.9rem' }}>
                              {/* {formState.errors.subject?.message} */}
                              {t(formState.errors.subject?.message, { ns: 'formerror' })}
                           </FormHelperText>
                        </FormControl>
                     </>
                  )}
                  name={'subject'}
                  control={control}
               />
            </Grid>
            <Grid item xs={12} sx={{ borderRadius: 1 }}>
               <Controller
                  render={({ field, formState, fieldState: { isDirty, invalid } }) => (
                     <CustomTextField
                        label={t('message')}
                        multiline
                        rows={4}
                        errorState={!!formState.errors?.message}
                        //   errorText={formState.errors.message?.message}
                        errorText={t(formState.errors.message?.message, { ns: 'formerror' })}
                        field={field}
                        success={isDirty & !invalid}
                     />
                  )}
                  name={'message'}
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
                     transition: 'all ease 0.0.5s',
                     '&:hover': { backgroundColor: purple[500] }
                  }}
                  disabled={!isValid}>
                  {t('button')}
               </Button>
            </Grid>
         </Grid>
         <Grid container sx={{ display: { xs: 'none', sm: 'block' } }} item md={6} sm={7}>
            {/* conditional rendering images based on breakpoints */}
            {matchesSM && <CustomImage image={pictureSM} />}

            {matchesMDAndAbove && <CustomImage image={picture} />}
         </Grid>
      </Grid>
   );
}

