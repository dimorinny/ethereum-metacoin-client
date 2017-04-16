import contract from 'truffle-contract';
import artifacts from '../../build/contracts/MetaCoin.json';
import {provideWeb3} from './web3';

let _cachedMetacoin;

function _provideMetacoin(web3) {
    if (_cachedMetacoin) {
        return _cachedMetacoin;
    }

    const metacoin = contract(artifacts);
    metacoin.setProvider(web3.currentProvider);

    _cachedMetacoin = metacoin;

    return metacoin;
}

export function provideMetacoin() {
    return provideWeb3()
        .then(_provideMetacoin)
}

export function provideDeployedMetacoin() {
    return provideMetacoin()
        .then(instance => instance.deployed());
}
