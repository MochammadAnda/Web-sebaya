import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    setActiveLink(path);
    navigate(path);
  };

  return (
    <nav id="header" className="navbar">
      <div className="nav-logo">
        {/* Logo */}
      </div>
      <div className="nav-menu">
        <ul className="nav-menu-list">
          {/* Menu Links */}
          <li className={`nav-item ${activeLink === "/" ? "active-link" : ""}`}>
            <Link to="/" onClick={() => handleLinkClick("/")}>
              Beranda
            </Link>
          </li>
          <li className={`nav-item ${activeLink === "/wilayah" ? "active-link" : ""}`}>
            <Link to="/wilayah" onClick={() => handleLinkClick("/wilayah")}>
              Wilayah
            </Link>
          </li>
          <li className={`nav-item ${activeLink === "/tentang" ? "active-link" : ""}`}>
            <Link to="/tentang" onClick={() => handleLinkClick("/tentang")}>
              Tentang
            </Link>
          </li>
          <li className={`nav-item ${activeLink === "/galeri" ? "active-link" : ""}`}>
            <Link to="/galeri" onClick={() => handleLinkClick("/galeri")}>
              Galeri
            </Link>
          </li>
          <li className={`nav-item ${activeLink === "/kontak" ? "active-link" : ""}`}>
            <Link to="/kontak" onClick={() => handleLinkClick("/kontak")}>
              Kontak
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-button">
        {/* Login Button */}
        <Link to="/login" className="btn btn-login">
          Masuk
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
