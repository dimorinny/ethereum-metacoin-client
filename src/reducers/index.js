import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import address from './address';
import account from './account';
import send from './send';

export default combineReducers({
    send,
    account,
    address,
    routing
});
