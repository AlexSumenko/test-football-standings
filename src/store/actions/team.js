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

export const deletePlayer = playerId => {
  return {
    type: actionTypes.DELETE_PLAYER,
    playerId: playerId,
  };
};

export const addPlayer = playerName => {
  return {
    type: actionTypes.ADD_PLAYER,
    playerName: playerName,
  };
};

export const setPlayerToAdd = playerToAdd => {
  return {
    type: actionTypes.SET_PLAYER_TO_ADD_VALUE,
    playerToAddValue: playerToAdd,
  };
};

export const clearTeam = () => {
  return {
    type: actionTypes.CLEAR_TEAM,
    team: null,
    playersFullList: [],
  };
};
