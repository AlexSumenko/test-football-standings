import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './TeamPlayersTable.scss';

const teamPlayersTable = props => {
  const playerClickHandler = playerId => {
    props.history.push(`/players/${playerId}`);
  };
  let playersTable = <div className="text-info">Loading players...</div>;
  if (props.players && props.players.length > 0) {
    playersTable = (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Age</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
          {props.players.map(player => {
            return (
              <tr
                className="team-players-table__tr"
                key={player.id}
                onClick={() => playerClickHandler(player.id)}
              >
                <td>{player.name}</td>
                <td>{player.position ? player.position : player.role}</td>
                <td>{player.nationality}</td>
                <td>{player.dateOfBirth}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  return <div className="table-responsive">{playersTable}</div>;
};

teamPlayersTable.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
};

export default withRouter(teamPlayersTable);
