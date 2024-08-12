import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { UsersModule } from '../users/users.module';
import { GoogleAuthModule } from '../google-auth/google-auth.module';

import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';

import { jwtModuleConfig } from '@/config/jwt-module.config';

@Module({
  providers: [AuthService, AuthResolver],
  imports: [
    UsersModule,
    GoogleAuthModule,
    JwtModule.registerAsync(jwtModuleConfig),
  ],
})
export class AuthModule {}
