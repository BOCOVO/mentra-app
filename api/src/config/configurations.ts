import AppEnvConfigs from '@/types/config';

export default (): AppEnvConfigs => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
  jwt: {
    jwtExpiresIn: process.env.JWT_EXPIRES_IN,
    jwtSecret: process.env.JWT_SECRET,
  },
});
