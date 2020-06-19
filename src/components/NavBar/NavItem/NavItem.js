import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import './NavItem.scss';

const navItem = props => {
  return (
    <Link className="NavItem" to={props.path}>
      {props.children}
    </Link>
  );
};

navItem.propTypes = {
  path: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default React.memo(navItem);
