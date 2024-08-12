import { ConfigService } from '@nestjs/config';
import { JwtModuleAsyncOptions, JwtModuleOptions } from '@nestjs/jwt';

import AppEnvConfigs from '@/types/config';

export const jwtModuleConfig: JwtModuleAsyncOptions = {
  useFactory: (
    configService: ConfigService<AppEnvConfigs>,
  ): JwtModuleOptions => {
    const jwtConfig = configService.get<AppEnvConfigs['jwt']>('jwt');
    return {
      secret: jwtConfig.jwtSecret,
      signOptions: {
        expiresIn: jwtConfig.jwtExpiresIn,
      },
    };
  },
  inject: [ConfigService],
};
