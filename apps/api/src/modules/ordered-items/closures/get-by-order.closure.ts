import { Injectable } from '@nestjs/common';
import { OrderedItem } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';

import { selectOrderedItem, DatabaseService } from '@backend/database';

export type GetByOrderSelectType = Pick<OrderedItem, 'id' | 'quantity'> & {
  Product: {
    id: number;
    name: string;
    image: string;
    price: Decimal;
  };
};

@Injectable()
export class GetByOrderClosure {
  public static Select = selectOrderedItem({
    id: true,
    quantity: true,
    Product: {
      select: {
        id: true,
        name: true,
        image: true,
        price: true,
      },
    },
  });

  constructor(private readonly db: DatabaseService) {}

  async from(orderId: number): Promise<Array<GetByOrderSelectType>> {
    return this.db.order
      .findUnique({ where: { id: orderId } })
      .OrderedItem({ select: GetByOrderClosure.Select });
  }
}
