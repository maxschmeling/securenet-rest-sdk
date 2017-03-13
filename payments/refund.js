const { POST, getObjectFromResponse } = require('../util');

module.exports = async function refund(config, transactionId, amount = null) {
  const response = await POST(config, 'Payments/Refund', { transactionId, amount });

  return getObjectFromResponse('transaction', response);
}
