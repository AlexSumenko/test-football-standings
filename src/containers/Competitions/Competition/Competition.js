import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import CompetitionTable from '../../../components/Tables/CompetitionTable/CompetitionTable';

import { getData } from '../../../utils/fetch';

const Competition = props => {
  const [competitionStandings, setCompetitionStandings] = useState([]);
  useEffect(() => {
    getData('competitions/2021/standings')
      .then(res => res.json())
      .then(res => {
        console.log(res.standings[0].table);
        setCompetitionStandings(res.standings[0].table);
      });
  }, []);
  return (
    <div className="container">
      <CompetitionTable standings={competitionStandings} />
    </div>
  );
};

// Competition.propTypes = {
//   competitionId: PropTypes.number.isRequired,
// };

export default Competition;
