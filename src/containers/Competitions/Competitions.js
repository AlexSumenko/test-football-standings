import React, { useState, useEffect } from 'react';
import { getDataWithSubscriptionPlan } from '../../utils/fetch';

import CompetitionsGrid from '../../components/Tables/CompetitionsGrid/CompetitionsGrid';

const Competitions = () => {
  const [competitions, setCompetitions] = useState([]);
  useEffect(() => {
    getDataWithSubscriptionPlan('competitions/')
      .then(res => res.json())
      .then(res => {
        setCompetitions(res.competitions);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="container">
      <CompetitionsGrid competitions={competitions} />
    </div>
  );
};

export default Competitions;
