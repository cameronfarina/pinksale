import React from "react";
import SectionHeading from "./Headings";

import styles from "../styles/Cards.module.scss";

const Card = () => {
  return (
    <div id="pricing">
      <SectionHeading text="PRICING" />

      <div className={styles.row}>
        <div className={styles.card}>
          <h3>PLANS</h3>
          <hr />
          <p>Starter</p>
          <p>Intermediate</p>
          <p>Expert</p>
        </div>
        <div className={styles.card}>
          <h3>PRICE</h3>
          <hr />
          <p className={styles.price}>$500</p>
          <p className={styles.price}>$800</p>
          <p className={styles.price}>$1500</p>
        </div>
        <div className={styles.card}>
          <h3>SERVICE</h3>
          <hr />
          <p>Trending Within 1 Hour</p>
          <p>Follow Ups for 48 Hours</p>
          <p>Support for Entire Presale</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
