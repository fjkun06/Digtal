import React from 'react'

export default function CustomImage({image}) {
  return (
    <img
      src={image}
      alt="pima"
      loading="lazy"
      objectfit="cover"
      height={{ sm: "auto" }}
      width={{ sm: "100px" }}
    />
  );
}
