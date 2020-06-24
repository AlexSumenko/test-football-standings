import React, { useState, useEffect } from 'react';

import SearchField from '../../components/SearchField/SearchField';
import TeamPlayersTable from '../../components/Tables/TeamPlayersTable/TeamPlayersTable';
import TeamInfo from '../../components/TeamInfo/TeamInfo';
import { getData } from '../../utils/fetch';

const Team = props => {
  const [team, setTeam] = useState(null);
  const [searchValue, setSearchValue] = useState('');
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

  let squadInfo = <div className="text-info">Loading players...</div>;
  if (playersFilteredList) {
    squadInfo = <TeamPlayersTable players={playersFilteredList} />;
  }
  return (
    <div className="Container">
      <div className="row">
        <div className="col-sm-4">{teamInfo}</div>
        <div className="col-sm-7">
          <h3>Players</h3>
          <SearchField
            type="text"
            placeholder="Search Players"
            value={searchValue}
            changed={event => setSearchValue(event.target.value)}
          />
          {squadInfo}
        </div>
      </div>
    </div>
  );
};

export default Team;
