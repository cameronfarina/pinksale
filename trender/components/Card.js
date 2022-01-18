import React from "react";
import SectionHeading from "./Headings";

import styles from "../styles/Cards.module.scss";

const Card = () => {
  return (
    <div id="pricing">
      <SectionHeading text="PRICING" />

      <div className={styles.row}>
        <div className={styles.card}>
          <h3>RANKING</h3>
          <hr />
          <p>Top 1 - 12</p>
          <p>Top 1 - 12</p>
          <p>Top 1 - 12</p>
        </div>
        <div className={styles.card}>
          <h3>PRICE</h3>
          <hr />
          <p className={styles.price}>$700</p>
          <p className={styles.price}>$1800</p>
          <p className={styles.price}>$4000</p>
        </div>
        <div className={styles.card}>
          <h3>DISCOUNT</h3>
          <hr />
          <p className={styles.discount}>$0</p>
          <p className={styles.discount}>$300</p>
          <p className={styles.discount}>$900</p>
        </div>
        <div className={styles.card}>
          <h3>DURATION</h3>
          <hr />
          <p>24 hours</p>
          <p>72 hours</p>
          <p>168 hours</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
