import React from 'react';
import PropTypes from 'prop-types';
import { calculateAgeInYears } from '../../../utils/helpers';

const teamPlayersTable = props => {
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
              <tr key={player.id}>
                <td>{player.name}</td>
                <td>{player.position ? player.position : player.role}</td>
                <td>{calculateAgeInYears(player.dateOfBirth)}</td>
                <td>{player.nationality}</td>
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

export default teamPlayersTable;
