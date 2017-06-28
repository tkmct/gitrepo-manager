import { handleActions } from 'redux-actions';
import * as Actions from '../actions/SearchActions';

const INITIAL_STATE = {
  queryString: 'Search Something',
  resultList: [],
};

export const SearchReducer = handleActions({
  [Actions.updateQueryString]: (state, action) => ({
    ...state,
    queryString: action.payload
  }),
}, INITIAL_STATE);

