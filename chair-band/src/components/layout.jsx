import Image from "next/image";
import fbIcon from "../public/icons/icon_FB.svg";
import igIcon from "../public/icons/icon_IG.svg";
import spIcon from "../public/icons/icon_SP.svg";
import ttIcon from "../public/icons/icon_TT.svg";

export default function Layout({ children }) {
  return (
    <>
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
          <div className="navLang">
            <div className="greyedOut">PL /</div>
            <div>/ ENG</div>
          </div>
          <div className="navLogo hidden">Chair</div>
          <div className="navburger">=</div>
          <ul className="hidden">
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
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <div>
          {/* Spotify Widget */}
          <iframe
            title="myFrame"
            src="https://open.spotify.com/embed/track/3DbNbqXt0IogTMuK7oWzQd?utm_source=generator"
            width="100%"
            height="152"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div>The newsletter</div>
      </footer>
    </>
  );
}
