import './Header.css';

export function Header() {
  return (
    <header className='header'>
      <nav className='header-nav'>
        <a href='/' className='brand-logo'>
          Game Shop
        </a>

        <ul id='nav-mobile' className='right hide-on-med-and-down nav-links'>
          <li>
            <a href='https://en.wikipedia.org/wiki/Gift'>Gifts</a>
          </li>
          <li>
            <a href='https://en.wikipedia.org/wiki/Store'>Store</a>
          </li>
          <li>
            <a href='https://en.wikipedia.org/wiki/Metaverse'>Metaverse</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
