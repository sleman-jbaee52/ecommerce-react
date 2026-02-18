import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import React from "react";
import  "./footer.css"
function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About the store</h3>
          <p>
            An Online Store Offering the best products at competitive prices. We
            are Committed to quality service.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">accessories</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">blog</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>
            {" "}
            <Phone />

              +963 996 784 438
          </p>
          <p>
            {" "}
            <Mail />
            info@store.com
          </p>
          <p>
            {" "}
            <MapPin />
            Syria
          </p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
            <a
              href="https://twiiter.com"
              target="blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="https://instagram.com"
              target="blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&Copy; 2023 Our Store. All Rights reserved.</p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a> |{" "}
            <a href="/terms">Terms Of Use</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
