import Image from "next/image";
import styles from "../styles/newsletter.module.scss";
import { useState, useEffect } from "react";

import fbIcon from "../public/icons/icon_FB.svg";
import igIcon from "../public/icons/icon_IG.svg";
import spIcon from "../public/icons/icon_SP.svg";
import ttIcon from "../public/icons/icon_TT.svg";

export default function Layout(props) {
  return (
    <div className="layout">
      <header>
        <nav>
          <div>
            <div className="navSocials">
              <Image priority src={fbIcon} alt="FB" />
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
                  <li onClick={() => props.changePage(1)}>Home</li>
                  <li onClick={() => props.changePage(2)}>About Us</li>
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
      {/* {props.pageState == 1 && ( */}
      <footer>
        <div className={styles.newsletter}>
          <div>
            Don't miss out on <br></br> <span> Chair </span> drama.
          </div>
          <p className={styles.p}>Subscribe to our newsletter</p>
        </div>
        <div>
          {/* Spotify Widget */}
          <iframe
            title="myFrame"
            src="https://open.spotify.com/embed/track/3DbNbqXt0IogTMuK7oWzQd?utm_source=generator"
            width="100%"
            height="110"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </footer>
      {/* )} */}
    </div>
  );
}
