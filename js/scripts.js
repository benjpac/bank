// Use constructor functions and prototypes to create a webpage where a user can create a single bank account with an initial deposit amount. Then allow the user to make withdrawals, deposits and see the balance of the account.
//
// Remember to create a BankAccount constructor and a prototype that includes methods for deposit and withdrawal and any other properties needed. Here is an example wireframe to help you visualize the app:

// if time allows, add:
// report name + balance with prototype
// account creation with password


//business logic
function BankAccount(username, initialDeposit) {
  debugger;
  this.username = username;
  this.balance = initialDeposit;
}

BankAccount.prototype.accountAction = function(withdrawlAmount, depositAmount) {
  this.balance -= withdrawlAmount;
  this.balance += depositAmount;
  return this.balance;
}

// user interface logic
$(document).ready(function() {
  $("#register").submit(function(event) {
    event.preventDefault();
    var username = $("#username").val();
    var initialDeposit = $("#initialDeposit").val();
    var newAccount = new BankAccount(username, initialDeposit);
    debugger;
    $("#balance h3").text(newAccount.balance);
  });
  $("#accountAction").submit(function(event) {
    event.preventDefault();
    var depositAmount = $("#depositAmount").val();
    var withdrawlAmount = $("#withdrawlAmount").val();
    newAccount.accountAction(withdrawlAmount, withdrawlAmount);

  });
});
