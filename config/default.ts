import dotenv from 'dotenv';
dotenv.config();

export default {
  port: 1337,
  dbUri: 'mongodb://127.0.0.1:27017/ts_node_new',
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  accessTokenPrivateKey: `${process.env.ACCESS_TOKEN_PRIVATE_KEY}`,
  accessTokenPublicKey: `${process.env.ACCESS_TOKEN_PUBLIC_KEY}`,
  refreshTokenPrivateKey: `${process.env.REFRESH_PRIVATE_KEY}`,
  refreshTokenPublicKey: `${process.env.REFRESH_PUBLIC_KEY}`,
};
