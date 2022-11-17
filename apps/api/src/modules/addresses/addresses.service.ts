import { Injectable } from '@nestjs/common';
import { Address } from '@prisma/client';

import { DatabaseService } from '@backend/database';

import { GqlNewAddressArgs } from './dtos/gql-new-address-args.dto';

@Injectable()
export class AddressesService {
  constructor(private readonly db: DatabaseService) {}

  async getByUser(userId: number): Promise<Array<Address>> {
    return this.db.address.findMany({
      where: {
        JoinUserAddress: {
          some: {
            idUser: userId,
          },
        },
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  async create(
    userId: number,
    addressData: GqlNewAddressArgs
  ): Promise<Address> {
    const address = await this.db.address.create({
      data: addressData,
    });

    await this.db.joinUserAddress.create({
      data: {
        idUser: userId,
        idAddress: address.id,
      },
    });

    return address;
  }
}
