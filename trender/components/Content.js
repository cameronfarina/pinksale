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
            <br /> Promote and elevate your BEP20 (BSC) project on PinkSale's
            top #12 trending list. We are the best provider to get PinkSale
            trending traffic, and for one of the most affordable prices in the
            industry.
            <br />
            <br />
            Our high quality trending service will elevate your project on
            PinkSale by getting you listed and right to the top of the trending
            list.
            <br />
            <br />
            <strong>
              Deposit for PinkSale trending packages is 100% of the total price:
            </strong>
            <br />
            Please make sure to confirm with @Alex on Telegram on the set time
            of your service delivery prior to order if your order is time
            sensitive.
            <br />
            <br />
            <strong>Do you have any questions before ordering?:</strong>
            <br /> Feel free to contact our Sales & PR specialist on Telegram
            @Alex. He will always be in touch with you and your team. If you
            want to keep updated of our services, feel free to also join our
            Telegram channel @RankedUpServices.
            <br />
            <br />
            <strong>Available payment methods:</strong>
            <br />
            We only accept payments via cryptocurrencies (ERC-20 or BEP-20)
            equivalent worth in US dollars. Send us a message on Telegram to get
            started!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
