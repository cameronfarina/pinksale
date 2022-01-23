import React from "react";
import Image from "next/image";
import styles from "../styles/Navigation.module.scss";

const Navigation = () => {
  return (
    <div className="bg-white text-darkgrey h-20 sm:h-24 flex items-center border-b border-solid border-divider px-4">
      <div className={styles.navigationContainer}>
        <div className={styles.logo}>
          <Image src="/pinksale-pros.png" width="100" height="50" />
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
