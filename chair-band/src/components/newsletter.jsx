import styles from "../styles/newsletter.module.scss";

export default function Newsletter() {
  <form
    className={styles.newsletter}
    ref={newsletter}
    onSubmit={(e) => {
      prepareData(e);
    }}>
    <div>
      Don't miss out on <br></br> <span> Chair </span> drama.
    </div>
    <p className={styles.p}>Subscribe to our newsletter</p>
    <div className={styles.inputCont}>
      <input
        className={styles.input}
        type="email"
        name="newsemail"
        id="form-newsEmail"
        placeholder="Your email..."
        // onInput={popNumber}
      />
    </div>{" "}
    <button>
      <Image priority src={arrow} alt="FB" onClick={() => confirmMessage()} />
    </button>
    {/* <button id={styles.ghButt}>Send</button> */}
  </form>;
}
