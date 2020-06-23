import React, { useState, useEffect } from 'react';

import SearchField from '../../components/SearchField/SearchField';
import TeamPlayersTable from '../../components/Tables/TeamPlayersTable/TeamPlayersTable';
import TeamLogo from '../../components/Tables/CompetitionTable/TeamLogo';
import { getData } from '../../utils/fetch';

const Team = props => {
  const [team, setTeam] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [playersList, setPlayersList] = useState([]);
  const teamId = props.match.params.id;
  useEffect(() => {
    getData(`teams/${teamId}`)
      .then(res => res.json())
      .then(res => {
        setTeam(res);
        setPlayersList(res.squad);
      })
      .catch(err => console.log(err));
  }, [teamId]);

  useEffect(() => {
    setPlayersList(
      playersList.filter(player => player.name.includes(searchValue))
    );
  }, [searchValue]);

  let teamInfo = <h3>Team info</h3>;
  if (team) {
    teamInfo = (
      <>
        <h3>Team info</h3>
        <TeamLogo
          crestUrl={team.crestUrl}
          alt={`${team.name} Logo`}
          width="200px"
          height="200px"
        />
        <h2>{team.name}</h2>
        <br />
        <p>
          <strong>Country:</strong> {team.area.name}
        </p>
        <p>
          <strong>Stadium:</strong> {team.venue}
        </p>
        <p>
          <strong>Website:</strong> <a href={team.website}>{team.website}</a>
        </p>
      </>
    );
  }

  let squadInfo = <div className="text-info">Loading players...</div>;
  if (playersList) {
    squadInfo = <TeamPlayersTable players={playersList} />;
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
