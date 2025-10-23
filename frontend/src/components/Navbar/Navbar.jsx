import React, { useEffect } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import useAuth from "../../context/auth-provider/use-auth";
import { getUser } from "../../helpers/user.helper";
import useIsMobile from "../../hooks/useIsMobile";
import "./Navbar.css";
import { scrollToTop } from "../../helpers/utils";

const Navbar = () => {
  const user = getUser();
  const { isMobile, menuOpen, setMenuOpen } = useIsMobile();
  const { logout } = useAuth();

  useEffect(() => {
    document.body.style.overflow = menuOpen && isMobile ? "hidden" : "";
  }, [menuOpen, isMobile]);

  const navItems = [
    { title: "Home", href: "/Home" },
    { title: "About", href: "/About" },
    { title: "Contact", href: "/Contact" },
    { title: "Places", href: "/Location" },
  ];

  return (
    <header className="header">
      <nav className="navbar">
        <a href="/home" className="navbar-brand">
          DESTINATION TOURISM
        </a>

        {isMobile && (
          <button
            className="menu-icon"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}

        <div className={`navbar-menu ${menuOpen && isMobile ? "open" : ""}`}>
          <div className="nav-links">
            {navItems.map(({ title, href }) => (
              <a key={href} href={href} className="nav-link">
                {title}
              </a>
            ))}
          </div>

          <div className="auth-section">
            {user ? (
              <div className="user-dropdown">
                <div className="user-info">
                  <FaUser />
                  <span className="user-name">{user.name}</span>
                </div>
                <select
                  className="user-select"
                  onChange={(e) => {
                    if (e.target.value === "profile") {
                      window.location.href = "/profile";
                    } else if (e.target.value === "logout") {
                      logout();
                    }
                  }}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Option
                  </option>
                  <option value="profile">Profile</option>
                  <option value="logout">Logout</option>
                </select>
              </div>
            ) : (
              <div className="auth-buttons">
                <a href="/auth" className="auth-link fill">
                  Login
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
