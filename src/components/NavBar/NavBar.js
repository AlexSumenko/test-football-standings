import React from 'react';
import { Link } from 'react-router-dom';

import { HomeIcon } from './HomeIcon';

const navBar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm bg-dark"
      style={{ marginBottom: '30px' }}
    >
      <div className="navbar-nav">
        <Link to="/">
          <HomeIcon />
        </Link>
      </div>
    </nav>
  );
};

export default React.memo(navBar);
