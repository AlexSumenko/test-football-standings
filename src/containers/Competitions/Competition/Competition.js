import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

import CompetitionTable from '../../../components/Tables/CompetitionTable/CompetitionTable';

const Competition = props => {
  const { setCompetitionStandings, clearCompetitionStandings } = props;
  const competitionId = props.match.params.id;
  useEffect(() => {
    setCompetitionStandings(competitionId);
    return () => {
      clearCompetitionStandings();
    };
  }, [setCompetitionStandings, competitionId, clearCompetitionStandings]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <CompetitionTable />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setCompetitionStandings: competitionId =>
      dispatch(actions.retrieveStandings(competitionId)),
    clearCompetitionStandings: () => dispatch(actions.clearStandings()),
  };
};

export default connect(null, mapDispatchToProps)(Competition);
