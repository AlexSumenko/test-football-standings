import React from 'react';
import { Link } from 'react-router-dom';

import NavItem from './NavItem/NavItem';
import { HomeIcon } from './NavItem/HomeIcon';

const navBar = () => {
  return (
    <div
      className="navbar navbar-expand-sm bg-dark"
      style={{ marginBottom: '30px' }}
    >
      <div className="navbar-nav">
        <Link to="/">
          <HomeIcon />
        </Link>
        <NavItem path="/competitions">Competitions</NavItem>
        <NavItem path="/results">Results</NavItem>
        <NavItem path="/fixtures">Upcoming matches</NavItem>
      </div>
    </div>
  );
};

export default React.memo(navBar);
