export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <div className="navSocials">
            <ul>
              <li>FB</li>
              <li>IG</li>
              <li>SP</li>
              <li>TT</li>
            </ul>
          </div>
          <div className="navLang">
            <ul>
              <div className="greyedOut">PL/</div>
              <div>/ENG</div>
            </ul>
          </div>
          <div className="navLogo">Chair</div>
          <div className="navburger">=</div>
          <ul className="hidden">
            <li>Home</li>
            <li>about us</li>
            <li>shows</li>
            <li>contact</li>
            <li>ChairTV</li>
            <li>GloryHole®</li>
            <li>ChairGame</li>
            <a>Store</a>
            <li>BOOK US!</li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <div>
          <iframe
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
