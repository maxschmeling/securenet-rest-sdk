const { DELETE, getObjectFromResponse } = require('../../util');

module.exports = async function deletePaymentMethod(config, customerId, paymentMethodId) {
  const response = await DELETE(config, `Customers/${customerId}/PaymentMethod/${paymentMethodId}`);

  return response;
}
