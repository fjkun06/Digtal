import React from "react";

export default function CustomImage({ image, alt, classes,width, height,id}) {
  return <img src={image} alt={alt} className={classes ?? ""} width={width??""} height={height??""} id={id ?? ""}/>;
}
