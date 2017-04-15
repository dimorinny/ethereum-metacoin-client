## Ethereum metacoin client

This repo was created to demonstrate how you can create ethereum DApp using [react](https://github.com/facebook/react) and [redux](https://github.com/reactjs/redux). This project is based on [this](https://github.com/dimorinny/react-redux-starter) starter. For testing, deploying and compiling contracts [truffle framework](http://truffleframework.com/) is used.

##### This project demonstrate:

* Interaction with web3
* Using call methods of smart contract
* Sending transaction

### Get started at dev network

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
