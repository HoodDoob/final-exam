import Image from "next/image";
import styles from "../styles/newsletter.module.scss";
import { useState, useEffect } from "react";
import { useRef } from "react";
import useWindowDimensions from "../hooks/window";
import fbIcon from "../public/icons/icon_FB.svg";
import igIcon from "../public/icons/icon_IG.svg";
import spIcon from "../public/icons/icon_SP.svg";
import ttIcon from "../public/icons/icon_TT.svg";
import arrow from "../public/icons/icon_arrow.svg";

export default function Layout(props) {
  const [footerState, setFooterState] = useState(true);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (width <= 414) {
      console.log(width);
      if (props.pageState == 1) {
        setFooterState(false);
        console.log(footerState);
      } else {
        setFooterState(true);
      }
    } else {
      setFooterState(true);
    }
  });

  return (
    <div className="layout">
      <header>
        <nav>
          <div>
            <div className="navSocials">
              <Image
                priority
                src={fbIcon}
                alt="FB"
                // onClick={() => checkSize()}
              />
              <Image priority src={igIcon} alt="IG" />
              <Image priority src={spIcon} alt="FB" />
              <Image priority src={ttIcon} alt="IG" />
            </div>
          </div>
          {/* Language switch */}
          <div className="navLang">
            <div className="greyedOut">PL /</div>
            <div>/ ENG</div>
          </div>
          <div className="navLogo hidden">Chair</div>
          {/* Burger menu switch */}
          <button
            onClick={() => props.openBurger()}
            // className="navBurger"
            button-name="klosburg"
          >
            =
          </button>
          {props.burgerState && (
            <>
              <button
                onClick={() => props.openBurger()}
                className="navBurger"
                button-name="klosburg"
              >
                =
              </button>
              <div id="burgerMenuCont" className="">
                <ul id="burgerMenu">
                  <li onClick={() => props.changePage(1)}>home</li>
                  <li onClick={() => props.changePage(2)}>about us</li>
                  <li onClick={() => props.changePage(3)}>shows</li>
                  <li onClick={() => props.changePage(4)}>contact</li>
                  <li onClick={() => props.changePage(5)}>ChairTV</li>
                  <li onClick={() => props.changePage(6)}>GloryHole®</li>
                  <li>ChairGame</li>
                  <li>store</li>
                  <li>BOOK US!</li>
                </ul>
              </div>
            </>
          )}{" "}
        </nav>
      </header>

      <main>{props.children}</main>
      {footerState == true && (
        <footer>
          <div className={styles.newsletter}>
            <div>
              Don't miss out on <br></br> <span> Chair </span> drama.
            </div>
            <p className={styles.p}>Subscribe to our newsletter</p>
            <div className={styles.inputCont}>
              <input
                className={styles.input}
                type="email"
                name="newsEmail"
                id="form-newsEmail"
                placeholder="Your email..."
                // onInput={popNumber}
              />
              <Image priority src={arrow} alt="FB" />
            </div>
          </div>
          <div className={styles.widget}>
            {/* Spotify Widget */}
            <iframe
              title="myFrame"
              src="https://open.spotify.com/embed/track/3DbNbqXt0IogTMuK7oWzQd?utm_source=generator"
              width="100%"
              height="80px"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </footer>
      )}
    </div>
  );
}
