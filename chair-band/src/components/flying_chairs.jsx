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
      <Image className={styles.floatingElement} src={chair1} alt="Facebook" />
      <Image className={styles.floatingElement} src={chair2} alt="Facebook" />
      <Image className={styles.floatingElement} src={chair3} alt="Facebook" />
      <Image className={styles.floatingElement} src={chair4} alt="Facebook" />
    </div>
  );
}
