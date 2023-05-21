import styles from "../styles/page.module.scss";
import Image from "next/image";
import tv_1 from "../public/images/tv_1.png";
import tv_2 from "../public/images/tv_2.png";
import tv_3 from "../public/images/tv_3.png";
import Link from "next/link";

export default function ChairTV(props) {
  return (
    <div className={styles.chairTV}>
      <div className={styles.title}>
        <h1>Chair TV</h1>
        <h2>(no funny undertext this time)</h2>
      </div>

      <div className={styles.tv_container} id={styles.tv_1}>
        <div className={styles.imgcont}>
          <Image priority src={tv_2} alt="" />
        </div>
        <h2 onClick={() => props.changePage(7)}>clips</h2>
      </div>

      <div className={styles.tv_container} id={styles.tv_2}>
        <div className={styles.imgcont}>
          <Image priority src={tv_3} alt="" />
        </div>
        <h2 onClick={() => props.changePage(8)}>live shows</h2>
      </div>

      <div className={styles.tv_container} id={styles.tv_3}>
        <div className={styles.imgcont}>
          <Image priority src={tv_1} alt="" />
        </div>
        <h2 onClick={() => props.changePage(9)}>silly stuff</h2>
      </div>
    </div>
  );
}
