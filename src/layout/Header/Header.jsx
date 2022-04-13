import "./Header.css";

export function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            Game Shop
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="https://sass-lang.com">Sass</a>
            </li>
            <li>
              <a href="https://uk.reactjs.org">React</a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
