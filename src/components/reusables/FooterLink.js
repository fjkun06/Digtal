import React from "react";
import { NavLink } from "react-router-dom";

export default function FooterLink({ to, text }) {
  return (
    // <NavLink style={x}

    <NavLink to={to}>{text}</NavLink>
  );
}
