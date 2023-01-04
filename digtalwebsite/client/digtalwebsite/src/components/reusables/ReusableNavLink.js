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

export function MobileActiveNavLink({ to, text,toggleMobile }) {

  function nan(){
// console.log("nan")
  }
  return (
    // <NavLink style={x}

    <NavLink
      // className={"nav--link"}
      className={({ isActive }) => (isActive ? "nav--link--active" : "main-nav-item")}
      to={to}
      onClick={() => toggleMobile(false)?? nan}
    >
      {text}
    </NavLink>
  );
}
