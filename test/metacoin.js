const MetaCoin = artifacts.require('./MetaCoin.sol');

contract('MetaCoin', accounts => {

    it('should put 10000 MetaCoin in the first account', () => {
        return MetaCoin.deployed().then(instance => {
            return instance.getBalance.call(accounts[0]);
        }).then(balance => {
            assert.equal(balance.valueOf(), 10000, '10000 wasn\'t in the first account');
        });
    });

    it('should put 5000 MetaCoin when update method is called', () => {
        let meta;

        return MetaCoin.deployed()
            .then(instance => {
                meta = instance;
            })
            .then(() => meta.updateBalance())
            .then(() => meta.getBalance.call(accounts[0]))
            .then(balance => {
                assert.equal(balance.valueOf(), 15000, '15000 wasn\'t in the updated account');
            });
    });

    it('should call a function that depends on a linked library', () => {
        let meta;
        let metaCoinBalance;
        let metaCoinEthBalance;

        return MetaCoin.deployed().then(instance => {
            meta = instance;
            return meta.getBalance.call(accounts[0]);
        }).then(outCoinBalance => {
            metaCoinBalance = outCoinBalance.toNumber();
            return meta.getBalanceInEth.call(accounts[0]);
        }).then(outCoinBalanceEth => {
            metaCoinEthBalance = outCoinBalanceEth.toNumber();
        }).then(() => {
            assert.equal(
                metaCoinEthBalance,
                2 * metaCoinBalance,
                'Library function returned unexpeced function, linkage may be broken'
            );
        });
    });

    it('should send coin correctly', () => {
        let meta;

        // Get initial balances of first and second account.
        const account_one = accounts[0];
        const account_two = accounts[1];

        let account_one_starting_balance;
        let account_two_starting_balance;
        let account_one_ending_balance;
        let account_two_ending_balance;

        const amount = 10;

        return MetaCoin.deployed().then(instance => {
            meta = instance;
            return meta.getBalance.call(account_one);
        }).then(balance => {
            account_one_starting_balance = balance.toNumber();
            return meta.getBalance.call(account_two);
        }).then(balance => {
            account_two_starting_balance = balance.toNumber();
            return meta.sendCoin(account_two, amount, {from: account_one});
        }).then(() => {
            return meta.getBalance.call(account_one);
        }).then(balance => {
            account_one_ending_balance = balance.toNumber();
            return meta.getBalance.call(account_two);
        }).then(balance => {
            account_two_ending_balance = balance.toNumber();
            assert.equal(
                account_one_ending_balance,
                account_one_starting_balance - amount,
                'Amount wasn\'t correctly taken from the sender'
            );
            assert.equal(
                account_two_ending_balance,
                account_two_starting_balance + amount,
                'Amount wasn\'t correctly sent to the receiver'
            );
        });
    });
});
