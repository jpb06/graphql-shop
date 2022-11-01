import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';

import { DatabaseService, selectOrder } from '@backend/database';

export type GetUserOrdersSelectType = Order & {
  CreditCard: {
    number: string;
  };
};

@Injectable()
export class GetUserOrdersClosure {
  public static Include = selectOrder({
    CreditCard: {
      select: {
        number: true,
      },
    },
  });

  constructor(private readonly db: DatabaseService) {}

  async from(userId: number): Promise<Array<GetUserOrdersSelectType>> {
    return this.db.order.findMany({
      where: {
        idUser: userId,
      },
      include: GetUserOrdersClosure.Include,
    });
  }
}
