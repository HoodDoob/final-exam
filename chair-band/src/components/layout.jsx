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
  const [navbarState, setNavbarState] = useState(true);
  const { width, height } = useWindowDimensions();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (width <= 600) {
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

  useEffect(() => {
    if (width <= 950) {
      setNavbarState(false);
      console.log("burger menu open");
    } else {
      setNavbarState(true);
      if (props.burgerState == true) {
        props.setBurgerState(false);
      }
    }
  });

  //function to make the navbar background visible on scroll //*! not working yet *//
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const shouldShow = scrollTop > 0;

      setIsVisible(shouldShow);
      console.log("they see me scrollin they hatin")
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="layout">
      <header>
        <div className={`nav_gradient ${isVisible ? 'visible' : ''}`}></div>
        <div className="fixed">
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

            {/* Burger menu switch */}
            {navbarState == true ? (
              <>
                <div id="navbarCont" className="">
                  <ul id="navbar">
                    <li
                      onClick={() => props.changePage(1)}
                      className={props.pageState == 1 ? "weAreHere" : ""}>
                      home
                    </li>
                    <li
                      onClick={() => props.changePage(2)}
                      className={props.pageState == 2 ? "weAreHere" : ""}>
                      about us
                    </li>
                    <li
                      onClick={() => props.changePage(3)}
                      className={props.pageState == 3 ? "weAreHere" : ""}>
                      shows
                    </li>
                    <li
                      onClick={() => props.changePage(4)}
                      className={props.pageState == 4 ? "weAreHere" : ""}>
                      contact
                    </li>
                    <li
                      onClick={() => props.changePage(5)}
                      className={props.pageState == 5 ? "weAreHere" : ""}>
                      ChairTV
                    </li>
                    <li
                      onClick={() => props.changePage(6)}
                      className={props.pageState == 6 ? "weAreHere" : ""}>
                      GloryHole®
                    </li>
                    <li>ChairGame</li>
                    <li>store</li>
                    <li>BOOK US!</li>
                  </ul>
                </div>
                {/* Language switch */}
                <div className="navLang">
                  <div className="greyedOut">PL /</div>
                  <div>/ ENG</div>
                </div>
                <div className="navLogo hidden">Chair</div>
              </>
            ) : (
              <>
                {/* Language switch */}
                <div className="navLang">
                  <div className="greyedOut">PL /</div>
                  <div>/ ENG</div>
                </div>
                <div className="navLogo hidden">Chair</div>
                <button
                  onClick={() => props.openBurger()}
                  // className="navBurger"
                  button-name="klosburg">
                  =
                </button>

                {props.burgerState && (
                  <>
                    <button
                      onClick={() => props.openBurger()}
                      className="navBurger"
                      button-name="klosburg">
                      {props.openBurger ? <p>x</p> : <p>=</p>}
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
                )}
              </>
            )}
          </nav>
        </div>
      </header>

      <main className={width > 600 ? "" : ""}>{props.children}</main>
      <div className="footer_gradient"> </div>

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
              loading="lazy"></iframe>
          </div>
        </footer>
      )}
    </div>
  );
}
