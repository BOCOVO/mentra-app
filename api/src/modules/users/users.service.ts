import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/core';

import { User } from './entities/user.entity';
import { AuthProvider } from './enums/enums';

import { ProviderUserInfo } from '@/types/provider-user-info';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
  ) {}

  async getUser(
    userInfo: ProviderUserInfo,
    provider: AuthProvider,
  ): Promise<User> {
    const user = await this.userRepository.findOne({
      email: userInfo.email,
    });

    if (user) {
      return user;
    }

    const newUser = this.userRepository.create({
      email: userInfo.email,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      socialID: userInfo.id,
      provider,
    });

    await this.userRepository.insert(newUser);

    return newUser;
  }
}
