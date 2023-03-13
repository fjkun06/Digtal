import React from "react";
import { NavLink } from "react-router-dom";

export default function FooterLink({ to, text, inactive=false }) {
  return (
    // <NavLink style={x}
    <>
      {inactive ? (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href={null} className="footer__link">
         {text}
        </a>
      ) : (
        <NavLink to={to} className={"footer__link"}>
          {text}
        </NavLink>
      )}
    </>
  );
}
