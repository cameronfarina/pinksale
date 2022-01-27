import styles from "../styles/Content.module.scss";
import SectionHeading from "./Headings";

const Content = () => {
  return (
    <div id="info">
      <SectionHeading text="GENERAL INFO" />

      <div className={styles.mastheadContainer}>
        <div className={styles.masthead}>
          <p>
            <strong>General service introduction:</strong>
            <br /> Promote and elevate your BEP20 (BSC) project on
            PinkSale&apos;s trending list. We are the best and most affordable
            provider on the market.
            <br />
            <br />
            Our top-notch service will elevate your project on PinkSale by
            getting you listed on PinkSale trending.
            <br />
            <br />
            <strong>
              Deposit for PinkSale trending packages is 100% of the total price:
            </strong>
            <br />
            Please make sure to confirm with @lexthu on Telegram on the set time
            of your service delivery prior to order if your order is time
            sensitive.
            <br />
            <br />
            <strong>Do you have any questions before ordering?:</strong>
            <br /> Contact us on Telegram @lexthu. He will always be
            <br />
            <br />
            <strong>Available payment methods:</strong>
            <br />
            We only accept payments via cryptocurrencies (ERC-20 or BEP-20)
            equivalent worth in US dollars.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
