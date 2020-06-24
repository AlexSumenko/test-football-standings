import * as actionTypes from '../actions/actionTypes';

const initialState = {
  team: null,
  playersFullList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TEAM:
      return {
        ...state,
        team: action.team,
        playersFullList: action.playersFullList,
      };
    default:
      return state;
  }
};

export default reducer;
