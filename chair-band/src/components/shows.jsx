import styles from "../styles/page.module.scss";
import Image from "next/image";
import shows_1 from "../public/images/shows.png";
import { useState } from "react";
// import Slider from "../components/shows_slider";
import Link from "next/link";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Shows() {
  const [showState, setShowState] = useState(1);

  function changeShowState(x) {
    setShowState(x);
  }
  // const images = [
  //   "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  //   "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  //   "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  // ];
  return (
    <div className={`${styles.gridSetup} ${styles.gridShows}`}>
      <div className={styles.imgcont} id={styles.showsimage}>
        <Image priority src={shows_1} alt="" />
        {/* <Slide>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[0]})` }}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[1]})` }}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[2]})` }}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide> */}
      </div>

      <div className={styles.title}>
        <h1>shows</h1>
        <h2>(gigs, concerts, weddings)</h2>
      </div>

      {/* shows table */}

      <div id={styles.showsTable}>
        <div className={styles.showsButtons}>
          <button
            onClick={() => changeShowState(1)}
            className={showState == 1 ? "weAreHere_shows" : "notHere_shows"}
          >
            upcoming
          </button>
          <div id={styles.line}></div>
          <button
            onClick={() => changeShowState(2)}
            className={showState == 2 ? "weAreHere_shows" : "notHere_shows"}
          >
            past
          </button>
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
