import React from 'react';
import './style.css'; 

const galleryItems = [
  {
    id: 1,
    imgSrc: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  },
  {
    id: 2,
    imgSrc: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  },
  {
    id: 3,
    imgSrc: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  },
  {
    id: 4,
    imgSrc: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  },
  {
    id: 5,
    imgSrc: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  }
];

const GaleriIndex = () => {
  return (
    <div className="gallery-wrapper">
      <h1 className="gallery-title">GALERI</h1> 
      <div className="box-container"> 
        <div className="gallery-container">
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div key={item.id} className="gallery-card">
                <img src={item.imgSrc} alt={`Gallery item ${item.id}`} className="gallery-image" />
                <p className="gallery-description">{item.description}</p>
              </div>
            ))}
          </div>
          <button className="gallery-button">Selengkapnya</button>
        </div>
      </div>
    </div>
  );
};

export default GaleriIndex;
