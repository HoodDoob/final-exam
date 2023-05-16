import styles from "../styles/page.module.scss";
import Link from "next/link";

export default function GloryHole() {
  return (
    <div className={styles.container}>
      <div>
        <img src="" alt="" />
      </div>

      <div className={styles.gloryhole_div}>
        <div className={styles.title}>
          <h1>GloryHole®</h1>
          <h2>(your secrets are safe with us)</h2>
        </div>
      </div>
    </div>
  );
}