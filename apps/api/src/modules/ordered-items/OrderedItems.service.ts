import { Injectable } from '@nestjs/common';

import {
  GetByOrder,
  GetByOrderSelectType,
} from './closures/get-by-order.closure';

@Injectable()
export class OrderedItemsService {
  constructor(private readonly getByOrder: GetByOrder) {}

  async getBy(idOrder: number): Promise<Array<GetByOrderSelectType>> {
    return this.getByOrder.from(idOrder);
  }
}
