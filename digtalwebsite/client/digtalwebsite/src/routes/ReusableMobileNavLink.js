import React from "react";
import { NavLink } from "react-router-dom";

export default function MobileActiveNavLink({ to, text }) {
  return (
    // <NavLink style={x}
    <NavLink
      // className={"nav--link"}
      // className={({ isActive }) => (isActive ? "foote" : "")}
      // className={({ isActive }) => (isActive ? "footer-link--active" : "")}

      style={isActive => ({
        color: isActive ? "green" : "blue"
      })}
      
      to={to}
    >
      {text}
    </NavLink>
  );
}
