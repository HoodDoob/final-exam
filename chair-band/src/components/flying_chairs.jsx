import Image from "next/image";
import styles from "../styles/flying.module.scss";
import { useState, useEffect } from "react";

import { useRef } from "react";

import chair1 from "../../public/flying_chairs/flying_1.png";
import chair2 from "../../public/flying_chairs/flying_2.png";
import chair3 from "../../public/flying_chairs/flying_3.png";
import chair4 from "../../public/flying_chairs/flying_4.png";
import chair5 from "../../public/flying_chairs/flying_5.png";
import chair6 from "../../public/flying_chairs/flying_6.png";
import chair7 from "../../public/flying_chairs/flying_7.png";

export default function FlyingChairs() {
  const elementRefs = useRef([]);

  const handleClick = (y) => {
    if (elementRefs.current[y]) {
      elementRefs.current[y].classList.add(`${styles.disappear}`);
      setTimeout(() => {
        elementRefs.current[y].classList.remove(`${styles.disappear}`);
      }, 5000);
    }
  };

  return (
    <div className={styles.contOver}>
      {/* <div className={styles.contTest}> */}
      <div className={`${styles.floatingElement} ${styles.pos1}`}>
        <Image
          placeholder="empty"
          loading="lazy"
          priority={false}
          onClick={() => handleClick(0)}
          ref={(el) => (elementRefs.current[0] = el)}
          src={chair1}
          alt="Facebook"
        />
      </div>

      <div className={`${styles.floatingElement} ${styles.pos2}`}>
        <Image
          placeholder="empty"
          loading="lazy"
          priority={false}
          onClick={() => handleClick(1)}
          ref={(el) => (elementRefs.current[1] = el)}
          src={chair2}
          alt="Facebook"
        />
      </div>
      <div className={`${styles.floatingElement} ${styles.pos3}`}>
        <Image
          placeholder="empty"
          loading="lazy"
          priority={false}
          onClick={() => handleClick(2)}
          ref={(el) => (elementRefs.current[2] = el)}
          src={chair3}
          alt="Facebook"
        />
      </div>
      <div className={`${styles.floatingElement} ${styles.pos4}`}>
        <Image
          placeholder="empty"
          loading="lazy"
          priority={false}
          onClick={() => handleClick(3)}
          ref={(el) => (elementRefs.current[3] = el)}
          src={chair4}
          alt="Facebook"
        />
      </div>
      <div className={`${styles.floatingElement} ${styles.pos5}`}>
        <Image
          placeholder="empty"
          loading="lazy"
          priority={false}
          onClick={() => handleClick(4)}
          ref={(el) => (elementRefs.current[4] = el)}
          src={chair5}
          alt="Facebook"
        />
      </div>
      <div className={`${styles.floatingElement} ${styles.pos6}`}>
        <Image
          placeholder="empty"
          loading="lazy"
          priority={false}
          onClick={() => handleClick(5)}
          ref={(el) => (elementRefs.current[5] = el)}
          src={chair6}
          alt="Facebook"
        />
      </div>
      <div className={`${styles.floatingElement} ${styles.pos7}`}>
        <Image
          placeholder="empty"
          loading="lazy"
          priority={false}
          onClick={() => handleClick(6)}
          ref={(el) => (elementRefs.current[6] = el)}
          src={chair7}
          alt="Facebook"
        />
      </div>
    </div>
  );
}
{
  /* <div className={`${styles.gridSetup} ${styles.grid2}`}></div> */
}
