// Use constructor functions and prototypes to create a webpage where a user can create a single bank account with an initial deposit amount. Then allow the user to make withdrawals, deposits and see the balance of the account.
//
// Remember to create a BankAccount constructor and a prototype that includes methods for deposit and withdrawal and any other properties needed. Here is an example wireframe to help you visualize the app:

// if time allows, add:
// report name + balance with prototype
// account creation with password

var accounts = {};
//business logic
function BankAccount(username, initialDeposit) {
  debugger;
  this.username = username;
  this.balance = initialDeposit;
}

function createAccount(username, initialDeposit) {
  accounts[name] = new BankAccount(username, initialDeposit);
  console.log(accounts);
}

BankAccount.prototype.nameBalance = function() {
  return this.username + ", your balance is $" + this.balance;
}

BankAccount.prototype.accountAction = function(depositAmount, withdrawlAmount) {
  if (!withdrawlAmount) {
    withdrawlAmount = 0;
  }
  if (!depositAmount) {
    depositAmount = 0;
  }
  this.balance -= withdrawlAmount;
  this.balance += depositAmount;
  return this.balance;
}

// user interface logic
$(document).ready(function() {
  $("#register").submit(function(event) {
    event.preventDefault();
    debugger;
    var username = $("#username").val();
    var initialDeposit = parseFloat($("#initialDeposit").val());
    createAccount(username, initialDeposit);
    $("#balance").show()
    $("#balance").text(accounts[name].nameBalance());
  })
  $("#accountAction").submit(function(event) {
    event.preventDefault();
    var depositAmount = parseFloat($("#depositAmount").val());
    var withdrawlAmount = parseFloat($("#withdrawlAmount").val());
    accounts[name].accountAction(depositAmount, withdrawlAmount)
    $("#balance").text(accounts[name].nameBalance());
  });
});
