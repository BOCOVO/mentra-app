import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import configurations from './config/configurations';
import { mikroOrmModuleConfig } from './config/mikro-orm.config';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { GoogleAuthModule } from './modules/google-auth/google-auth.module';
import { UploadService } from './modules/upload/upload.service';
import { UploadController } from './modules/upload/upload.controller';
import { UploadModule } from './modules/upload/upload.module';
import { ExpenseExtractorModule } from './modules/expense-extractor/expense-extractor.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configurations],
      isGlobal: true,
    }),
    MikroOrmModule.forRootAsync(mikroOrmModuleConfig),
    AuthModule,
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: process.env.GRAPHQL_PLAYGROUND === 'true',
      autoSchemaFile: true,
    }),
    GoogleAuthModule,
    UploadModule,
    ExpenseExtractorModule,
    CategoryModule,
  ],
  controllers: [AppController, UploadController],
  providers: [AppService, UploadService],
})
export class AppModule {}
