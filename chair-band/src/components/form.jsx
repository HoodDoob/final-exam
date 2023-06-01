import styles from "../styles/page.module.scss";
import { useRef, useState } from "react";
import { TextModifierContext } from './TextModifier';
import { useEffect, useContext } from "react";


export default function Form(props) {
  const theForm = useRef(null);
  const { modifyEnabled, modifyAllText } = useContext(TextModifierContext);

  useEffect(() => {
    if (modifyEnabled) {
      modifyAllText();
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    props.setNameInput(theForm.current.elements.nickname.value);
    props.setMessageInput(theForm.current.elements.message.value);
    // Call the onSubmit function with the input value
    props.prepareData({});
    theForm.current.elements.nickname.value = "";
    theForm.current.elements.message.value = "";
  }

  return (
    <form className={styles.ghInputForm} ref={theForm} onSubmit={handleSubmit}>
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
        <label htmlFor="form-message">Your anonymous message to Chair</label>
        <textarea
          defaultValue={""}
          className={styles.ghMessage}
          name="message"
          id="form-message"
          required></textarea>
      </div>
      <button className={styles.ghButt}>Send</button>
    </form>
  );
}
