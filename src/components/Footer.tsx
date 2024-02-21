import './Footer.css'; // Husk at oprette denne CSS-fil

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Twoday</p>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
