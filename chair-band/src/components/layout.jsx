import Image from "next/image";
import styles from "../styles/newsletter.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import useWindowDimensions from "../hooks/window";
import fbIcon from "../../public/icons/icon_FB.svg";
import igIcon from "../../public/icons/icon_IG.svg";
import spIcon from "../../public/icons/icon_SP.svg";
import ttIcon from "../../public/icons/icon_TT.svg";
import burger_icon from "../../public/icons/burger_icon.png";
import closed_burger from "../../public/icons/closed_burger.png";
import { sendNewsletter } from "./database";
import { motion, AnimatePresence } from "framer-motion";
import Newsletter from "./newsletter";

// npm install @mailchimp/mailchimp_marketing

export default function Layout(props) {
  const [footerState, setFooterState] = useState(true);
  const [navbarState, setNavbarState] = useState(true);
  // const [confirmation, setConfirmation] = useState(false);
  const [email, setEmail] = useState();
  const { width, height } = useWindowDimensions();

  // newsletter stuff
  // const mailchimp = require("@mailchimp/mailchimp_marketing");

  // mailchimp.setConfig({
  //   apiKey: "262d32fa10e9042d62ba9bec75589ca9",
  //   server: "us13",
  // });

  // async function run() {
  //   const response = await mailchimp.ping.get();
  //   console.log(response);
  // }

  // async function run() {
  //   const response = await mailchimp.ping.get();
  //   console.log(response);
  // }

  // function prepareData() {
  //   console.log(email);
  //   sendNewsletter({
  //     email: email,
  //   });
  //   // setConfirmation(true);
  //   // run();
  // }

  // const handleButtonClick = () => {
  //   setConfirmation(false);
  // };

  useEffect(() => {
    if (width <= 610) {
      console.log(width);
      if (props.pageState == 1) {
        setFooterState(false);
        // console.log(footerState);
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
      // console.log("burger menu open");
    } else {
      setNavbarState(true);
      if (props.burgerState == true) {
        props.setBurgerState(false);
      }
    }
  });

  return (
    <div className="layout">
      <header>
        <motion.div
          initial={{ opacity: 1, y: -100, zIndex: 10 }}
          animate={{ opacity: 1, y: 0, zIndex: 50 }}
          transition={{ duration: 1.5 }}
        >
          <div className="fixed">
            <nav>
              {/* <motion.div
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
            > */}
              <div className="navSocials">
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
                        <li>
                          <Link href="/ChairGame" target="_blank">
                            ChairGame
                          </Link>
                        </li>
                        <li>
                          <a
                            href="https://art2musicshop.pl/pl/p/Chair-Po-Co-Muzyka-CD/239"
                            target="_blank"
                          >
                            store
                          </a>
                        </li>
                        <li>
                          <a href="mailto: asia@art2.pl?subject=Chair Booking">
                            BOOK US!
                          </a>
                        </li>
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
                    className={`navLogo ${
                      props.pageState == 1 ? "hidden" : ""
                    }`}
                    onClick={() => props.changePage(1)}
                  >
                    Chair
                  </div>

                  <AnimatePresence>
                    {props.burgerState && (
                      <>
                        {/* BURGER MENU */}

                        <motion.div
                          initial={{ y: -1000 }}
                          animate={{ y: 0 }}
                          exit={{ y: 1000 }}
                          transition={{ duration: 0.3 }}
                          id="burgerMenuCont"
                          className=""
                        >
                          <ul id="burgerMenu">
                            <li onClick={() => props.changePage(1)}>home</li>
                            <li onClick={() => props.changePage(2)}>
                              about us
                            </li>
                            <li onClick={() => props.changePage(3)}>shows</li>
                            <li onClick={() => props.changePage(4)}>contact</li>
                            <li onClick={() => props.changePage(5)}>ChairTV</li>
                            <li onClick={() => props.changePage(6)}>
                              GloryHole®
                            </li>
                            <li>
                              <Link href="/ChairGame" target="_blank">
                                ChairGame
                              </Link>
                            </li>
                            <li>
                              <a
                                href="https://art2musicshop.pl/pl/p/Chair-Po-Co-Muzyka-CD/239"
                                target="_blank"
                              >
                                store
                              </a>
                            </li>
                            <li>
                              <a href="mailto: asia@art2.pl?subject=Chair Booking">
                                BOOK US!
                              </a>
                            </li>
                            {/* Language switch */}
                            <div className="navLang">
                              <div className="greyedOut">PL /</div>
                              <div>/ ENG</div>
                            </div>
                          </ul>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                  <button
                    onClick={() => props.openBurger()}
                    className="navBurger"
                    button-name="burger menu icon"
                    aria-label="burger menu icon"
                  >
                    {props.burgerState ? (
                      <Image priority src={closed_burger} alt="" />
                    ) : (
                      <Image priority src={burger_icon} alt="" />
                    )}
                  </button>
                </>
              )}
            </nav>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100, zIndex: 0 }}
          animate={{ opacity: 1, y: 0, zIndex: 4 }}
          transition={{ duration: 2.5 }}
          className="nav_gradient"
        ></motion.div>
      </header>

      <main>{props.children}</main>

      <div className="footer_gradient"> </div>

      {footerState == true && (
        <footer>
          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Newsletter />
          </motion.div>

          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5 }}
            className={styles.widget}
          >
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
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </motion.div>
        </footer>
      )}
    </div>
  );
}
