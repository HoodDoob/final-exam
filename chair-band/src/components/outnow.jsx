import styles from "../styles/page.module.scss";
import Link from "next/link";

export default function Outnow() {
  return (
    <div className={styles.newrelbox}>
      <h4>Our new song</h4>
      <p className={styles.dots}>****************************************</p>
      <div>
        <h3>Korolowo</h3>
        {/* <h3>(3.23)</h3> */}
      </div>
      <p className={styles.dots}>----------------------------------------</p>
      <div>
        <p>15.06.23.</p>
        <Link href="/newrelease">Out Now</Link>
      </div>
    </div>
  );
}
