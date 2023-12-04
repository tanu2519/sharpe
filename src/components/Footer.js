import { Link } from 'react-router-dom';import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>This is a brief description of our website or company.</p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="#">Home</Link></li>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Services</Link></li>
            <li><Link to="#">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Information</h3>
          <p>Email: contact@example.com<br />Phone: +1234567890</p>
        </div>
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <ul>
            <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
            <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
            <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2023 YourWebsite.com | Designed by You
      </div>
    </footer>
  );
};

export default Footer;
