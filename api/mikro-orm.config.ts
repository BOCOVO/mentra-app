import { config as loadEnvs } from 'dotenv';

import { getDBConfig } from './src/config/mikro-orm.config';

loadEnvs();

export default getDBConfig;
