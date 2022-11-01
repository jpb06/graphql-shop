import { UseInterceptors } from '@nestjs/common';
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Order } from '@prisma/client';

import { OrderedItemsService } from '../ordered-items/OrderedItems.service';
import { GetByOrderSelectType } from '../ordered-items/closures/get-by-order.closure';
import { GqlOrderedItem } from '../ordered-items/dtos/gql-ordered-item.dto';
import { GqlOrder } from './dtos/gql-order.dto';
import { OrdersService } from './orders.service';
import { GetOrderItemsTransform } from './transform/getOrderItems.transform';

@Resolver(GqlOrder)
export class OrdersResolver {
  constructor(
    private orders: OrdersService,
    private orderedItems: OrderedItemsService
  ) {}

  @Query(() => [GqlOrder], { name: 'orders' })
  async getAll(): Promise<Array<Order>> {
    return this.orders.getAll();
  }

  @ResolveField('items', () => [GqlOrderedItem])
  @UseInterceptors(new GetOrderItemsTransform())
  async getOrderItems(
    @Parent() { id }: GqlOrder
  ): Promise<Array<GetByOrderSelectType>> {
    return this.orderedItems.getBy(id);
  }
}
