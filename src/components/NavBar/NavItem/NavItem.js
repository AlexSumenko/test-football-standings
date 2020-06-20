import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const navItem = props => {
  return (
    <Link className="nav-item nav-link" to={props.path}>
      {props.children}
    </Link>
  );
};

navItem.propTypes = {
  path: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default React.memo(navItem);
