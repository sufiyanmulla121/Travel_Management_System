import { socialLinks } from "../../data/Footer.data";
import "./Footer.css";

const SocialLinks = () => {
  return (
    <div className="footer-section">
      <h4 className="footer-title">Connect With Us</h4>
      <div className="social-links">
        {socialLinks.map((item, index) => (
          <a
            href={item.href}
            className="social-link"
            aria-label={item.label}
            key={index}
          >
            <i className={`fa-brands ${item.icons}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
