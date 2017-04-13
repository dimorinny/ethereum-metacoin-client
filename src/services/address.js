import provideWeb3 from '../contract/web3';

export function getAddresses(limit) {
    return new Promise((resolve, reject) => {
        provideWeb3().eth.getAccounts((error, accounts) => {
            if (error) {
                reject();
            } else {
                resolve(accounts.slice(0, limit));
            }
        });
    });
}
