const { POST, getObjectFromResponse } = require('../../util');

module.exports = async function capture(config, amount, transactionId) {
  const body = {
    amount,
    transactionId
  };

  const response = await POST(config, `Payments/Capture`, body);

  return getObjectFromResponse('transaction', response);
}
