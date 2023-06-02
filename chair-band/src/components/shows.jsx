import styles from "../styles/page.module.scss";
import Image from "next/image";
import shows_1 from "../../public/images/shows.png";
import { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { TextModifierContext } from "./TextModifier";
import { useEffect, useContext } from "react";

export default function Shows() {
  const [showState, setShowState] = useState(1);
  const { modifyEnabled, modifyAllText } = useContext(TextModifierContext);

  useEffect(() => {
    if (modifyEnabled) {
      modifyAllText();
    }
  }, []);

  function changeShowState(x) {
    setShowState(x);
    if (modifyEnabled) {
      modifyAllText();
    }
  }
  // const images = [
  //   "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  //   "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  //   "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  // ];
  return (
    <div className={styles.animationCont}>
      <div className={`${styles.gridSetup} ${styles.gridShows}`}>
        <div className={styles.imgcont3} id={styles.showsimage}>
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
                    <h3>14.06</h3>
                    <p>2023</p>
                  </div>

                  <div className={styles.showName}>
                    <h3>Ephemera</h3>
                    <p>Warsaw // PL</p>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.oneShow}>
                  <div className={styles.showDate}>
                    <h3>26.6</h3>
                    <p>2023</p>
                  </div>

                  <div className={styles.showName}>
                    <h3>Meskie Granie</h3>
                    <p>Poznan // PL</p>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.oneShow}>
                  <div className={styles.showDate}>
                    <h3>08.07</h3>
                    <p>2023</p>
                  </div>

                  <div className={styles.showName}>
                    <h3>Stary Manez</h3>
                    <p>Gdansk // PL</p>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.oneShow}>
                  <div className={styles.showDate}>
                    <h3>21.07</h3>
                    <p>2023</p>
                  </div>

                  <div className={styles.showName}>
                    <h3>AlterFest</h3>
                    <p>Myslowice // PL</p>
                  </div>
                </div>
              </li>
              {/* <li>
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
            </li> */}
            </ul>
          ) : (
            <ul>
              <li>
                <div className={styles.oneShow}>
                  <div className={styles.showDate}>
                    <h3>27.05</h3>
                    <p>2023</p>
                  </div>

                  <div className={styles.showName}>
                    <h3>Radio Zak</h3>
                    <p>Lodz // PL</p>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.oneShow}>
                  <div className={styles.showDate}>
                    <h3>30.04</h3>
                    <p>2023</p>
                  </div>

                  <div className={styles.showName}>
                    <h3>DOMIE</h3>
                    <p>Poznan // PL</p>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.oneShow}>
                  <div className={styles.showDate}>
                    <h3>29.04</h3>
                    <p>2023</p>
                  </div>

                  <div className={styles.showName}>
                    <h3>Tamka</h3>
                    <p>Wroclaw // PL</p>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.oneShow}>
                  <div className={styles.showDate}>
                    <h3>28.04</h3>
                    <p>2023</p>
                  </div>

                  <div className={styles.showName}>
                    <h3>Chmury</h3>
                    <p>Warsaw // PL</p>
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.oneShow}>
                  <div className={styles.showDate}>
                    <h3>16.04</h3>
                    <p>2023</p>
                  </div>

                  <div className={styles.showName}>
                    <h3>Stodola</h3>
                    <p>Warsaw // PL</p>
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
