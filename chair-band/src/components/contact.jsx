import styles from "../styles/page.module.scss";
import Link from "next/link";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div>
        <img src="" alt="" />
      </div>

      <div className={styles.contact_div}>
        <div className={styles.title}>
          <h1>contact</h1>
          <h2>(speak to the manager pls)</h2>
        </div>
      </div>
    </div>
  );
}