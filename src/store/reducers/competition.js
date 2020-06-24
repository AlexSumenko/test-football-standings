import * as actionTypes from '../actions/actionTypes';

const initialState = {
  competitionStandings: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_STANDINGS:
      return {
        ...state,
        competitionStandings: action.competitionStandings,
      };
    default:
      return state;
  }
};

export default reducer;
