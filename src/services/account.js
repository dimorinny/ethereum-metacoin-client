import {getAddresses} from './address';
import provideMetacoin from '../contract/metacoin';

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
