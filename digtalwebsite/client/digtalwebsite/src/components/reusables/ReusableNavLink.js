import { NavLink } from "react-router-dom";

export default function MobileActiveNavLink({ to, text, toggleMobile }) {
  function nan() {}
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "nav--link--active" : "main-nav-item"
      }
      to={to}
      onClick={() => toggleMobile(false) ?? nan}
    >
      {text}
    </NavLink>
  );
}
