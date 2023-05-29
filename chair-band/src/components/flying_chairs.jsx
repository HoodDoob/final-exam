import Image from "next/image";
import styles from "../styles/flying.module.scss";
import { useState, useEffect } from "react";
import { useRef } from "react";

import chair1 from "../public/flying_chairs/flying_1.png";
import chair2 from "../public/flying_chairs/flying_2.png";
import chair3 from "../public/flying_chairs/flying_3.png";
import chair4 from "../public/flying_chairs/flying_4.png";
import chair5 from "../public/flying_chairs/flying_5.png";

export default function FlyingChairs() {
  return (
    <div>
      <div className={styles.contTest}>
        <Image
          className={`${styles.floatingElement} ${styles.pos1}`}
          src={chair1}
          alt="Facebook"
        />
      </div>
      <Image
        className={`${styles.floatingElement} ${styles.pos2}`}
        src={chair2}
        alt="Facebook"
      />
      <Image
        className={`${styles.floatingElement} ${styles.pos3}`}
        src={chair3}
        alt="Facebook"
      />
      <Image
        className={`${styles.floatingElement} ${styles.pos4}`}
        src={chair4}
        alt="Facebook"
      />
      <Image
        className={`${styles.floatingElement} ${styles.pos5}`}
        src={chair5}
        alt="Facebook"
      />
    </div>
  );
}
{
  /* <div className={`${styles.gridSetup} ${styles.grid2}`}></div> */
}
