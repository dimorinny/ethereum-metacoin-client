import {getAddresses} from './address';
import provideMetacoin from '../contract/metacoin';

// TODO: think about current active account

export function getAccount() {
    let address;

    return getAddresses(1)
        .then(accounts => {
            address = accounts[0];
        })
        .then(_ => provideMetacoin().deployed())
        .then(instance => instance.getBalance.call(address, {from: address}))
        .then(balance => ({
            address,
            balance: balance.valueOf()
        }));
}

export function sendMoney(actions, receiver, value) {
    let address;

    return getAddresses(1)
        .then(accounts => {
            address = accounts[0];
        })
        .then(_ => provideMetacoin().deployed())
        .then(instance => instance.sendCoin(receiver, value, {from: address}))
        .then(_ => actions.loadAccount());
}
