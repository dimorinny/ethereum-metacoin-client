import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import address from './address';

export default combineReducers({
    address,
    routing
});
