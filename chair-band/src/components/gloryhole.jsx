import styles from "../styles/page.module.scss";
import { useRef, useState, useEffect, useContext } from "react";
import { sendGloryHole } from "./database";
import Form from "./form";
import { TextModifierContext } from "./TextModifier";

export default function GloryHole() {
  // const [nameInput, setNameInput] = useState();
  // const [messageInput, setMessageInput] = useState();
  const { modifyEnabled, modifyAllText } = useContext(TextModifierContext);

  useEffect(() => {
    if (modifyEnabled) {
      modifyAllText();
    }
  }, []);

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
          directly to our band. <br></br>
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
      <Form />
      {/* {confirmation ? (
        <div className={styles.confirmationCont}>
          <h2>
            Thank you for your message. It has been sent to our servers and will
            be evaluated very soon
          </h2>
          {confirmation && (
            <button onClick={handleButtonClick} className={styles.ghButt}>
              Send another
            </button>
          )}
        </div>
      ) : (
        <Form
          prepareData={prepareData}
          nameInput={nameInput}
          setNameInput={setNameInput}
          messageInput={messageInput}
          setMessageInput={setMessageInput}
        />
      )} */}
    </div>
  );
}
