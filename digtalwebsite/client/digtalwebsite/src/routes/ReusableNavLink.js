import React from "react";
import { NavLink } from "react-router-dom";

export default function ActiveNavLink({ to, text }) {
  return (
    // <NavLink style={x}

    <NavLink
      // className={"nav--link"}
      className={({ isActive }) => (isActive ? "nav--link--active" : "main-nav-item")}
      to={to}
    >
      {text}
    </NavLink>
  );
}
