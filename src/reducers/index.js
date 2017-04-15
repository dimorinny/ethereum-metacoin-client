import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import address from './address';
import account from './account';

export default combineReducers({
    account,
    address,
    routing
});
