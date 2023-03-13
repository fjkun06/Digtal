import { NavLink } from "react-router-dom";

export function ActiveNavLink({ to, text, toggleMobile }) {
  function nan() {}
  return (
    <NavLink 
      className={({ isActive }) =>
        isActive ? "navbar__link--active" : "navbar__link"
        // isActive ? "nav--link--active" : "main-nav-item"
      }
      to={to}
      onClick={() => toggleMobile(false) ?? nan}
    >
      {text}
    </NavLink>
  );
}
export default function MobileActiveNavLink({ to, text, toggleMobile }) {
  function nan() {}
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "navbar__link__mobile--active" : "navbar__link__mobile"
      }
      to={to}
      onClick={() => toggleMobile(false) ?? nan}
    >
      {text}
    </NavLink>
  );
}
