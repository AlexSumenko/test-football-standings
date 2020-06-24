import * as actionTypes from '../actions/actionTypes';

const initialState = {
  team: null,
  playersFullList: [],
  playerToAdd: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TEAM:
      return {
        ...state,
        team: action.team,
        playersFullList: action.playersFullList,
      };
    case actionTypes.ADD_PLAYER:
      const newPlayersList = [...state.playersFullList];
      newPlayersList.push({
        id: Date.now(),
        name: action.playerName,
        dateOfBirth: '1992-03-04T00:00:00Z',
        nationality: 'Test',
        position: 'Test',
      });
      return {
        ...state,
        playersFullList: newPlayersList,
      };
    case actionTypes.DELETE_PLAYER:
      const newPlayers = [...state.playersFullList].filter(
        player => player.id !== action.playerId
      );
      return {
        ...state,
        playersFullList: newPlayers,
      };
    case actionTypes.SET_PLAYER_TO_ADD_VALUE:
      return {
        ...state,
        playerToAdd: action.playerToAddValue,
      };
    default:
      return state;
  }
};

export default reducer;
