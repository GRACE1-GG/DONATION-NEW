//import React from 'react';
import Banner from './Banner';
//import ImpactHighlights from './ImpactHighlights';
import Testimonials from './Testimonials';
import './Home.css'; // Ensure your global styles are imported

export default function Home() {
  return (
    <div className="home-container">
      <Banner />
      <div className="content-wrapper">
        
      </div>
      <Testimonials />
    </div>

  );
}
