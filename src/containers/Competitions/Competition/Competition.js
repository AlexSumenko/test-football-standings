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
      })
      .catch(err => console.log(err));
  }, [competitionId]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <CompetitionTable standings={competitionStandings} />
        </div>
      </div>
    </div>
  );
};

export default Competition;
