const { GET, getObjectFromResponse } = require('../../util');

module.exports = async function getPaymentMethod(config, customerId, paymentMethodId) {
  const response = await GET(config, `Customers/${customerId}/PaymentMethod/${paymentMethodId}`);

  return getObjectFromResponse('vaultPaymentMethod', response);
}
