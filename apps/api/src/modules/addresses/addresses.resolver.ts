import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { Address } from '@prisma/client';

import { LoggedUserContext } from '../auth/contexts/logged-user.context';
import { JwtPayload } from '../auth/dtos/jwt-payload.dto';
import { GqlAuthGuard } from '../auth/guards/graphql-auth.guard';
import { AddressesService } from './addresses.service';
import { GqlAddress } from './dtos/gql.address.dto';

@Resolver(GqlAddress)
export class AddressesResolver {
  constructor(private addresses: AddressesService) {}

  @Query(() => [GqlAddress], { name: 'myAddresses' })
  @UseGuards(GqlAuthGuard)
  async getMyAddresses(
    @LoggedUserContext() { id }: JwtPayload
  ): Promise<Array<Address>> {
    return this.addresses.getByUser(id);
  }
}
