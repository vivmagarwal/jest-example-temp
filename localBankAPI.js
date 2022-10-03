// We are writing & testing this peiece of code.
// high level code for local branch using the low level api's

const coreBankingAPI = require('./coreBankingAPI');

function increaseBalance(accountId, value) {
  if (!accountId) throw Error(`An accountId is required.`);

  if (!coreBankingAPI.accountExists(accountId))
    throw Error(`account ${accountId} not found`);

  if (!value) throw Error(`A value amount is required.`);

  let oldValue = coreBankingAPI.getBalance(accountId);
  return coreBankingAPI.setBalance(accountId, +oldValue + +value);
}

function decreaseBalance(accountId, value) {
  // if (!accountId) throw Error(`An accountId is required.`);

  if (!coreBankingAPI.accountExists(accountId))
    throw Error(`account ${accountId} not found`);

  let oldValue = coreBankingAPI.getBalance(accountId);
  return coreBankingAPI.setBalance(accountId, +oldValue - +value);
}

function getBalance(accountId) {
  if (!coreBankingAPI.accountExists(accountId)) return;

  return coreBankingAPI.getBalance(accountId);
}

function createAccount(accountId) {
  return coreBankingAPI.createAccount(accountId);
}

const localBankAPI = {
  createAccount,
  increaseBalance,
  decreaseBalance,
  getBalance,
};

module.exports = localBankAPI;
