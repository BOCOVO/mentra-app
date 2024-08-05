import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import configurations from './config/configurations';
import { mikroOrmModuleConfig } from './config/mikro-orm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configurations],
    }),
    MikroOrmModule.forRootAsync(mikroOrmModuleConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
