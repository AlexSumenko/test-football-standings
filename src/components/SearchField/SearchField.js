import React from 'react';
import PropTypes from 'prop-types';

const searchField = props => {
  return (
    <div className="form-group">
      <input
        className="form-control"
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
};

searchField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

searchField.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
};

export default searchField;
