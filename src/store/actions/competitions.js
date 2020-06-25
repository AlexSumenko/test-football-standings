import * as actionTypes from '../actions/actionTypes';
import { getDataWithSubscriptionPlan } from '../../utils/fetch';

export const getCompetitions = competitions => {
  return {
    type: actionTypes.GET_COMPETITIONS,
    competitions: competitions,
  };
};

export const retrieveCompetitions = () => {
  return dispatch => {
    getDataWithSubscriptionPlan('competitions/')
      .then(res => res.json())
      .then(res => {
        dispatch(getCompetitions(res.competitions));
      })
      .catch(err => console.log(err));
  };
};
