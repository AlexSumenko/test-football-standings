import React, { useState, useEffect } from 'react';

import SearchField from '../../components/SearchField/SearchField';
import FakePlayerAddForm from '../../components/FakePlayerAddForm/FakePlayerAddForm';
import TeamPlayersTable from '../../components/Tables/TeamPlayersTable/TeamPlayersTable';
import TeamInfo from '../../components/TeamInfo/TeamInfo';
import { getData } from '../../utils/fetch';

const Team = props => {
  const [team, setTeam] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [playerToAddValue, setPlayerToAddValue] = useState('');
  const [playersFilteredList, setPlayersFilteredList] = useState([]);
  const [playersFullList, setPlayersFullList] = useState([]);
  const teamId = props.match.params.id;

  useEffect(() => {
    getData(`teams/${teamId}`)
      .then(res => res.json())
      .then(res => {
        setTeam(res);
        setPlayersFullList(res.squad);
        setPlayersFilteredList(res.squad);
      })
      .catch(err => console.log(err));
  }, [teamId]);

  useEffect(() => {
    const playersList = [...playersFullList];
    setPlayersFilteredList(
      playersList.filter(player => player.name.includes(searchValue))
    );
  }, [searchValue]);

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
  if (team) {
    teamInfo = (
      <>
        <h3>Team info</h3>
        <TeamInfo
          teamCrestUrl={team.crestUrl}
          teamName={team.name}
          teamCountry={team.area.name}
          teamVenue={team.venue}
          teamWebsite={team.website}
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

export default Team;
