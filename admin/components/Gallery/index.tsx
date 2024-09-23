'use client'
import { useState, useEffect } from 'react';
import img1 from '@/assets/img/project-img1.png';
import img2 from '@/assets/img/project-img2.png';
import img3 from '@/assets/img/project-img3.png';

const Galeria = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-64">
      {/* Imágenes */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={image.src} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Flecha Izquierda */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
      >
        &#9664; {/* Símbolo de flecha izquierda */}
      </button>

      {/* Flecha Derecha */}
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600"
      >
        &#9654; {/* Símbolo de flecha derecha */}
      </button>
    </div>
  );
};

export default Galeria;
