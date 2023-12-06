// auth.js
const axios = require('axios');

async function getAccessToken(clientId, clientSecret, redirectUri, authorizationCode) {
  const tokenEndpoint = 'https://accounts.spotify.com/api/token';
  const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  try {
    const tokenResponse = await axios.post(
      tokenEndpoint,
      new URLSearchParams({
        grant_type: 'authorization_code',
        code: authorizationCode,
        redirect_uri: redirectUri,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${authHeader}`,
        },
      }
    );

    return tokenResponse.data.access_token;
  } catch (error) {
    throw new Error(`Fehler beim Abrufen des Access Tokens: ${error.message}\n${JSON.stringify(error.response?.data, null, 2)}`);
  }
}

module.exports = {
  getAccessToken,
};
