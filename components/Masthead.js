import React from "react";
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
        <iframe
          // width="853"
          // height="680"
          src={`https://www.youtube.com/embed/5VjDqmWX3wk`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  );
};
export default Masthead;
