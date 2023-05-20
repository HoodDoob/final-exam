import styles from "../styles/page.module.scss";
import Link from "next/link";

export default function ChairTV() {
  return (

      <div className={`${styles.gridSetup} ${styles.grid2}`}>
        <div className={styles.title}>
          <h1>Chair TV</h1>
          <h2>(no funny undertext this time)</h2>
        </div>

        <div className={styles.tvgrid}>
          <div className={styles.tv} id={styles.tv_1}>

          </div>
          <div className={styles.tv} id={styles.tv_2}>
            
          </div>
          <div className={styles.tv} id={styles.tv_3}>
            
          </div>
        </div>
      </div>
  );
}