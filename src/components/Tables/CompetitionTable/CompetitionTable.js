import React from 'react';
import PropTypes from 'prop-types';

import TeamLogo from './TeamLogo';

const competitionsTable = props => {
  let competitionStandings = <div className="text-info">Loading table...</div>;
  if (props.standings && props.standings.length > 0) {
    competitionStandings = (
      <table className="table-striped table-hover">
        <thead>
          <tr>
            <th>Position</th>
            <th>Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Drawn</th>
            <th>Lost</th>
            <th>Goals</th>
            <th>Goals Difference</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {props.standings.map(team => {
            return (
              <tr key={team.team.id}>
                <td>{team.position}</td>
                <td>
                  <TeamLogo
                    crestUrl={team.team.crestUrl}
                    alt={`${team.team.name} Logo`}
                    width="16px"
                    height="16px"
                  />
                  {team.team.name}
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
};

competitionsTable.propTypes = {
  competitions: PropTypes.arrayOf(PropTypes.object),
};

export default competitionsTable;
