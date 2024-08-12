import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { LoginResponse } from './dtos/login-response.dtos';
import { LoginArgs } from './dtos/login-payload.dtos';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  async login(@Args() args: LoginArgs): Promise<LoginResponse> {
    return this.authService.loginWithGoogle(args);
  }

  // to remove added to avoid this error : GraphQLError: Query root type must be provided
  @Query(() => Boolean)
  queryPlaceholder() {
    return true;
  }
}
