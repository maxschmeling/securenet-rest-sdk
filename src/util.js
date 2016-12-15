import fetch from 'node-fetch';

function buildAuthorizationHeader({ id, key }) {
  const auth = `${id}:${key}`;
  const encoded = new Buffer(auth).toString('base64');

  return `Basic ${encoded}`;
}

export async function GET(config, path) {
  const response = await fetch(`https://gwapi.demo.securenet.com/api/${path}`, {
    headers: {
      Authorization: buildAuthorizationHeader(config.credentials)
    }
  });

  const json = await response.json()

  return json
}
