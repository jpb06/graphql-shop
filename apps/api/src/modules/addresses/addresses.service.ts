import { Injectable } from '@nestjs/common';
import { Address } from '@prisma/client';

import { DatabaseService } from '@backend/database';

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
    });
  }
}
