import React from "react";
import ReactTelInput from "react-telephone-input";
import "react-telephone-input/css/default.css";
import "./css/TelephoneComponentCss.css";
import flags from "./images/flags.png";

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
  const validTextColor = rs.getPropertyValue("--validated-text");

  if (errorState) {
           root.style.setProperty("--normal-border", errorBorder);
           root.style.setProperty("--default-text", errorTextColor);
  } else if (success) {
    root.style.setProperty("--normal-border", validBorder);
           root.style.setProperty("--default-text", "");
    
  }  else {
    root.style.setProperty("--normal-border", "");
     }
        

  // Use declaratively within another react components render method
  // var ReactTelInput = require("react-telephone-input");
  // var ReactTelInput = require('react-telephone-input/lib/withStyles'), if you need the styles
  return (
    <>
      <ReactTelInput
        defaultCountry="cm"
        flagsImagePath={flags}
        onChange={handleInputChange}
        classNames="tel--default"
        {...field}
       
        helperText={errorText}
      />
    </>
  );
}
