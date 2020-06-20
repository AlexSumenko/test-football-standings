import React from 'react';
import { Link } from 'react-router-dom';

import './Homepage.scss';

const homepage = () => {
  return (
    <div className="container">
      <div className="Homepage-cards">
        <Link to="/competitions">
          <div className="card Homepage-card">Competitions</div>
        </Link>
        <Link to="/results">
          <div className="card Homepage-card">Results</div>
        </Link>
        <Link to="/fixtures">
          <div className="card Homepage-card">Upcoming matches</div>
        </Link>
      </div>
    </div>
  );
};

export default homepage;
