import "./Header.css";
function Header() {
  return (
    <header className="header">
      <h1 className="header__heading">&lt; AS/ &gt;</h1>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <a href="#about" className="header__link">
              About
            </a>
          </li>
          <li className="header__item">
            <a href="#portfolio" className="header__link">
              Portfolio
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
