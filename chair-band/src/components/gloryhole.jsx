import styles from "../styles/page.module.scss";
import Image from "next/image";

import abutus_1 from "../public/images/aboutus_1.jpg";

import Link from "next/link";

export default function GloryHole() {
  return (
    <div className={styles.aboutus_div}>
      <div className={styles.title}>
        <h1>GloryHole®</h1>
        <h2>(your secrets are safe with us)</h2>
      </div>
      <div className={styles.text_div}>
        <p>
          GloryHole® is a system of anonymous messages that you can send
          directly to our band. It sdiujk sdsdgjjsdg sdjsdgkjsd gou asofiuafd .
          avpifuipuaf ipiudfg i ipu. <li>Did you hate our last performance?</li>{" "}
          <li> Want to know our favourite type of furniture?</li>{" "}
          <li>Are you feeling bored, lonely and it’s after 10pm?</li>
          <span>Let us know what you’re up for.</span>
        </p>
      </div>
      {/* form below */}
      <form className={styles.inputForm}>
        <div className="form-control">
          <label htmlFor="form-name">Your name (fake one, please)</label>
          <input
            // defaultValue="hello"
            type="text"
            name="name"
            id="form-name"
            // placeholder="How much time do you spend on Instagram daily?"
            // onInput={popNumber}
          />
        </div>

        <div className="form-control">
          <label htmlFor="form-email">Your anonymous message to Chair</label>
          <textarea className={styles.ghMessage} name="obs"></textarea>
          {/* <input
            className={styles.ghMessage}
            // defaultValue="hello"
            type="text"
            name="message"
            id={"form-message"}
            placeholder="Dear Chair, I've been a good good person this year."
            // onInput={popNumber}
          /> */}
        </div>
        <button className={styles.ghButt}>Send</button>
      </form>
      <div className={styles.imgcont}>
        <Image priority src={abutus_1} alt="" />
      </div>
    </div>
  );
}
