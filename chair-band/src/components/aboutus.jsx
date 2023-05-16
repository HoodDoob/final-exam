import styles from "../styles/page.module.scss";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <div>
        <img src="" alt="" />
      </div>

      <div className={styles.aboutus_div}>
        <div className={styles.title}>
          <h1>about us</h1>
          <h2>(the band called Chair)</h2>
        </div>
      </div>
    </div>
  );
}
