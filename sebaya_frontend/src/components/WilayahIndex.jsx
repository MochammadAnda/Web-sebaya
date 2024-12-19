import React from 'react';
import './style.css'; // Pastikan kamu punya file CSS ini untuk styling

const WilayahIndex = () => {
  const wilayah = [
    { nama: "KOTA SEMARANG", img: '/src/assets/petaJateng.png' }, // Gambar-gambar wilayah
    { nama: "KAB. WONOSOBO", img: '/src/assets/petaJateng.png' },
    { nama: "KAB. KUDUS", img: '/src/assets/petaJateng.png'},
    { nama: "KAB. BATANG", img: '/src/assets/petaJateng.png' },
    { nama: "KAB. SRAGEN", img: '/src/assets/petaJateng.png' },
    { nama: "KAB. BANYUMAS", img: '/src/assets/petaJateng.png' },
  ];

  return (
    <section className="wilayah-section">
      <h2 className="section-title">WILAYAH</h2>
      <div className="wilayah-grid">
        {wilayah.map((item, index) => (
          <div className="wilayah-card" key={index}>
            <img src={item.img} alt={item.nama} className="wilayah-image" />
            <div className="wilayah-name">{item.nama}</div>
          </div>
        ))}
      </div>
      <div className="lihat-lebih">
        <a href="#">Lihat lebih banyak</a>
      </div>
    </section>
  );
};

export default WilayahIndex;
