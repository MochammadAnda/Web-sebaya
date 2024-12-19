import React from 'react';
import './style.css';

// Mock data for wilayah items
const wilayahItems = [
  { id: 1, name: 'KOTA CILACAP', imgSrc: 'https://via.placeholder.com/150' },
  { id: 2, name: 'KAB. CILACAP', imgSrc: 'https://via.placeholder.com/150' },
  { id: 3, name: 'KOTA MAGELANG', imgSrc: 'https://via.placeholder.com/150' },
  { id: 4, name: 'KAB. MAGELANG', imgSrc: 'https://via.placeholder.com/150' },
  { id: 5, name: 'KOTA SURAKARTA', imgSrc: 'https://via.placeholder.com/150' },
  { id: 6, name: 'KOTA SALATIGA', imgSrc: 'https://via.placeholder.com/150' },
  { id: 7, name: 'KOTA SEMARANG', imgSrc: 'https://via.placeholder.com/150' },
  { id: 8, name: 'KAB. SEMARANG', imgSrc: 'https://via.placeholder.com/150' },
  { id: 9, name: 'KOTA PEKALONGAN', imgSrc: 'https://via.placeholder.com/150' },
  { id: 10, name: 'KAB. PEKALONGAN', imgSrc: 'https://via.placeholder.com/150' },
  { id: 11, name: 'KOTA TEGAL', imgSrc: 'https://via.placeholder.com/150' },
  { id: 12, name: 'KAB. TEGAL', imgSrc: 'https://via.placeholder.com/150' },
  { id: 13, name: 'KAB. BANJARNEGARA', imgSrc: 'https://via.placeholder.com/150' },
  { id: 14, name: 'KAB. BANYUMAS', imgSrc: 'https://via.placeholder.com/150' },
  { id: 15, name: 'KAB. BATANG', imgSrc: 'https://via.placeholder.com/150' }
];

const Wilayah = () => {
  return (
    <div className="wilayah-container">
      <h1 className="wilayah-title">WILAYAH</h1>
      <div className="wilayah-grid">
        {wilayahItems.map((item) => (
          <div key={item.id} className="wilayah-card">
            <img src={item.imgSrc} alt={item.name} className="wilayah-image" />
            <div className="wilayah-name">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wilayah;
