import './Footer.css';

export function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <ul className='footer-information'>
          <li>
            <a href='/'>Pricing</a>
          </li>
          <li>
            <a href='/'>Features</a>
          </li>
          <li>
            <a href='/'>FAQ</a>
          </li>
          <li>
            <a href='/'>News</a>
          </li>
          <li>
            <a href='/'>Follow us</a>
          </li>
          <li>
            <a href='/'>Contact us</a>
          </li>
          <li>
            <a href='/'>Story</a>
          </li>
          <li>
            <a href='/'>IMDbPro</a>
          </li>
          <li>
            <a href='/'>Amazon Drive</a>
          </li>
          <li>
            <a href='/'>Sell on</a>
          </li>
          <li>
            <a href='/'>Shopbop</a>
          </li>
          <li>
            <a href='/'>Zappos</a>
          </li>
          <li>
            <a href='/'>Ring</a>
          </li>
          <li>
            <a href='/'>Fabric</a>
          </li>
          <li>
            <a href='/'>Goodreads</a>
          </li>
          <li>
            <a href='/'>Box Office Mojo</a>
          </li>
        </ul>
      </div>
      <div className='footer-copyright'>
        <span className='author'>
          © {new Date().getFullYear()} Yaroslav Dombrovskiy
        </span>
        <a
          className='grey-text text-lighten-4 right repo-link'
          href='https://github.com/olmerrr?tab=repositories'
        >
          Repository
        </a>
      </div>
    </footer>
  );
}
