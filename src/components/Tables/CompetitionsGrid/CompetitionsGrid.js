import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const competitionsGrid = props => {
  let grid = <div className="text-info">Loading competitions...</div>;
  if (props.competitions && props.competitions.length > 0) {
    grid = props.competitions.map(competition => {
      return (
        <Link to={`competitions/${competition.id}`} key={competition.id}>
          <div className="card">
            <div className="card-body">{competition.name}</div>
            <div className="card-footer">{competition.area.name}</div>
          </div>
        </Link>
      );
    });
  }
  return <div className="card-columns">{grid}</div>;
};

competitionsGrid.propTypes = {
  competitions: PropTypes.arrayOf(PropTypes.object),
};

export default competitionsGrid;
