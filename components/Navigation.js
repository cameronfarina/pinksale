import React from "react";
import styles from "../styles/Navigation.module.scss";

const Navigation = () => {
  return (
    <div className="bg-white text-darkgrey h-20 sm:h-24 flex items-center border-b border-solid border-divider mb-12 px-4">
      <div className={styles.navigationContainer}>
        <div>
          <p className={styles.logo}>PINKSALE PROS</p>
        </div>
        <div className="flex">
          <div className={styles.navButton}>
            <a href="#info">INFO</a>
          </div>
          <div className={styles.navButton}>
            <a href="#pricing">PRICES</a>
          </div>
          <div className={styles.navButton}>
            <a href="#contact">CONTACT</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
