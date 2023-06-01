import styles from "../styles/newsletter.module.scss";
import { useRef } from "react";
import Image from "next/image";
import arrow from "../../public/icons/icon_arrow.svg";

export default function Newsletter(props) {
  const newsletter = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    props.setEmail(newsletter.current.elements.newsemail.value);
    props.prepareData();
  }

  return (
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
  );
}
