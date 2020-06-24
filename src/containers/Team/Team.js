import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import SearchField from '../../components/SearchField/SearchField';
import FakePlayerAddForm from '../../components/FakePlayerAddForm/FakePlayerAddForm';
import TeamPlayersTable from '../../components/Tables/TeamPlayersTable/TeamPlayersTable';
import TeamInfo from '../../components/TeamInfo/TeamInfo';

const Team = props => {
  const [searchValue, setSearchValue] = useState('');
  const [playersFilteredList, setPlayersFilteredList] = useState([]);
  const { setTeam, addPlayer, deletePlayer, setPlayerToAddValue } = props;
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
    addPlayer(playerName);
    setPlayerToAddValue('');
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
        deleted={playerId => deletePlayer(playerId)}
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
            changed={event => setPlayerToAddValue(event.target.value)}
            clicked={playerName => addPlayerHandler(props.playerToAddValue)}
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
    playerToAddValue: state.team.playerToAdd,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTeam: teamId => dispatch(actions.retrieveTeam(teamId)),
    addPlayer: playerName => dispatch(actions.addPlayer(playerName)),
    deletePlayer: playerId => dispatch(actions.deletePlayer(playerId)),
    setPlayerToAddValue: playerToAdd =>
      dispatch(actions.setPlayerToAdd(playerToAdd)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Team);
