import { config as loadEnvs } from 'dotenv';

import { getDBConfig } from './config/mikro-orm.config';

loadEnvs();

export default getDBConfig;
