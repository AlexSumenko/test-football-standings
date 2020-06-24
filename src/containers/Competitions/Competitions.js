import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import CompetitionsGrid from '../../components/Tables/CompetitionsGrid/CompetitionsGrid';

const Competitions = props => {
  const { setCompetitions } = props;
  useEffect(() => {
    setCompetitions();
  }, [setCompetitions]);
  return (
    <div className="container">
      <CompetitionsGrid />
    </div>
  );
};

const dispatchStateToProps = dispatch => {
  return {
    setCompetitions: () => dispatch(actions.retrieveCompetitions()),
  };
};

export default connect(null, dispatchStateToProps)(Competitions);
