import styles from "../styles/page.module.scss";
import { useRef, useState } from "react";
import { sendGloryHole } from "./database";

export default function GloryHole() {
  const [confirmation, setConfirmation] = useState(false);
  const theForm = useRef(null);

  function confirmMessage() {
    setConfirmation(!confirmation);
  }

  function prepareData(e) {
    e.preventDefault();
    sendGloryHole({
      nickname: theForm.current.elements.nickname.value,
      message: theForm.current.elements.message.value,
    });
  }
  return (
    <div className={`${styles.gridSetup} ${styles.gridGH}`}>
      {/* <div className={styles.ghLine}></div> */}
      <div className={styles.title}>
        <h1>GloryHole®</h1>
        <h2>(your secrets are safe with us)</h2>
      </div>
      <div className={styles.ghText}>
        <p>
          GloryHole® is a system of anonymous messages that you can send
          directly to our band. It sdiujk sdsdgjjsdg sdjsdgkjsd gou asofiuafd .
          avpifuipuaf ipiudfg i ipu.<br></br>
          <br></br>
          <div id={styles.ghList}>
            <li>Did you hate our last performance?</li>
            <li> Want to know our favourite type of furniture?</li>
            <li>Are you feeling bored, lonely and it’s after 10pm?</li>
          </div>
          <br></br>
          <span>Let us know what you’re up for.</span>
        </p>
      </div>

      {confirmation ? (
        <div className={styles.confirmationCont}>
          <h2>Thank you for your message. It has been sent to our servers and will be evaluated very soon</h2>
          <button className={styles.ghButt} onClick={() => confirmMessage()}>Send another</button>
        </div>
      ) : (
        <form
          className={styles.ghInputForm}
          ref={theForm}
          onSubmit={(e) => {
            prepareData(e);
            // props.changePage({
            //   preventDefault: () => {},
            //   target: {
            //     name: "next",
            //   },
            // });
          }}>
          <div className="form-control">
            <label htmlFor="form-nickname">Your name (fake one, please)</label>
            <input
              defaultValue={""}
              type="text"
              name="nickname"
              id="form-nickname"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="form-message">
              Your anonymous message to Chair
            </label>
            <textarea
              defaultValue={""}
              className={styles.ghMessage}
              name="message"
              id="form-message"
              required></textarea>
          </div>
          <button className={styles.ghButt} onClick={() => confirmMessage()}>
            Send
          </button>
        </form>
      )}
    </div>
  );
}
