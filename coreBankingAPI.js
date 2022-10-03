function accountExists(accountId) {
  console.log('accountId', accountId);
  console.log('localStoage', window.localStorage[accountId]);
  console.log('localStoage', window.localStorage[accountId] === '0');
  if (
    !window.localStorage[accountId] &&
    window.localStorage[accountId] !== '0' &&
    window.localStorage[accountId] !== 0
  ) {
    return false;
  } else {
    return true;
  }
}

function createAccount(accountId) {
  if (accountExists(accountId))
    throw Error(`Account with id: ${accountId} already exists`);

  window.localStorage[accountId] = 0;
  return `Account with id: ${accountId} created.`;
}

function getBalance(accountId) {
  let value = +window.localStorage[accountId] || 0;
  return value;
}

function setBalance(accountId, value) {
  window.localStorage[accountId] = value;
  return value;
}

const coreBankingAPI = {
  accountExists,
  createAccount,
  getBalance,
  setBalance,
};

module.exports = coreBankingAPI;
