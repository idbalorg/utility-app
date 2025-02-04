import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to="/app/counter" className={styles.link}>
            Counter
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="/app/news-explorer" className={styles.link}>
            News
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
