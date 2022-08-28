import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { SignupInput } from './dtos/signup-input.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@Resolver(User)
export class UsersResolver {
  constructor(private users: UsersService) {}

  @Query(() => User, { name: 'user' })
  async getBy(@Args('email', { type: () => String }) email: string) {
    return this.users.getBy(email);
  }

  @Mutation(() => User)
  async signup(@Args('input') input: SignupInput) {
    return this.users.signup(input);
  }
}
