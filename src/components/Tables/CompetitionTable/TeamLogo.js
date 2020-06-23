import React from 'react';
import PropTypes from 'prop-types';

const teamLogo = props => {
  return (
    <img
      src={props.crestUrl}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  );
};

teamLogo.propTypes = {
  crestUrl: PropTypes.string,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

teamLogo.defaultProps = {
  width: '16px',
  height: '16px',
};

export default React.memo(teamLogo);
