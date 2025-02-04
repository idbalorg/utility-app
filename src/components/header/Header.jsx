import React from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logoContainer}>
        <img
          src="/dilivva-logo.png"
          alt="Dilivva Logo"
          className={styles.logo}
        />
      </Link>

      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink
            to="/app/counter"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Counter
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink
            to="/app/news-explorer"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            News
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
