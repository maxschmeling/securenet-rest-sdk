const { POST, getObjectFromResponse } = require('../util');

async function createCustomer(config, customer) {
  const response = await POST(config, 'Customers', customer);

  return getObjectFromResponse('vaultCustomer', response);
}
