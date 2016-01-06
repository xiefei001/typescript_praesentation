interface BankAccount {
    balance: number;
    withdraw: (amount:number) =>void;
    deposit: (amount:number) =>void;
}
(function () {
    var x = 20;
    var account:BankAccount = {
        balance: 0,

        withdraw: (amount:number) => {
            this.balance -= amount;
        },

        deposit: function (amount:number) {
            this.balance += amount;
        },
    };

    account.deposit(4000);
    account.withdraw(2000);
    console.log("Balance = $" + account.balance);
})();


// Zweite Beispiel
for (var i = 0; i< 5 ; i++) {
    setTimeout(function () {
        console.log("value of i:" + i);
    }, 1000);
}

for (var i = 0; i< 5 ; i++) {
    setTimeout(() =>console.log("value of i:" + i), 1000);
}

