import React from "react";
import { NavLink } from "react-router-dom";

export default function MobileActiveNavLink({ to, text }) {
  return (
    // <NavLink style={x}
    <NavLink
      // className={"nav--link"}
      className={({ isActive }) => (isActive ? "mobile-nav--link--active mobile-nav-bar-item-link" : "mobile-nav-bar-item-link")}
      to={to}
    >
      {text}
    </NavLink>
  );
}
