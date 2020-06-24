import * as actionTypes from '../actions/actionTypes';
import { getData } from '../../utils/fetch';

export const getStandings = competitionStandings => {
  return {
    type: actionTypes.GET_STANDINGS,
    competitionStandings: competitionStandings,
  };
};

export const retrieveStandings = competitionId => {
  return dispatch => {
    getData(`competitions/${competitionId}/standings`)
      .then(res => res.json())
      .then(res => {
        dispatch(getStandings(res.standings[0].table));
      })
      .catch(err => console.log(err));
  };
};

export const clearStandings = () => {
  return {
    type: actionTypes.CLEAR_STANDINGS,
    competitionStandings: [],
  };
};
