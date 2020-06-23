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
        onChange={props.changed}
      />
    </div>
  );
};

searchField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  changed: PropTypes.func,
};

searchField.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
};

export default searchField;
