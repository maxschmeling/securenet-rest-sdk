const { POST, getObjectFromResponse } = require('../../util');

async function createPaymentMethod(config, customerId, paymentMethod) {
  const body = Object.assign({ customerId }, paymentMethod);

  const response = await POST(config, `Customers/${customerId}/PaymentMethod`, body);

  return getObjectFromResponse('vaultPaymentMethod', response);
}
