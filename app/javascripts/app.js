import '../stylesheets/app.css';
import currentWeb3 from './web3';
import {default as contract} from 'truffle-contract';
import metacoin_artifacts from '../../build/contracts/MetaCoin.json';

// MetaCoin is our usable abstraction, which we'll use through the code below.
const MetaCoin = contract(metacoin_artifacts);

// The following code is simple to show off interacting with your contracts.
// As your needs grow you will likely need to change its form and structure.
// For application bootstrapping, check out window.addEventListener below.
let accounts;
let account;

window.App = {
    start: function () {
        const self = this;

        // Bootstrap the MetaCoin abstraction for Use.
        MetaCoin.setProvider(web3.currentProvider);

        // Get the initial account balance so it can be displayed.
        web3.eth.getAccounts(function (err, accs) {
            if (err != null) {
                alert("There was an error fetching your accounts.");
                return;
            }

            if (accs.length == 0) {
                alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
                return;
            }

            accounts = accs;
            account = accounts[0];

            self.refreshBalance();
        });
    },

    setStatus: function (message) {
        const status = document.getElementById("status");
        status.innerHTML = message;
    },

    refreshBalance: function () {
        const self = this;

        let meta;
        MetaCoin.deployed().then(function (instance) {
            meta = instance;
            return meta.getBalance.call(account, {from: account});
        }).then(function (value) {
            const balance_element = document.getElementById("balance");
            balance_element.innerHTML = value.valueOf();
        }).catch(function (e) {
            console.log(e);
            self.setStatus("Error getting balance; see log.");
        });
    },

    sendCoin: function () {
        const self = this;

        const amount = parseInt(document.getElementById("amount").value);
        const receiver = document.getElementById("receiver").value;

        this.setStatus("Initiating transaction... (please wait)");

        let meta;
        MetaCoin.deployed().then(function (instance) {
            meta = instance;
            return meta.sendCoin(receiver, amount, {from: account});
        }).then(function () {
            self.setStatus("Transaction complete!");
            self.refreshBalance();
        }).catch(function (e) {
            console.log(e);
            self.setStatus("Error sending coin; see log.");
        });
    }
};

window.addEventListener('load', function () {
    window.web3 = currentWeb3();
    App.start();
});
