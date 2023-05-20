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
    <div className={`${styles.gridSetup} ${styles.grid2}`}>
      <div className={styles.imgcont} id={styles.showsimage}>
        <Image priority src={shows_1} alt=""/>
      </div>

      <div className={styles.title}>
        <h1>shows</h1>
        <h2>(gigs, concerts, weddings)</h2>
      </div>

      {/* shows table */}

      <div id={styles.showsTable}>
        <div className={styles.showsButtons}>
          <button onClick={() => changeShowState(1)} className={showState == 1 ? "weAreHere_shows" : "notHere_shows"}>upcoming</button>
          <div id={styles.line}></div>
          <button onClick={() => changeShowState(2)} className={showState == 2 ? "weAreHere_shows" : "notHere_shows"}>past</button>
        </div>

        {showState == 1 ? (
          <ul>
            <li>
              <div className={styles.oneShow}>
                <div className={styles.showDate}>
                  <h3>20.05</h3>
                  <p>2023</p>
                </div>

                <div className={styles.showName}>
                  <h3>an upcoming show</h3>
                  <p>location</p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.oneShow}>
                <div className={styles.showDate}>
                  <h3>20.05</h3>
                  <p>2023</p>
                </div>

                <div className={styles.showName}>
                  <h3>an upcoming show</h3>
                  <p>location</p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.oneShow}>
                <div className={styles.showDate}>
                  <h3>20.05</h3>
                  <p>2023</p>
                </div>

                <div className={styles.showName}>
                  <h3>an upcoming show</h3>
                  <p>location</p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.oneShow}>
                <div className={styles.showDate}>
                  <h3>20.05</h3>
                  <p>2023</p>
                </div>

                <div className={styles.showName}>
                  <h3>an upcoming show</h3>
                  <p>location</p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.oneShow}>
                <div className={styles.showDate}>
                  <h3>20.05</h3>
                  <p>2023</p>
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
  );
}
