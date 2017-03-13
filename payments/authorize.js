const { POST, getObjectFromResponse } = require('../util');

module.exports = async function authorize(config, body) {
  const response = await POST(config, `Payments/Authorize`, body);

  // emvResponse is also returned on response

  return getObjectFromResponse('transaction', response);
}
