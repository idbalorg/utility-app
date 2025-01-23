import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>© {year} Idris. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
