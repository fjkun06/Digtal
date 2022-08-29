import React from "react";

export default function CustomImage({ image, alt, classes }) {
  return <img src={image} alt={alt} className={classes ?? ""} />;
}
