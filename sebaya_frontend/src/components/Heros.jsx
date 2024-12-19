import { useRef, useEffect, useState } from 'react';
import Typed from 'typed.js';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Heros = () => {
  const typedElement = useRef(null);
  const navigate = useNavigate();
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  useEffect(() => {
    if (typedElement.current) {
      const options = {
        strings: ["TEMUKAN BATAS DAERAHMU"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      };

      const typed = new Typed(typedElement.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  const handleSearchClick = () => {
    console.log("Mencari batas daerah...");
    // Tambahkan logika pencarian batas daerah di sini
  };

  const handleProtectedRouteClick = (path) => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      navigate(path);
    } else {
      setShowLoginPopup(true);
    }
  };

  const closePopup = () => {
    setShowLoginPopup(false);
  };

  return (
    <>
      <section className="hero-section">
        <div className="overlay"></div>
        <div className="content">
          <h1 ref={typedElement}></h1>
          <div className="search-bar">
            <input type="text" placeholder="Cari batas daerahmu..." />
            <button onClick={handleSearchClick}>Cari</button>
          </div>
        </div>
      </section>

      {showLoginPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Anda belum login</h2>
            <p>Silakan login terlebih dahulu untuk mengakses halaman ini.</p>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={closePopup}>Tutup</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Heros;
