import React, { useState, useEffect } from 'react';

import TeamLogo from '../../components/Tables/CompetitionTable/TeamLogo';
import { getData } from '../../utils/fetch';

const Team = props => {
  const [team, setTeam] = useState(null);
  const teamId = props.match.params.id;
  useEffect(() => {
    getData(`teams/${teamId}`)
      .then(res => res.json())
      .then(res => {
        setTeam(res);
      })
      .catch(err => console.log(err));
  }, [teamId]);

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

  return (
    <div className="Container">
      <div className="row">
        <div className="col-sm-4">{teamInfo}</div>
        <div className="col-sm-8">
          <h3>Players</h3>
        </div>
      </div>
    </div>
  );
};

export default Team;
