import styles from "../styles/page.module.scss";
import Link from "next/link";

export default function Shows() {
  return (
    <div className={styles.container}>
      <div>
        <img src="" alt="" />
      </div>

      <div className={styles.shows_div}>
        <div className={styles.title}>
          <h1>shows</h1>
          <h2>(gigs, concerts, weddings)</h2>
        </div>
      </div>
    </div>
  );
}