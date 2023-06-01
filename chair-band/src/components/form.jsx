import styles from "../styles/page.module.scss";
import { useRef, useState } from "react";
import { TextModifierContext } from "./TextModifier";
import { useEffect, useContext } from "react";
import { sendGloryHole } from "./database";
export default function Form(props) {
  const [confirmation, setConfirmation] = useState(false);
  const theForm = useRef(null);
  const { modifyEnabled, modifyAllText } = useContext(TextModifierContext);

  useEffect(() => {
    if (modifyEnabled) {
      modifyAllText();
    }
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    // props.setNameInput(theForm.current.elements.nickname.value);
    // props.setMessageInput(theForm.current.elements.message.value);
    // Call the onSubmit function with the input value
    prepareData();
    // theForm.current.elements.nickname.value = "";
    // theForm.current.elements.message.value = "";
  }
  function prepareData() {
    // console.log("sending", nameInput, messageInput);
    sendGloryHole({
      nickname: theForm.current.elements.nickname.value,
      message: theForm.current.elements.message.value,
    });
    setConfirmation(true);
  }
  const handleButtonClick = () => {
    setConfirmation(false);
  };

  return (
    <div>
      {confirmation ? (
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
        <form
          className={styles.ghInputForm}
          ref={theForm}
          onSubmit={handleSubmit}
        >
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
              required
            ></textarea>
          </div>
          <button className={styles.ghButt}>Send</button>
        </form>
      )}
    </div>
  );
}
