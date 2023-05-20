import styles from "../styles/page.module.scss";
import Image from "next/image";
import shows_1 from "../public/images/shows.png";
import { useState } from "react";
import Link from "next/link";

export default function Shows() {
  const [showState, setShowState] = useState(1);

  function changeShowState(x) {
    setShowState(x);
  }

  return (
    <div className={styles.container}>
      <div className={styles.shows_div}>
        <div className={styles.imgcont}>
          <Image priority src={shows_1} alt="" />
        </div>

        <div className={styles.title}>
          <h1>shows</h1>
          <h2>(gigs, concerts, weddings)</h2>
        </div>

        {/* shows table */}

        <div className={styles.showsTable}>
          <div className={styles.showsButtons}>
            <button onClick={() => changeShowState(1)}>upcoming</button>
            <button onClick={() => changeShowState(2)}>past</button>
          </div>

          {showState == 1 ? (
            <ul>
              <li>
                <div className={styles.oneShow}>
                  <div className={styles.showDate}>
                    <h3>day and month</h3>
                    <p>year</p>
                  </div>

                  <div className={styles.showName}>
                    <h3>an upcoming show</h3>
                    <p>location</p>
                  </div>
                </div>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <div className={styles.oneShow}>
                  <div className={styles.showDate}>
                    <h3>day and month</h3>
                    <p>year</p>
                  </div>

                  <div className={styles.showName}>
                    <h3>a past show</h3>
                    <p>location</p>
                  </div>
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
