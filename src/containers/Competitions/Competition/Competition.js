import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

import CompetitionTable from '../../../components/Tables/CompetitionTable/CompetitionTable';

const Competition = props => {
  const { setCompetitionStandings } = props;
  const competitionId = props.match.params.id;
  useEffect(() => {
    setCompetitionStandings(competitionId);
  }, [setCompetitionStandings, competitionId]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <CompetitionTable standings={props.competitionStandings} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    competitionStandings: state.std.competitionStandings,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCompetitionStandings: competitionId =>
      dispatch(actions.retrieveStandings(competitionId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Competition);
