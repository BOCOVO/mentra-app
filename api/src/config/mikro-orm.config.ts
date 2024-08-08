import { MikroORMOptions } from '@mikro-orm/core';
import { MikroOrmModuleAsyncOptions } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

export const getDBConfig = (): Partial<MikroORMOptions> => {
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

export const mikroOrmModuleConfig: MikroOrmModuleAsyncOptions = {
  useFactory: getDBConfig,
};
