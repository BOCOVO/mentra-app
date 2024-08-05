import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import configurations from './config/configurations';

@Module({
    ConfigModule.forRoot({
      load: [configurations],
    }),
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
