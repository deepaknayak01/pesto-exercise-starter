const path = require("path");
const fs = require("fs");

const fileContent = fs.readFileSync(
  path.join(__dirname, "dataset.json"),
  "utf-8"
);

const { bankBalances } = JSON.parse(fileContent);

function hundredThousandairs() {
  let accountsOfHundredThousandairs = bankBalances.filter(function(account) {
    return parseFloat(account.amount) > 100000;
  });
  return accountsOfHundredThousandairs;
}

function datasetWithRoundedDollar() {
  let datasetOfRoundedDollar = bankBalances.map(function(element) {
    return {
      amount: element.amount,
      state: element.state,
      rounded: Math.round(element.amount)
    }
  });
  return datasetOfRoundedDollar;
}

function sumOfBankBalances() {
  let sumOfAmount = bankBalances.reduce((total, account) => total + parseFloat(account['amount'] || 0), 0);
  return parseFloat(sumOfAmount.toFixed(2));
}

function sumOfInterests() {
  let state = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];
  let sumOfAmount = bankBalances.reduce(function(total, account) {
    return state.indexOf(account.state) > -1 ? (total + parseFloat(account['amount'])) : total;
  }, 0);

  return getInterest();

  function getInterest() {
    let interest = 18.9;
    return parseFloat(((sumOfAmount * interest) / 100).toFixed(2));
  }
}

function higherStateSums() {}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums
};
