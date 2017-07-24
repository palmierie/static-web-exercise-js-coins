var outputCoins = document.getElementById("output");

var clicked = document.getElementById("submit");
var entered = document.getElementById("form");

// USER CLICKS A BUTTON
clicked.addEventListener("click",coinCounter);
form.addEventListener("keyup",function (event) {
  if (event.which === 13) {
    coinCounter;
  }
});

function coinCounter () {
  //PULL INPUT
  var inputMoneyString = document.getElementById("input").value;
  var inputMoney = parseFloat(inputMoneyString);
  // SET COIN RATE
  var coinRate = { quarter: 0.25, dime: 0.1, nickel: 0.05, penny: 0.01};
  // Initialize a JavaScript object to hold the coins
  var coinPurse = { quarters: 0, dimes: 0, nickels: 0, pennies: 0};

// DETERMINE NUMBER OF COINS BASED OFF INPUT
  for (let i = 1; coinRate.quarter <= inputMoney; i++) {
    coinPurse.quarters += 1 ;
    inputMoney -= coinRate.quarter;
  }
  for (let i = 1; coinRate.dime <= inputMoney; i++) {
    coinPurse.dimes += 1 ;
    inputMoney -= coinRate.dime;
  }
  for (var i = 1; coinRate.nickel <= inputMoney; i++) {
    coinPurse.nickels += 1 ;
    inputMoney -= coinRate.nickel;
  }
  for (var i = 1; coinRate.penny <= inputMoney; i++) {
    coinPurse.pennies += 1 ;
    inputMoney -= coinRate.penny;
  }
  console.log('coinPurse', coinPurse.quarters, coinPurse.dimes, coinPurse.nickels, coinPurse.pennies);
// OUTPUT NUMBER OF COINS TO HTML PAGE
  outputCoins.innerHTML = `<li>Quarters: ${coinPurse.quarters}</li><li>Dimes: ${coinPurse.dimes}</li><li>Nickels: ${coinPurse.nickels}</li><li>Pennies: ${coinPurse.pennies}</li>`;
}