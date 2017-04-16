import {currentAccount} from '../contract/web3';
import {provideDeployedMetacoin} from '../contract/metacoin';

export function getAccount() {
    let address;

    return currentAccount()
        .then(account => {
            address = account;
        })
        .then(provideDeployedMetacoin)
        .then(instance => instance.getBalance.call(address, {from: address}))
        .then(balance => ({
            address,
            balance: balance.valueOf()
        }));
}

export function sendMoney(actions, receiver, value) {
    let address;

    return currentAccount()
        .then(account => {
            address = account;
        })
        .then(provideDeployedMetacoin)
        .then(instance => instance.sendCoin(receiver, value, {from: address}))
        .then(actions.loadAccount);
}

export function updateBalance(actions) {
    let address;

    return currentAccount()
        .then(account => {
            address = account;
        })
        .then(provideDeployedMetacoin)
        .then(instance => instance.updateBalance({from: address}))
        .then(actions.loadAccount);
}
