const fetch = require('node-fetch');

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

function apiBaseUrl(config) {
  return config.mode === 'live'
    ? 'https://gwapi.securenet.com/api'
    : 'https://gwapi.demo.securenet.com/api';
}

async function GET(config, path) {
  const response = await fetch(`${apiBaseUrl(config)}/${path}`, {
    headers: {
      Authorization: buildAuthorizationHeader(config.credentials)
    }
  });

  return await response.json();
}

async function PUT(config, path, body) {
  const response = await fetch(`${apiBaseUrl(config)}/${path}`, {
    method: 'PUT',
    body: JSON.stringify(withDeveloperApplication(config, body)),
    headers: {
      'Content-Type': 'application/json',
      Authorization: buildAuthorizationHeader(config.credentials)
    }
  });

  return await response.json();
}

async function POST(config, path, body) {
  const response = await fetch(`${apiBaseUrl(config)}/${path}`, {
    method: 'POST',
    body: JSON.stringify(withDeveloperApplication(config, body)),
    headers: {
      'Content-Type': 'application/json',
      Authorization: buildAuthorizationHeader(config.credentials)
    }
  });

  return await response.json();
}

async function DELETE(config, path) {
  const response = await fetch(`${apiBaseUrl(config)}/${path}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: buildAuthorizationHeader(config.credentials)
    }
  });

  return await response.json();
}

function getObjectFromResponse(key, response) {
  if (!response.success)
    throw new Error(`(${response.result}) ${response.message}`);

  return response[key];
}

module.exports = {
  GET,
  POST,
  PUT,
  DELETE,
  getObjectFromResponse
};
