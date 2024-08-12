import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OAuth2Client } from 'google-auth-library';

import { LoginArgs } from '../auth/dtos/login-payload.dtos';
import { WrongAuthToken } from '../auth/errors/WrongAuthToken';

import { ProviderUserInfo } from '@/types/provider-user-info';
import AppEnvConfigs from '@/types/config';

@Injectable()
export class GoogleAuthService {
  private google: OAuth2Client;

  constructor(private configService: ConfigService<AppEnvConfigs>) {
    const googleConfig = configService.get<AppEnvConfigs['google']>('google');

    this.google = new OAuth2Client(
      googleConfig.clientId,
      googleConfig.clientSecret,
    );
  }

  async getProfileByToken(loginArgs: LoginArgs): Promise<ProviderUserInfo> {
    const googleConfig =
      this.configService.get<AppEnvConfigs['google']>('google');
    const ticket = await this.google.verifyIdToken({
      idToken: loginArgs.idToken,
      audience: [googleConfig.clientId],
    });

    const data = ticket.getPayload();

    if (!data) {
      throw new WrongAuthToken();
    }

    return {
      id: data.sub,
      email: data.email,
      firstName: data.given_name,
      lastName: data.family_name,
    };
  }
}
