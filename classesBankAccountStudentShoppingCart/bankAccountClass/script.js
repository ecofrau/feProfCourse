class BankAccount {
    constructor(accountNumber) {
        this.balance = 0;
        this.accountNumber = accountNumber;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`you are depositing this amount: ${amount}. current balance: ${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("not enough amouut.");
        } else {
            this.balance -= amount;
            console.log(`you withdraw: ${amount}. current balance: ${this.balance}`);
        }
    }

    checkBalance() {
        console.log(`current balanceс: ${this.balance}`);
    }
}

let myAccount = new BankAccount("DE2323456789");
myAccount.deposit(100);
myAccount.withdraw(50);
myAccount.checkBalance();
myAccount.withdraw(100);