import React from 'react';
import './style.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left section */}
        <div className="footer-left">
          <h4>Biro Pemerintahan Otda dan Kerjasama</h4>
          <p>Setda Prov. Jawa Tengah</p>
          <p1>Jl. Pahlawan No. 9, Mugassari, Semarang Selatan, Jawa Tengah, Kode Pos 50243</p1>
        </div>

        {/* Right section */}
        <div className="footer-right">
          <h4-1>Hubungi Kami</h4-1>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <hr />
        <p>© 2024 | Fasilitasi Penataan Wilayah</p>
      </div>
    </footer>
  );
};

export default Footer;
