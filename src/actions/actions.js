import * as types from '../constants/actionTypes';
import RestService from '../services/RestService';

// example of a thunk using the redux-thunk middleware
export function getData() {
    return function(dispatch) {
        return RestService.get('./cv.json').then(function(data) {
            if (data && !arguments[2]) {
                    dispatch({
                    type: types.GET_FUEL_SAVINGS_SUCCESS,
                    data: data
                });
            } else {
                //todo: handle error
            }
        }).catch(function(e) {
            throw (e);
        });
    };
}