import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Masthead.module.scss";

const Masthead = () => {
  return (
    <div className={styles.mastheadContainer}>
      <div className={styles.masthead}>
        <h2>Want to sell out presale FAST?</h2>
        <br />

        <h3>Buy PinkSale.finance Trending from the Pinksale Pros!</h3>
      </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.mastheadImage}
          src="/pinksale-trending-banner.png"
          height={500}
          width={500}
          alt="Chart example"
        />
      </div>
    </div>
  );
};
export default Masthead;
