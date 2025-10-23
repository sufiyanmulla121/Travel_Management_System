import React from "react";
import "./Contact.css";
import { defaultImage } from "../../constants/img-placeholder";

const Contact = React.memo(({ contacts }) => {
  const {
    cname,
    clocation,
    cphonenumber,
    cemail,
    cimageurls,
    clink1,
    clink2,
    clink3,
    clink4,
  } = contacts;

  const links = [clink1, clink2, clink3, clink4].filter(Boolean);

  return (
    <div className="contact-card">
      <div className="card-container">
        <div className="image-container">
          <img
            src={cimageurls[0] ?? defaultImage}
            alt={cname}
            className="contact-image"
            loading="lazy"
          />
          <div className="image-overlay">
            <h2 className="contact-name">{cname}</h2>
            <div className="location">
              <i className="fa-solid fa-location-dot" />
              <span>{clocation}</span>
            </div>
          </div>
        </div>

        <div className="contact-details">
          <div className="contact-info">
            <p className="phone">{cphonenumber}</p>
            <p className="email">{cemail}</p>
          </div>

          {links?.length > 0 && (
            <div className="contact-links">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  🔗 Link {index + 1}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default Contact;
