import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';

import { DatabaseService } from '@backend/database';

@Injectable()
export class OrdersService {
  constructor(private readonly db: DatabaseService) {}

  async getUserOrders(userId: number): Promise<Array<Order>> {
    return this.db.order.findMany({
      where: {
        idUser: userId,
      },
    });
  }
}
