import * as types from '../constants/actionTypes';
import axios from 'axios';

// example of a thunk using the redux-thunk middleware
export function getData() {
    return function(dispatch) {
        return axios.get('./cv.json').then(function(res) {
            dispatch({
                type: types.GET_FUEL_SAVINGS_SUCCESS,
                data: res.data
            });
        }).catch(function(e) {
            throw (e);
        });
    };
}