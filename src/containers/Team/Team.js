import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getData } from '../../utils/fetch';

const Team = props => {
  return (
    <div className="Container">
      <div className="row">
        <div className="col-sm-4">
          <h3>Team info</h3>
        </div>
        <div className="col-sm-8">
          <h3>Players</h3>
        </div>
      </div>
    </div>
  );
};

export default Team;
