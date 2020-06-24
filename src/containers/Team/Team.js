import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import SearchField from '../../components/SearchField/SearchField';
import FakePlayerAddForm from '../../components/FakePlayerAddForm/FakePlayerAddForm';
import TeamPlayersTable from '../../components/Tables/TeamPlayersTable/TeamPlayersTable';
import TeamInfo from '../../components/TeamInfo/TeamInfo';

const Team = props => {
  const [searchValue, setSearchValue] = useState('');
  const [playerToAddValue, setPlayerToAddValue] = useState('');
  const [playersFilteredList, setPlayersFilteredList] = useState([]);
  const { setTeam } = props;
  const teamId = props.match.params.id;

  useEffect(() => {
    setTeam(teamId);
  }, [setTeam, teamId]);

  useEffect(() => {
    const playersList = [...props.playersFullList];
    setPlayersFilteredList(
      playersList.filter(player => player.name.includes(searchValue))
    );
  }, [props.playersFullList, searchValue]);

  const addPlayerHandler = playerName => {
    const newPlayersList = [...playersFilteredList];
    newPlayersList.push({
      id: Date.now(),
      name: playerName,
      dateOfBirth: '1992-03-04T00:00:00Z',
      nationality: 'Test',
      position: 'Test',
    });
    setPlayersFilteredList(newPlayersList);
    setPlayerToAddValue('');
  };

  const deletePlayerHandler = playerId => {
    setPlayersFilteredList(
      playersFilteredList.filter(player => player.id !== playerId)
    );
  };

  let teamInfo = <h3>Team info</h3>;
  if (props.team) {
    teamInfo = (
      <>
        <h3>Team info</h3>
        <TeamInfo
          teamCrestUrl={props.team.crestUrl}
          teamName={props.team.name}
          teamCountry={props.team.area.name}
          teamVenue={props.team.venue}
          teamWebsite={props.team.website}
        />
      </>
    );
  }

  let squadInfo = <div className="text-info">Loading players...</div>;
  if (playersFilteredList) {
    squadInfo = (
      <TeamPlayersTable
        players={playersFilteredList}
        deleted={playerId => deletePlayerHandler(playerId)}
      />
    );
  }

  return (
    <div className="Container">
      <div className="row">
        <div className="col-sm-3">{teamInfo}</div>
        <div className="col-sm-8">
          <h3>Players</h3>
          <SearchField
            type="text"
            placeholder="Search Players"
            value={searchValue}
            changed={event => setSearchValue(event.target.value)}
          />
          <hr />
          <FakePlayerAddForm
            name={playerToAddValue}
            changed={event => setPlayerToAddValue(event.target.value)}
            clicked={playerName => addPlayerHandler(playerToAddValue)}
          />
          <hr />
          {squadInfo}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    team: state.team.team,
    playersFullList: state.team.playersFullList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTeam: teamId => dispatch(actions.retrieveTeam(teamId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Team);
