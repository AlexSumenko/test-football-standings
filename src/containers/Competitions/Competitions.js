import React, { useState, useEffect } from 'react';
import { getData } from '../../utils/fetch';

import CompetitionsGrid from '../../components/Tables/CompetitionsGrid/CompetitionsGrid';

const Competitions = () => {
  const [competitions, setCompetitions] = useState([]);
  useEffect(() => {
    getData('competitions/')
      .then(res => res.json())
      .then(res => {
        console.log(res.competitions);
        setCompetitions(res.competitions);
      }, []);
  });
  return (
    <div className="container">
      <CompetitionsGrid competitions={competitions} />
    </div>
  );
};

export default Competitions;
