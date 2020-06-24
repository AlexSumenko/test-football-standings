import React from 'react';
import PropTypes from 'prop-types';

import TeamLogo from '../Tables/CompetitionTable/TeamLogo';

const teamInfo = React.memo(props => {
  return (
    <>
      <TeamLogo
        crestUrl={props.teamCrestUrl}
        alt={`${props.teamName} Logo`}
        width="200px"
        height="200px"
      />
      <h2>{props.teamName}</h2>
      <br />
      <p>
        <strong>Country:</strong> {props.teamCountry}
      </p>
      <p>
        <strong>Stadium:</strong> {props.teamVenue}
      </p>
      <p>
        <strong>Website:</strong>{' '}
        <a href={props.teamWebsite}>{props.teamWebsite}</a>
      </p>
    </>
  );
});

teamInfo.propTypes = {
  teamCrestUrl: PropTypes.string,
  teamName: PropTypes.string,
  teamCountry: PropTypes.string,
  teamVenue: PropTypes.string,
  teamWebsite: PropTypes.string,
};

export default teamInfo;
