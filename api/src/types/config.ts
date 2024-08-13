interface GoogleConfig {
  clientId: string;
  clientSecret: string;
}

interface JWTConfig {
  jwtSecret: string;
  jwtExpiresIn: string;
}

interface GoogleAIConfig {
  apiKey: string;
}

export default interface AppEnvConfigs {
  port: number;
  google: GoogleConfig;
  jwt: JWTConfig;
  googleAI: GoogleAIConfig;
}
