import { Injectable } from '@nestjs/common';
import { CreditCard, Order, OrderedItem, Product } from '@prisma/client';

import { DatabaseService, selectOrder } from '@backend/database';

export type GetUserOrderSelectType = Pick<Order, 'createdAt'> & {
  CreditCard: Pick<CreditCard, 'number' | 'expires'>;
  OrderedItem: Array<
    { Product: Pick<Product, 'id' | 'name' | 'price'> } & Pick<
      OrderedItem,
      'quantity'
    >
  >;
};

@Injectable()
export class GetUserOrderClosure {
  public static Include = selectOrder({
    createdAt: true,
    CreditCard: {
      select: {
        number: true,
        expires: true,
      },
    },
    OrderedItem: {
      select: {
        quantity: true,
        Product: {
          select: {
            id: true,
            name: true,
            price: true,
          },
        },
      },
    },
  });

  constructor(private readonly db: DatabaseService) {}

  async for(userId: number, orderId: number): Promise<GetUserOrderSelectType> {
    return this.db.order.findFirst({
      where: {
        idUser: userId,
        id: orderId,
      },
      select: GetUserOrderClosure.Include,
    });
  }
}
