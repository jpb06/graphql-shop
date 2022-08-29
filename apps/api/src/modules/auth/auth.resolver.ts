import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { AuthService } from './auth.service';
import { LoginContext } from './contexts/login.context';
import { GqlAuthOutput } from './dtos/gql-auth-output.dto';
import { GqlLoginInput } from './dtos/gql-login-input.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { UserWithoutPassword } from './util/without-password.util';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => GqlAuthOutput)
  @UseGuards(LocalAuthGuard)
  async login(
    @Args('input') input: GqlLoginInput,
    @LoginContext() user: UserWithoutPassword
  ): Promise<GqlAuthOutput> {
    return this.authService.getAuthData(user);
  }
}
