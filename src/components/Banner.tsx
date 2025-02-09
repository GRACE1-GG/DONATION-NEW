// src/components/Banner.tsx
import React from 'react';
import './Banner.css'; // Assuming you will write custom styles or use Tailwind

const Banner: React.FC = () => {
  return (
    <div className="banner-container">
      <h1 className="banner-title">Donate Books or Money</h1>
      <div className="cta-buttons">
        <button className="cta-button">Donate Books or Money</button>
        <button className="cta-button">Find or Exchange Books</button>
      </div>
    </div>
  );
};

export default Banner;
