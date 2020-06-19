import React from 'react';

import NavItem from './NavItem/NavItem';
import './NavBar.scss';

const navBar = () => {
  return (
    <div className="NavBar">
      <NavItem to="/competitions">Competitions</NavItem>
      <NavItem to="/competitions">Results</NavItem>
      <NavItem to="/competitions">Upcoming matches</NavItem>
    </div>
  );
};

export default React.memo(navBar);
