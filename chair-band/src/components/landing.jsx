import styles from "../styles/page.module.scss";
import Link from "next/link";
import Outnow from "@/components/outnow";

export default function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.landing_div}>
        <div className={styles.title}>
          <h1>Chair</h1>
          <h2>website</h2>
        </div>

        <Outnow></Outnow>
      </div>
    </div>
  );
}
