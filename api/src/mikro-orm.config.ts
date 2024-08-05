import { MikroORMOptions } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { config as loadEnvs } from 'dotenv';

loadEnvs();

export default (): Partial<MikroORMOptions> => {
  return {
    dbName: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    debug: process.env.DB_DEBUG === 'true',
    entities: ['./dist/**/entities/**.entity.js'],
    entitiesTs: ['./src/**/entities/**.entity.ts'],
    driver: PostgreSqlDriver,
  };
};
