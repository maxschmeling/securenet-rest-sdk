const { PUT, getObjectFromResponse } = require('../../util');

module.exports = async function updatePaymentMethod(config, customerId, paymentMethodId, updates) {
  const body = Object.assign({ customerId, paymentMethodId }, updates);

  const response = await PUT(config, `Customers/${customerId}/PaymentMethod/${paymentMethodId}`, body);

  return getObjectFromResponse('vaultPaymentMethod', response);
}
