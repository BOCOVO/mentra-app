import { MikroOrmModuleAsyncOptions } from '@mikro-orm/nestjs';

import dbConfig from '../mikro-orm.config';

export const mikroOrmModuleConfig: MikroOrmModuleAsyncOptions = {
  useFactory: dbConfig,
};
