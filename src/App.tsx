//import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Donate from './components/Donate';
import Confirmation from './components/Confirmation';
import Exchange from './components/Exchange'; // Ensure correct path
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/exchange" element={<Exchange />} />
      </Routes>
    </Router>
  );
};

export default App;
