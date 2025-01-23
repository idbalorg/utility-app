import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css"; // CSS module for styling
function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1>Welcome to My Utility App</h1>
      <p className={styles.description}>
        This app provides useful tools like a Counter and Quote Generator to
        keep you productive and inspired. Start exploring now!
      </p>
      <div className={styles.imageContainer}>
        <img
          src="dilivva-logo.png"
          alt="Utility App"
          className={styles.image}
        />
      </div>
      <Link to="/app" className={styles.enterAppLink}>
        Enter App
      </Link>
    </div>
  );
}

export default Home;
