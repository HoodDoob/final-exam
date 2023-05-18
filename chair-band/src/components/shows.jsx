import styles from "../styles/page.module.scss";
import Image from "next/image";
import shows_1 from "../public/images/shows.png";
import Link from "next/link";

export default function Shows() {
  return (
    <div className={styles.shows_div}>
      <div className={styles.container}>

      <div className={styles.imgcont}>
          <Image priority src={shows_1} alt="" />
        </div>
        
        <div className={styles.title}>
          <h1>shows</h1>
          <h2>(gigs, concerts, weddings)</h2>
        </div>
      </div>
    </div>
  );
}
