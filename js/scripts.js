// Use constructor functions and prototypes to create a webpage where a user can create a single bank account with an initial deposit amount. Then allow the user to make withdrawals, deposits and see the balance of the account.
//
// Remember to create a BankAccount constructor and a prototype that includes methods for deposit and withdrawal and any other properties needed. Here is an example wireframe to help you visualize the app:

// if time allows, add:
// report name + balance with prototype
// account creation with password

var accounts = {};
//business logic
function BankAccount(username, initialDeposit) {
  this.username = username;
  this.balance = parseFloat(initialDeposit);
  this.nameBalance = function() {
    return this.username + ", your balance is $" + this.balance;
  }
  this.withdrawal = function(withdrawalAmount) {
    withdrawalAmount = parseFloat(withdrawalAmount);
    return this.balance -= withdrawalAmount;
  }
  this.deposit = function(depositAmount) {
    depositAmount = parseFloat(depositAmount);
    return this.balance += depositAmount;
  }
}

function createAccount(username, initialDeposit) {
  accounts[name] = new BankAccount(username, initialDeposit);
  console.log(accounts);
}

// user interface logic
$(document).ready(function() {
  $("#register").submit(function(event) {
    event.preventDefault();
    debugger;
    var username = $("#username").val();
    var initialDeposit = $("#initialDeposit").val();
    createAccount(username, initialDeposit);
    $(".balance").show();
    $(".deposit").show();
    $(".withdraw").show();
    $("#balance").text(accounts[name].nameBalance());
  })
  $(".deposit").submit(function(event) {
    event.preventDefault();
    var depositAmount = $("#depositAmount").val();
    accounts[name].deposit(depositAmount);
    $("#balance").text(accounts[name].nameBalance());
  });
  $("#withdraw").submit(function(event) {
    event.preventDefault();
    var withdrawAmount = $("#withdrawAmount").val();
    accounts[name].withdrawal(withdrawAmount);
    $("#balance").text(accounts[name].nameBalance());
  });
});
