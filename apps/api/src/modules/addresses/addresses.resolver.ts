import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Address } from '@prisma/client';

import { AddressesService } from './addresses.service';
import { GqlNewAddressArgs } from './dtos/gql-new-address-args.dto';
import { GqlAddress } from './dtos/gql.address.dto';
import { GqlNewAddressOutput } from './dtos/gql.new-address-output.dto';
import { LoggedUserContext } from '../auth/contexts/logged-user.context';
import { JwtPayload } from '../auth/dtos/jwt-payload.dto';
import { GqlAuthGuard } from '../auth/guards/graphql-auth.guard';

@Resolver()
export class AddressesResolver {
  constructor(private addresses: AddressesService) {}

  @Query(() => [GqlAddress], { name: 'myAddresses' })
  @UseGuards(GqlAuthGuard)
  async getMyAddresses(
    @LoggedUserContext() { id }: JwtPayload
  ): Promise<Array<Address>> {
    return this.addresses.getByUser(id);
  }

  @Mutation(() => GqlNewAddressOutput)
  @UseGuards(GqlAuthGuard)
  async createAddress(
    @Args() input: GqlNewAddressArgs,
    @LoggedUserContext() { id }: JwtPayload
  ): Promise<Address> {
    return this.addresses.create(id, input);
  }
}
