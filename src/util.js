import fetch from 'node-fetch';

function buildAuthorizationHeader({ id, key }) {
  const auth = `${id}:${key}`;
  const encoded = new Buffer(auth).toString('base64');

  return `Basic ${encoded}`;
}

function withDeveloperApplication(config, body) {
  return Object.assign(
    {
      developerApplication: {
        developerId: config.secureNetDeveloperId,
        version: config.secureNetAppVersion
      }
    },
    body
  );
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

export async function PUT(config, path, body) {
  const response = await fetch(`https://gwapi.demo.securenet.com/api/${path}`, {
    method: 'PUT',
    body: JSON.stringify(withDeveloperApplication(config, body)),
    headers: {
      'Content-Type': 'application/json',
      Authorization: buildAuthorizationHeader(config.credentials)
    }
  });

  const json = await response.json()

  return json
}


export async function POST(config, path, body) {
  const response = await fetch(`https://gwapi.demo.securenet.com/api/${path}`, {
    method: 'POST',
    body: JSON.stringify(withDeveloperApplication(config, body)),
    headers: {
      'Content-Type': 'application/json',
      Authorization: buildAuthorizationHeader(config.credentials)
    }
  });

  const json = await response.json()

  return json
}
