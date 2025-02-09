
import './App.css'// src/App.tsx
import React from 'react';
import Banner from './components/Banner';
import ImpactHighlights from './components/ImpactHighlights';
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  return (
    <div>
      <Banner />
      <ImpactHighlights />
      <Testimonials />
    </div>
  );
};

export default App;
