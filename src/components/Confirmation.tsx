//import React from 'react';
import { useLocation } from 'react-router-dom';
import './Confirmation.css';

const Confirmation = () => {
  const location = useLocation();
  const { amount, message } = location.state || {};

  const shareOnTwitter = () => {
    const url = 'https://twitter.com/intent/tweet?text=I%20just%20donated%20to%20a%20great%20cause!';
    window.open(url, '_blank');
  };

  const shareOnFacebook = () => {
    const url = 'https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com';
    window.open(url, '_blank');
  };

  return (
    <div className="confirmation-container">
      <h1>Thank You for Your Donation!</h1>
      <p className="donation-summary">Donation Amount: ${amount}</p>
      <p className="donation-message">{message}</p>
      <div className="share-buttons">
        <button onClick={shareOnTwitter} className="share-button twitter-button">Share on Twitter</button>
        <button onClick={shareOnFacebook} className="share-button facebook-button">Share on Facebook</button>
      </div>
    </div>
  );
};

export default Confirmation;
