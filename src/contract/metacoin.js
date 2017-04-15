import contract from 'truffle-contract';
import artifacts from '../../build/contracts/MetaCoin.json';
import {provideWeb3} from './web3';

let _cachedMetacoin;

export function provideMetacoin() {
    if (_cachedMetacoin) {
        return _cachedMetacoin;
    }

    const metacoin = contract(artifacts);
    metacoin.setProvider(provideWeb3().currentProvider);

    _cachedMetacoin = metacoin;

    return metacoin;
}

export function provideDeployedMetacoin() {
    return provideMetacoin().deployed();
}
