import Image from "next/image";
import { useState, useEffect } from "react";

import fbIcon from "../public/icons/icon_FB.svg";
import igIcon from "../public/icons/icon_IG.svg";
import spIcon from "../public/icons/icon_SP.svg";
import ttIcon from "../public/icons/icon_TT.svg";

export default function Layout({ children }) {
  const [burgerState, setBurgerState] = useState(false);
  function openBurger() {
    setBurgerState(!burgerState);
    console.log("burger menu is open " + burgerState);
  }
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
            onClick={() => openBurger()}
            // className="navBurger"
            button-name="klosburg"
          >
            =
          </button>
          {burgerState && (
            <>
              <button
                onClick={() => openBurger()}
                className="navBurger"
                button-name="klosburg"
              >
                =
              </button>
              <div id="burgerMenuCont" className="">
                <ul id="burgerMenu">
                  <li>Home</li>
                  <li>about us</li>
                  <li>shows</li>
                  <li>contact</li>
                  <li>ChairTV</li>
                  <li>GloryHole®</li>
                  <li>ChairGame</li>
                  <li>store</li>
                  <li>BOOK US!</li>
                </ul>
              </div>
            </>
          )}{" "}
        </nav>
      </header>

      <main>{children}</main>
      {}
      <footer>
        <div>
          {/* Spotify Widget */}
          <iframe
            title="myFrame"
            src="https://open.spotify.com/embed/track/3DbNbqXt0IogTMuK7oWzQd?utm_source=generator"
            width="100%"
            height="110"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div>The newsletter</div>
      </footer>
    </div>
  );
}
