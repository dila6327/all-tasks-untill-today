// Create a createBankAccountWithInterest function that simulates a bank account with interest accumulation.
// :
// The function should return an object with:
// deposit(amount): Deposits money into the account.
// withdraw(amount): Withdraws money from the account.
// checkBalance(): Returns the current balance.
// addInterest(rate): Adds interest to the balance (based on a percentage rate).
// : Use closures to maintain and update the balance and interest rate privately.


function createBankAccountWithInterest()
{
   let current_balance=4000;
    let interest_rate=current_balance*10/100;
return bank={
deposit:function(amount)
{
    current_balance+=amount;
},
Withdraw:function(amount)
{
    if(amount>current_balance)
    {
        console.log ('You do not have enough money');
    }
    else{
current_balance-=amount;}
},
checkBalance:function()
{
    return 'Your balance : '+ current_balance;
},
addInterest:function()
{
current_balance+=interest_rate;
}
}
}
let do_smth=createBankAccountWithInterest();
do_smth.Withdraw(500);
console.log(do_smth.checkBalance());