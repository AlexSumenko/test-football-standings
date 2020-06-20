import React from 'react';
import { Link } from 'react-router-dom';

import NavItem from './NavItem/NavItem';
import { HomeIcon } from './NavItem/HomeIcon';

const navBar = () => {
  return (
    <div className="navbar navbar-expand-sm bg-light">
      <div className="navbar-nav">
        <Link to="/">
          <HomeIcon />
        </Link>
        <NavItem to="/competitions">Competitions</NavItem>
        <NavItem to="/results">Results</NavItem>
        <NavItem to="/fixtures">Upcoming matches</NavItem>
      </div>
    </div>
  );
};

export default React.memo(navBar);
