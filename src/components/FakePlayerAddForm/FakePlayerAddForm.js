import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const fakePlayerAddForm = React.memo(props => (
  <form>
    <div className="form-group">
      <input
        style={{ minWidth: '100%' }}
        type="text"
        placeholder="Enter fake player name to simulate local state update"
        value={props.name}
        onChange={props.changed}
      />
    </div>
    <button className="btn btn-primary" type="button" onClick={props.clicked}>
      Add fake player
    </button>
  </form>
));

fakePlayerAddForm.propTypes = {
  name: PropTypes.string.isRequired,
  changed: PropTypes.func,
  clicked: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    name: state.team.playerToAdd,
  };
};

export default connect(mapStateToProps)(fakePlayerAddForm);
