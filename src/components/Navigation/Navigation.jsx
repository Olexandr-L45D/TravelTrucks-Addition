import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const newLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={newLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={newLinkClass}>
          View Now
        </NavLink>
      </nav>
    </header>
  );
}

// Navigation (типу хедера з навігацією)
