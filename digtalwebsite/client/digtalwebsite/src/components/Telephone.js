import { StyledEngineProvider } from "@mui/system";
import React from "react";
import ReactTelInput from "react-telephone-input";
import "react-telephone-input/css/default.css";
import flags from "../assets/images/flags.png";
import '../css/TelephoneComponentCss.css'

export default function Telephone({ errorState, field, errorText,success }) {
  function handleInputChange(telNumber, selectedCountry) {
    console.log(
      "input changed. number: ",
      telNumber,
      "selected country: ",
      selectedCountry
    );
  }

  //setting border color to error
  let root = document.documentElement;
  var rs = getComputedStyle(root);
  const errorBorder = rs.getPropertyValue("--error-border");
  const validBorder = rs.getPropertyValue("--validated-border");
  const errorTextColor = rs.getPropertyValue("--error-text");
  // const validTextColor = rs.getPropertyValue("--validated-text");

  if (errorState) {
           root.style.setProperty("--normal-border", errorBorder);
           root.style.setProperty("--default-text", errorTextColor);
  } else if (success) {
    root.style.setProperty("--normal-border", validBorder);
           root.style.setProperty("--default-text", "");
    
  }  else {
    root.style.setProperty("--normal-border", "");
     }
        


  return (
    <>
      <StyledEngineProvider injectFirst>

      <ReactTelInput
        defaultCountry="cm"
        flagsImagePath={flags}
        onChange={handleInputChange}
        classNames="tel--default"
        {...field}
       
        helperText={errorText}
      />
      </StyledEngineProvider>
    </>
  );
}
