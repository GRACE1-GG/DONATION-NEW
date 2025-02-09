import React, { useState, useEffect } from 'react';

const ImpactHighlights: React.FC = () => {
  const [totalBooks, setTotalBooks] = useState<number>(0);
  const [activeExchanges, setActiveExchanges] = useState<number>(0);
  const [schoolsReached, setSchoolsReached] = useState<number>(0);

  // Fetch impact data from API (simulated)
  useEffect(() => {
    const fetchImpactData = async () => {
      // Replace with your actual API endpoint once backend is set up
      try {
        const response = await fetch('http://localhost:8000/api/impact'); // Example URL
        const data = await response.json();
        setTotalBooks(data.totalBooks);
        setActiveExchanges(data.activeExchanges);
        setSchoolsReached(data.schoolsReached);
      } catch (error) {
        console.error('Error fetching impact data:', error);
      }
    };

    fetchImpactData();
  }, []); // Empty array ensures it only runs once on component mount

  return (
    <div className="impact-highlights">
      <div className="highlight-item">
        <h2>Total Books Donated</h2>
        <p>{totalBooks}</p>
      </div>
      <div className="highlight-item">
        <h2>Active Book Exchanges</h2>
        <p>{activeExchanges}</p>
      </div>
      <div className="highlight-item">
        <h2>Schools Reached</h2>
        <p>{schoolsReached}</p>
      </div>
    </div>
  );
};

export default ImpactHighlights;
