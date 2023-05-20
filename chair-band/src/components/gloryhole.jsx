import styles from "../styles/page.module.scss";
import Image from "next/image";
import aboutus_2 from "../public/images/aboutus_2.jpg";

import abutus_1 from "../public/images/aboutus_1.jpg";

import Link from "next/link";

export default function GloryHole() {
  return (
    <div className={`${styles.gridSetup} ${styles.grid4}`}>
      {/* <div className={styles.ghLine}></div> */}
      <div className={styles.title}>
        <h1>GloryHole®</h1>
        <h2>(your secrets are safe with us)</h2>
      </div>
      <div className={styles.mrgLEFT} id={styles.ghText}>
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

      {/* form below */}
      <form className={styles.ghInputForm}>
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
        </div>
        <button id={styles.ghButt}>Send</button>
      </form>

      {/* <div className={styles.imgcont} id={styles.ghImg}>
        <Image priority src={aboutus_2} alt="" />
      </div> */}
      {/* <div className={styles.imgcont} id={styles.ghImg}>
        <Image priority src={abutus_1} alt="" />
      </div> */}
    </div>
  );
}
