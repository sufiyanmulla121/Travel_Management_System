import React from "react";
import {
  companyLinks,
  legalLinks,
  navigationLinks,
  resourceLinks,
} from "../../data/Footer.data";
import "./Footer.css";
import FooterSection from "./FooterSection";
import SocialLinks from "./SocialLinks";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <FooterSection title="Navigation" links={navigationLinks} />
          <FooterSection title="Resources" links={resourceLinks} />
          <FooterSection title="Company" links={companyLinks} />
          <SocialLinks />
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Junaid Shaikh. All rights reserved.
          </p>
          <div className="legal-links">
            {legalLinks.map((link, index) => (
              <a key={index} href={link.url} className="legal-link">
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
