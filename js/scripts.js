// Use constructor functions and prototypes to create a webpage where a user can create a single bank account with an initial deposit amount. Then allow the user to make withdrawals, deposits and see the balance of the account.
//
// Remember to create a BankAccount constructor and a prototype that includes methods for deposit and withdrawal and any other properties needed. Here is an example wireframe to help you visualize the app:

// if time allows, add:
// report name + balance with prototype
// account creation with password


//business logic
function BankAccount(username, initialDeposit) {
  this.username = username;
  this.balance = initialDeposit;
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
    var newAccount = new BankAccount(username, initialDeposit);
    $("#balance").show()
    $("#balance").text(newAccount.nameBalance());
    $("#accountAction").submit(function(event) {
      event.preventDefault();
      var balance = newAccount.balance;
      var depositAmount = parseFloat($("#depositAmount").val());
      var withdrawlAmount = parseFloat($("#withdrawlAmount").val());
      newAccount.accountAction(depositAmount, withdrawlAmount)
      $("#balance").text(newAccount.nameBalance());
    });
  });
});
