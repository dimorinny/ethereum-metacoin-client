import typeToReducer from 'type-to-reducer';
import {LOAD_ADDRESSES} from '../constants';

const ADDRESSES_DEFAULT_STATE = {
    addresses: [],
    isPending: false,
    error: null
};

export default typeToReducer({
    [LOAD_ADDRESSES]: {
        PENDING: (state, action) => ({
            ...state,
            isPending: true,
            error: null
        }),
        REJECTED: (state, action) => ({
            ...state,
            isPending: false,
            error: "Load addresses error"
        }),
        FULFILLED: (state, action) => ({
            ...state,
            addresses: action.payload,
            isPending: false,
            error: null
        })
    }
}, ADDRESSES_DEFAULT_STATE);
