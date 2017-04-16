import {provideWeb3} from '../contract/web3';

export function getAddresses(limit) {
    return provideWeb3()
        .then(instance => {
            return new Promise((resolve, reject) => {
                instance.eth.getAccounts((error, accounts) => {
                    if (error) {
                        reject();
                    } else {
                        resolve(accounts.slice(0, limit));
                    }
                });
            });
        });
}
