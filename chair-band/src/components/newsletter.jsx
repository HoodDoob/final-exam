import styles from "../styles/newsletter.module.scss";
import { useRef, useState } from "react";
import Image from "next/image";
import arrow from "../../public/icons/icon_arrow.svg";
import { sendNewsletter } from "./database";

export default function Newsletter(props) {
  const [confirmation, setConfirmation] = useState(false);
  const newsletter = useRef(null);

  function handleSubmit(e) {
    setConfirmation(true);
    e.preventDefault();
    // setEmail(newsletter.current.elements.newsemail.value);
    prepareData();
  }
  function prepareData() {
    // console.log(email);
    sendNewsletter({
      email: newsletter.current.elements.newsemail.value,
    });
    // setConfirmation(true);
    // run();
  }

  return (
    <div>
      {!confirmation ? (
        <form
          className={styles.newsletter}
          ref={newsletter}
          onSubmit={handleSubmit}
        >
          <div>
            <h4>
              Don't miss out on <br></br> <span> Chair </span> drama.
            </h4>
          </div>
          <p className={styles.p}>Subscribe to our newsletter</p>
          <div className={styles.inputCont}>
            <input
              className={styles.input}
              type="email"
              name="newsemail"
              id="form-newsEmail"
              placeholder="Your email..."
            />
            <button>
              <Image priority src={arrow} alt="FB" />
            </button>
          </div>
        </form>
      ) : (
        <div className={styles.confirmationCont}>
          <div>
            <h3>Thank you for subscribing.</h3>
            <h2>All the drama is coming your way now.</h2>
          </div>
        </div>
      )}
    </div>
  );
}
