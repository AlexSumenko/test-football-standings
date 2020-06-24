import React, { useState, useEffect } from 'react';

import SearchField from '../../components/SearchField/SearchField';
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
  };

  const deletePlayerHandler = playerId => {
    setPlayersFilteredList(
      playersFilteredList.filter(player => player.id !== playerId)
    );
  };

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
          <form>
            <div className="form-group">
              <input
                style={{ minWidth: '100%' }}
                type="text"
                placeholder="Enter fake player name to simulate local state update"
                value={playerToAddValue}
                onChange={event => setPlayerToAddValue(event.target.value)}
              />
            </div>
            <button
              className="btn btn-primary"
              type="button"
              onClick={playerName => addPlayerHandler(playerToAddValue)}
            >
              Add fake player
            </button>
          </form>
          <hr />
          {squadInfo}
        </div>
      </div>
    </div>
  );
};

export default Team;
