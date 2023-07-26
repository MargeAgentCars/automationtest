/*
Prompt asking for the amount the user is paying.  Also tell the user how much 
they owe.
A function that takes the amount the user paying
The function should subtract the amount payed from the original cost
The function should return the difference from the calculation
You then need a statement that will give 1 of 3 different responses. 
You can just use the console.log() statement.
You gave the exact amount.
You gave too much. Your change due is $x.xx.
You gave too little. You still owe $x.xx.
*/

let amount = prompt("Enter the amount to pay")

function calculateChange(amount) {
    let owed = 100
    var diff = owed - paid;
    
    return diff

}

if (calculateChange(amount) == 0){
    console.log("You gave the exact amount.")
}
else if(calculateChange(amount) > 0){
    console.log("You gave too much, Your change due is $"+calculateChange(amount) )
}
else if(calculateChange(amount) < 0){
    console.log("You gave too little. You still owe $"+calculateChange(amount) )
}

calculateChange(amount)

// Prompt asking for the amount the user is paying. Also tell the user how much 
// they owe.

const prompt = require("prompt-sync")();

const originalCost = prompt("What is the original cost? ");
const amountPaid = prompt("How much are you paying? ");

// A function that takes the amount the user paying
// The function should subtract the amount payed from the original cost
// The function should return the difference from the calculation

const calculateChange = (amountPaid, originalCost) => {
  const difference = amountPaid - originalCost;
  return difference;
};

// You then need a statement that will give 1 of 3 different responses. 
// You can just use the console.log() statement.
// You gave the exact amount.
// You gave too much. Your change due is $x.xx.
// You gave too little. You still owe $x.xx.

const giveResponse = (difference) => {
  if (difference === 0) {
    console.log("You gave the exact amount.");
  } else if (difference > 0) {
    console.log("You gave too much. Your change due is $" + difference);
  } else {
    console.log("You gave too little. You still owe $" + Math.abs(difference));
  }
};

// Call the calculateChange function and giveResponse function

const difference = calculateChange(amountPaid, originalCost);
giveResponse(difference);

const calculateChange = (amountPaid, originalCost) => {
    const difference = amountPaid - originalCost;
    return difference;
  };