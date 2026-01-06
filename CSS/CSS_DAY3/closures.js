function openAccount (initialBalance){
    let balance = initialBalance;

    return {
        deposit: function(amount){
            balance += amount;
            return balance;
        },
        withdraw: function(amount){
            if(balance >= amount){
                balance -= amount
                return balance;
            }
            return "Insufficient Balance";
        },
        getBalance: function(){
            return balance;
        }
    }
}

const myAccount = openAccount(100);
console.log(myAccount.deposit(50));
console.log(myAccount.withdraw(80)); 
console.log(myAccount.getBalance()); 