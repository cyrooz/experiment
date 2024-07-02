'use server ';
import jwt from 'jsonwebtoken';

const teamId = process.env.WEATHERKIT_TEAM_ID!;
const keyId = process.env.WEATHERKIT_KEY_ID!;
const serviceId = process.env.WEATHERKIT_SERVICE_ID!;
const privateKey = process.env.WEATHERKIT_PRIVATE_KEY!.replace(/\\n/g, '\n');

export const createWeatherKitToken = () => {
  const header = {
    alg: 'ES256',
    kid: keyId,
  };

  const payload = {
    iss: teamId,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 3600, // Token is valid for 1 hour
    sub: serviceId,
  };

  const token = jwt.sign(payload, privateKey, { header, algorithm: 'ES256' });
  return token;
};
