import {createAction} from 'redux-actions';
import {LOAD_ACCOUNT} from '../constants';
import {getAccount} from '../services/account';

export const loadAccount = createAction(LOAD_ACCOUNT, getAccount);
