import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configure-store';

const store = configureStore({});
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history }>
            { routes }
        </Router>
    </Provider>,
    document.getElementById('root')
);

// import provideWeb3 from './contract/web3';
// import provideMetacoin from './contract/metacoin';
//
// let MetaCoin;
//
// // The following code is simple to show off interacting with your contracts.
// // As your needs grow you will likely need to change its form and structure.
// // For application bootstrapping, check out window.addEventListener below.
// let accounts;
// let account;
//
// window.App = {
//     start: function () {
//         const self = this;
//
//         MetaCoin = provideMetacoin();
//
//         // Get the initial account balance so it can be displayed.
//         provideWeb3().eth.getAccounts(function (err, accs) {
//             if (err != null) {
//                 alert('There was an error fetching your accounts.');
//                 return;
//             }
//
//             if (accs.length == 0) {
//                 alert('Couldn't get any accounts! Make sure your Ethereum client is configured correctly.');
//                 return;
//             }
//
//             accounts = accs;
//             account = accounts[0];
//
//             self.refreshBalance();
//         });
//     },
//
//     setStatus: function (message) {
//         const status = document.getElementById('status');
//         status.innerHTML = message;
//     },
//
//     refreshBalance: function () {
//         const self = this;
//
//         let meta;
//         MetaCoin.deployed().then(function (instance) {
//             meta = instance;
//             return meta.getBalance.call(account, {from: account});
//         }).then(function (value) {
//             const balance_element = document.getElementById('balance');
//             balance_element.innerHTML = value.valueOf();
//         }).catch(function (e) {
//             console.log(e);
//             self.setStatus('Error getting balance; see log.');
//         });
//     },
//
//     sendCoin: function () {
//         const self = this;
//
//         const amount = parseInt(document.getElementById('amount').value);
//         const receiver = document.getElementById('receiver').value;
//
//         this.setStatus('Initiating transaction... (please wait)');
//
//         let meta;
//         MetaCoin.deployed().then(function (instance) {
//             meta = instance;
//             return meta.sendCoin(receiver, amount, {from: account});
//         }).then(function () {
//             self.setStatus('Transaction complete!');
//             self.refreshBalance();
//         }).catch(function (e) {
//             console.log(e);
//             self.setStatus('Error sending coin; see log.');
//         });
//     }
// };
//
// window.addEventListener('load', function () {
//     App.start();
// });
