import { Injectable } from '@nestjs/common';

import {
  GetByOrderClosure,
  GetByOrderSelectType,
} from './closures/get-by-order.closure';

@Injectable()
export class OrderedItemsService {
  constructor(private readonly getByOrderClosure: GetByOrderClosure) {}

  async getBy(idOrder: number): Promise<Array<GetByOrderSelectType>> {
    return this.getByOrderClosure.from(idOrder);
  }
}
