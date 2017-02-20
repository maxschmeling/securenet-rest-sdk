const { GET, getObjectFromResponse } = require('../util');

module.exports = async function getCustomer(config, id) {
  const response = await GET(config, `Customers/${id}`);

  return getObjectFromResponse('vaultCustomer', response);
}
