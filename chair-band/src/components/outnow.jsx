import styles from "../styles/page.module.scss";
import Link from "next/link";

export default function Outnow() {
  return (
    <div className={styles.newrelbox}>
      <h3>Our new song</h3>
      <p className={styles.dots}>****************************************</p>
      <div>
        <h4>Korolowo</h4>
        <h4>(3.23)</h4>
      </div>
      <p className={styles.dots}>----------------------------------------</p>
      <div>
        <p>15.06.23.</p>
        <Link href="/newrelease">Out Now</Link>
      </div>
    </div>
  );
}
