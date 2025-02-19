//import React from 'react';
import BookExchange from './BookExchange'; // Ensure the path is correct
import './Exchange.css'; // Optionally, add a CSS file for styling

const Exchange = () => {
  return (
    <div className="exchange-container">
      <h1 className="exchange-title">Book Exchange</h1>
      <BookExchange /> {/* Ensure BookExchange is being used here */}
    </div>
  );
};

export default Exchange;
