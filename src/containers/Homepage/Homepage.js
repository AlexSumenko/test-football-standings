import React from 'react';

import './Homepage.scss';

const homepage = () => {
  return (
    <div className="container">
      <div className="Homepage-cards">
        <div className="card bg-info Homepage-card">Competitions</div>
        <div className="card bg-info Homepage-card">Results</div>
        <div className="card bg-info Homepage-card">Upcoming matches</div>
      </div>
    </div>
  );
};

export default homepage;
