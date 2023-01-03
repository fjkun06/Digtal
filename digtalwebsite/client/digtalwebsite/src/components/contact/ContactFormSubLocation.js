import React from "react";
import mapIcon from "../../assets/svg/map-pin.svg";
import telIcon from "../../assets/svg/telephone.svg";

const ContactFormSubLocation = ({ country, town, street, tel }) => {
  return (
    <div className="office-body-location--item">
      <h4>{country}</h4>
      <div>
        <div className="icon-text icon-top">
          <img src={mapIcon} alt="svg" />
          <h5>{town}</h5>
        </div>

        <div className="address icon-right">
          {[country, street].map(i => (
            <h5 key={i}>{i}</h5>
          ))}
        </div>
      </div>
      <div className="icon-text icon-bottom">
        <img src={telIcon} alt="tel" />
        <h5>{tel}</h5>
      </div>
    </div>
  );
};

export default ContactFormSubLocation;
