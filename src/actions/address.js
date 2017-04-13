import {createAction} from 'redux-actions';
import {LOAD_ADDRESSES} from '../constants';
import {getAddresses} from '../services/address';

export const loadAddresses = createAction(LOAD_ADDRESSES, getAddresses);
