import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { GoogleAuthService } from '../google-auth/google-auth.service';
import { UsersService } from '../users/users.service';
import { AuthProvider } from '../users/enums/enums';

import { WrongAuthToken } from './errors/WrongAuthToken';
import { LoginArgs } from './dtos/login-payload.dtos';
import { LoginResponse } from './dtos/login-response.dtos';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly googleAuthService: GoogleAuthService,
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async loginWithGoogle(loginArgs: LoginArgs): Promise<LoginResponse> {
    try {
      const googleUser =
        await this.googleAuthService.getProfileByToken(loginArgs);
      const user = await this.userService.getUser(
        googleUser,
        AuthProvider.Google,
      );

      // create token
      const token = await this.createToken(user.id);

      return {
        token,
      };
    } catch (error) {
      if (error instanceof WrongAuthToken) {
        this.logger.error(
          {
            message: 'Invalid id token',
          },
          error,
        );
      }

      throw error;
    }
  }

  async createToken(userID: string): Promise<string> {
    const payload = { id: userID };
    const token = await this.jwtService.signAsync(payload);

    return token;
  }
}
