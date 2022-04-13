import './Footer.css';

export function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-copyright'>
        <div className='container'>
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
      </div>
    </footer>
  );
}
