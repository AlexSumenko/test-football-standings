import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import TeamLogo from './TeamLogo';
import './CompetitionTable.scss';

const competitionsTable = React.memo(props => {
  const teamClickHandler = teamId => {
    props.history.push(`/teams/${teamId}`);
  };

  let competitionStandings = <div className="text-info">Loading table...</div>;
  if (props.standings && props.standings.length > 0) {
    competitionStandings = (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Position</th>
            <th>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Drawn</th>
            <th>Lost</th>
            <th>Goals</th>
            <th>
              Goals
              <br />
              Difference
            </th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {props.standings.map(team => {
            return (
              <tr
                className="competition-table__tr"
                key={team.team.id}
                onClick={() => teamClickHandler(team.team.id)}
              >
                <td>{team.position}</td>
                <td>
                  <TeamLogo
                    crestUrl={team.team.crestUrl}
                    alt={`${team.team.name} Logo`}
                    width="16px"
                    height="16px"
                  />
                  {`  ${team.team.name}`}
                </td>
                <td>{team.playedGames}</td>
                <td>{team.won}</td>
                <td>{team.draw}</td>
                <td>{team.lost}</td>
                <td>{`${team.goalsFor} - ${team.goalsAgainst}`}</td>
                <td>{team.goalDifference}</td>
                <td>{team.points}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  return <div className="table-responsive">{competitionStandings}</div>;
});

competitionsTable.propTypes = {
  competitions: PropTypes.arrayOf(PropTypes.object),
};

export default withRouter(competitionsTable);
