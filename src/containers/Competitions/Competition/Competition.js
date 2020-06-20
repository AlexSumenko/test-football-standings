import React, { useState, useEffect } from 'react';

import CompetitionTable from '../../../components/Tables/CompetitionTable/CompetitionTable';

import { getData } from '../../../utils/fetch';

const Competition = props => {
  const [competitionStandings, setCompetitionStandings] = useState([]);
  const competitionId = props.match.params.id;
  useEffect(() => {
    getData(`competitions/${competitionId}/standings`)
      .then(res => res.json())
      .then(res => {
        setCompetitionStandings(res.standings[0].table);
      });
  }, [competitionId]);
  return (
    <div className="container">
      <CompetitionTable standings={competitionStandings} />
    </div>
  );
};

export default Competition;
