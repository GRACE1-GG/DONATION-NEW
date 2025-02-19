// src/components/Banner.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css'; // Assuming you will write custom styles or use Tailwind

const Banner: React.FC = () => {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate('/donate');
  };

  const handleFindExchangeClick = () => {
    navigate('/exchange'); // Ensure this matches the route
  };

  return (
    <div className="banner-container">
      <h1 className="banner-title">Donate Books or Money</h1>
      <div className="cta-buttons">
        <button className="cta-button" onClick={handleDonateClick}>Donate Books or Money</button>
        <button className="cta-button" onClick={handleFindExchangeClick}>Find or Exchange Books</button>
      </div>
    </div>
  );
};

export default Banner;
