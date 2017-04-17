## Ethereum metacoin client

This repo was created to demonstrate how you can create ethereum DApp using [react](https://github.com/facebook/react) and [redux](https://github.com/reactjs/redux). This project is based on [this](https://github.com/dimorinny/react-redux-starter) starter. For testing, deploying and compiling contracts [truffle framework](http://truffleframework.com/) is used.

##### This project demonstrate:

* Interaction with web3
* Using call methods of smart contract
* Sending transaction

### Demo

This contract is deployed to ropsten test network [here](http://metacoin.westeurope.cloudapp.azure.com/). Don't forget to use [Mist](https://github.com/ethereum/mist) or [MetaMask](https://github.com/MetaMask) for authorization.

### Get started with dev network

Clone project:

```
git clone https://github.com/dimorinny/ethereum-metacoin-client
```

Install dependencies:

```
yarn install
```

Compile contracts:

```
truffle compile
```

Run development local ethereum blockchain using [test-rpc](https://github.com/ethereumjs/testrpc) in another console tab:

```
testrpc
```

Deploy contracts using migration:

```
truffle migrate
```

Start development server:

```
yarn run dev
```

Open browser:

```
open http://localhost:3000
```

### Deploy Metacoin to real network

For deploying distributed applications to real blockchain, firstly you should start rpc server of your local ethereum node using, for example, [geth](https://github.com/ethereum/go-ethereum):

```
geth --testnet --rpcapi "db,eth,net,web3,personal,web3" --rpc
```

Coinbase account of node should be unlocked and has enough money for contract deploying. You can unlock account using http rpc like this:

```
curl -X POST --data '{"jsonrpc":"2.0","method":"personal_unlockAccount","params":["<account>", "<password>", 3600],"id":67}' http://localhost:8545
```

Then you can compile and deploy your contract to real network. For deploying contract to Ropsten test network you should execute:

```
truffle compile
truffle deploy --network ropsten
```

That's all, your contract has deployed to ropsten test network. Now you sould build frontend part using: 

```
yarn run build
```

and deploy `build` directory to your host. Clients can communicate with contract using [Mist](https://github.com/ethereum/mist) or [MetaMask](https://github.com/MetaMask) projects for authorization in blockchain using his accounts.
