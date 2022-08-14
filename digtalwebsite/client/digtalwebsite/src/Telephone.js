import React from 'react'
import ReactTelInput from 'react-telephone-input';
import "react-telephone-input/css/default.css";
import './css/TelephoneComponentCss.css'
import flags from "./images/flags.png";

export default function Telephone() {
  function handleInputChange(telNumber, selectedCountry) {
    console.log(
      "input changed. number: ",
      telNumber,
      "selected country: ",
      selectedCountry
    );
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
        //   onBlur={handleInputBlur}
      />
    </>
  );
}
