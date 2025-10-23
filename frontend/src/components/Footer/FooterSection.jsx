import React from "react";
import "./Footer.css";

const FooterSection = React.memo(({ title, links }) => {
  return (
    <div className="footer-section">
      <h4 className="footer-title">{title}</h4>
      <ul className="footer-links">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} className="footer-link">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default FooterSection;
