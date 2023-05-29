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
import burger_icon from "../public/icons/burger_icon.png";
import closed_burger from "../public/icons/closed_burger.png";
import { sendNewsletter } from "./database";

export default function Layout(props) {
  const [footerState, setFooterState] = useState(true);
  const [navbarState, setNavbarState] = useState(true);
  const [confirmation, setConfirmation] = useState(false);
  const { width, height } = useWindowDimensions();
  const [isVisible, setIsVisible] = useState(false);
  const newsletter = useRef(null);


  function prepareData(e) {
    e.preventDefault();
    sendNewsletter({
      email: newsletter.current.elements.newsemail.value,
    });
  }

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
    if (width <= 1040) {
      setNavbarState(false);
      console.log("burger menu open");
    } else {
      setNavbarState(true);
      if (props.burgerState == true) {
        props.setBurgerState(false);
      }
    }
  });

  function confirmMessage() {
    setConfirmation(true);
  }

  return (
    <div className="layout">
      <header>
        <div className="nav_gradient"></div>
        <div className="fixed">
          <nav>
            <div>
              <div className="navSocials">
                {" "}
                <a
                  href="https://www.facebook.com/Chair.The.Band"
                  target="_blank"
                >
                  <Image priority src={fbIcon} alt="Facebook" />
                </a>{" "}
                <a
                  href="https://www.instagram.com/kocham.chair/"
                  target="_blank"
                >
                  <Image priority src={igIcon} alt="Instagram" />
                </a>
                <a
                  href="https://open.spotify.com/artist/1Lo9afReVMAV0luzxUdHX1?si=XH4TbMElSGuCJ1-CJdFR0g"
                  target="_blank"
                >
                  <Image priority src={spIcon} alt="Spotify" />
                </a>{" "}
                <a
                  href="https://www.tiktok.com/@chair.band?_t=8cVT9ADObSk&"
                  target="_blank"
                >
                  <Image priority src={ttIcon} alt="Tik Tok" />
                </a>
              </div>
            </div>

            {/* Burger menu switch */}
            {navbarState == true ? (
              <>
                <div
                  className={`navLogo ${
                    props.pageState == 1 ? "invisible" : ""
                  }`}
                  onClick={() => props.changePage(1)}
                >
                  Chair
                </div>
                <div id="navbarCont" className="">
                  <div id="anotherCont">
                    <ul id="navbar">
                      <li
                        onClick={() => props.changePage(1)}
                        className={props.pageState == 1 ? "weAreHere" : ""}
                      >
                        home
                      </li>
                      <li
                        onClick={() => props.changePage(2)}
                        className={props.pageState == 2 ? "weAreHere" : ""}
                      >
                        about us
                      </li>
                      <li
                        onClick={() => props.changePage(3)}
                        className={props.pageState == 3 ? "weAreHere" : ""}
                      >
                        shows
                      </li>
                      <li
                        onClick={() => props.changePage(4)}
                        className={props.pageState == 4 ? "weAreHere" : ""}
                      >
                        contact
                      </li>
                      <li
                        onClick={() => props.changePage(5)}
                        className={
                          props.pageState == 5 ||
                          props.pageState == 7 ||
                          props.pageState == 8 ||
                          props.pageState == 9
                            ? "weAreHere"
                            : ""
                        }
                      >
                        ChairTV
                      </li>
                      <li
                        onClick={() => props.changePage(6)}
                        className={props.pageState == 6 ? "weAreHere" : ""}
                      >
                        GloryHole®
                      </li>
                      <li>ChairGame</li>
                      <li>store</li>
                      <li>BOOK US!</li>
                    </ul>
                    <hr />
                  </div>
                </div>
                {/* Language switch */}
                <div className="navLang">
                  <div className="greyedOut">PL /</div>
                  <div>/ ENG</div>
                </div>
              </>
            ) : (
              <>
                <div
                  className={`navLogo ${props.pageState == 1 ? "hidden" : ""}`}
                >
                  Chair
                </div>
                <button
                  onClick={() => props.openBurger()}
                  className={props.burgerState ? "hidden" : "navBurger"}
                  button-name="klosburg"
                >
                  <Image priority src={burger_icon} alt="" />
                </button>

                {props.burgerState && (
                  <>
                    {/* Language switch */}
                    <div className="navLang">
                      <div className="greyedOut">PL /</div>
                      <div>/ ENG</div>
                    </div>
                    <button
                      onClick={() => props.openBurger()}
                      className="navBurger"
                      button-name="klosburg"
                    >
                      <Image priority src={closed_burger} alt="" />
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
          <form
            className={styles.newsletter}
            ref={newsletter}
            onSubmit={(e) => {
              prepareData(e);
            }}
          >
            <div>
              Don't miss out on <br></br> <span> Chair </span> drama.
            </div>
            <p className={styles.p}>Subscribe to our newsletter</p>
            <div className={styles.inputCont}>
              <input
                className={styles.input}
                type="email"
                name="newsemail"
                id="form-newsEmail"
                placeholder="Your email..."
                // onInput={popNumber}
              />
            </div>{" "}
            <button>
              <Image priority src={arrow} alt="FB" onClick={() => confirmMessage()}/>
            </button>
            {/* <button id={styles.ghButt}>Send</button> */}
          </form>
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
