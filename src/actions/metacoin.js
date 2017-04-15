import {createAction} from 'redux-actions';
import {LOAD_ACCOUNT, SEND_MONEY} from '../constants';
import {getAccount, sendMoney} from '../services/metacoin';

export const loadAccount = createAction(LOAD_ACCOUNT, getAccount);
export const send = createAction(SEND_MONEY, sendMoney);
