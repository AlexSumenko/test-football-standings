import React from 'react';
import PropTypes from 'prop-types';

const competitionsGrid = props => {
  let grid = <div className="text-info">Loading competitions...</div>;
  if (props.competitions && props.competitions.length > 0) {
    grid = props.competitions.map(competition => {
      return (
        <div className="card" key={competition.id}>
          <div className="card-body">{competition.name}</div>
          <div className="card-footer">{competition.area.name}</div>
        </div>
      );
    });
  }
  console.log(grid);
  return <div className="card-columns">{grid}</div>;
};

competitionsGrid.propTypes = {
  competitions: PropTypes.arrayOf(PropTypes.object),
};

export default competitionsGrid;
