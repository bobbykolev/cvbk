import {GET_FUEL_SAVINGS_SUCCESS} from '../constants/actionTypes';
import initialState from './initialState';

export default function mainData(state = initialState.data, action) {
  switch (action.type) {
    case GET_FUEL_SAVINGS_SUCCESS:
      return Object.assign({}, state, action.data || initialState.data);

    default:
      return state;
  }
}
