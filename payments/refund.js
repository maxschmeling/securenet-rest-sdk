const { POST, getObjectFromResponse } = require('../util');

module.exports = async function refund(config, transactionId, amount = null) {
  let body = { transactionId };

  if (amount) body.amount = amount;

  const response = await POST(config, 'Payments/Refund', body);

  return getObjectFromResponse('transaction', response);
}
