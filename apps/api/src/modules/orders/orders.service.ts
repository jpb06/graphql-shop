import { Injectable } from '@nestjs/common';

import {
  GetUserOrdersClosure,
  GetUserOrdersSelectType,
} from './closures/get-user-orders.closure';

@Injectable()
export class OrdersService {
  constructor(private readonly getUserOdersClosure: GetUserOrdersClosure) {}

  async getUserOrders(userId: number): Promise<Array<GetUserOrdersSelectType>> {
    return this.getUserOdersClosure.from(userId);
  }
}
