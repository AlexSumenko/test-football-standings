import * as actionTypes from '../actions/actionTypes';
import { getData } from '../../utils/fetch';

export const getTeam = teamData => {
  return {
    type: actionTypes.GET_TEAM,
    team: teamData,
    playersFullList: teamData.squad,
  };
};

export const retrieveTeam = teamId => {
  return dispatch => {
    getData(`teams/${teamId}`)
      .then(res => res.json())
      .then(res => {
        dispatch(getTeam(res));
      })
      .catch(err => console.log(err));
  };
};
