import React from "react";
import mapIcon from "../../assets/svg/map-pin.svg";
import telIcon from "../../assets/svg/telephone.svg";

const ContactFormSubLocation = ({ country, town, street, tel }) => {
  return (
    <div className="office-body-location--item">
      <h4>
        <mark>{country}</mark>
      </h4>
      <div>
        <div className="icon-text icon-top">
          <img src={mapIcon} alt="svg" />
          <h5>
            <mark>{town}</mark>
          </h5>
        </div>

        <div className="address icon-right">
          <h5>
            <mark>{street}</mark>
          </h5>
          {/* <br/> */}
        </div>
      </div>
      <div className="icon-text icon-bottom">
        <img src={telIcon} alt="tel" />
        <h5>
          <mark>{tel}</mark>
        </h5>
      </div>
    </div>
  );
};

export default ContactFormSubLocation;
