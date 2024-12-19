import React from 'react';
import './style.css'; 

const imageBox = (
  <div className="tentang-image-box">
    <img src='/src/assets/petaJateng.png' alt="Peta Central Java" className="tentang-image" />
  </div>
);

const contentBox = (
  <div className="tentang-content-box">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
);

const TentangIndex = () => {
  return (
    <section className="tentang-section">
      <h2 className="section-title">TENTANG</h2>
      <div className="tentang-container">
        {imageBox}
        {contentBox}
      </div>
    </section>
  );
};

export default TentangIndex;
