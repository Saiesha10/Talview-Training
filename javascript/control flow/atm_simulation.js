// ATM Simulation
let balance = 1000;
let option = 2; // 1: Check Balance, 2: Deposit, 3: Withdraw


switch (option) {
  case 1:
    console.log("Your balance is: $" + balance);
    break;

  case 2:
    let deposit = 500;
    balance += deposit;
    console.log("Deposited $" + deposit);
    console.log("New balance: $" + balance);
    break;

  case 3:
    let withdraw = 300;
    if (withdraw <= balance) {
      balance -= withdraw;
      console.log("Withdrawn $" + withdraw);
    } else {
      console.log("Insufficient funds");
    }
    console.log("Remaining balance: $" + balance);
    break;

  default:
    console.log("Invalid option");
}
