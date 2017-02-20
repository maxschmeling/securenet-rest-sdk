const { PUT, getObjectFromResponse } = require('../util');

module.exports = async function updateCustomer(config, id, updates) {
  const response = await PUT(config, `Customers/${id}`, updates);

  return getObjectFromResponse('vaultCustomer', response);
}
