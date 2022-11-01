import { UseGuards, UseInterceptors } from '@nestjs/common';
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Order } from '@prisma/client';

import { LoggedUserContext } from '../auth/contexts/logged-user.context';
import { JwtPayload } from '../auth/dtos/jwt-payload.dto';
import { GqlAuthGuard } from '../auth/guards/graphql-auth.guard';
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

  @Query(() => [GqlOrder], { name: 'myOrders' })
  @UseGuards(GqlAuthGuard)
  async getMyOrders(
    @LoggedUserContext() { id }: JwtPayload
  ): Promise<Array<Order>> {
    return this.orders.getUserOrders(id);
  }

  @ResolveField('items', () => [GqlOrderedItem])
  @UseInterceptors(new GetOrderItemsTransform())
  async getOrderItems(
    @Parent() { id }: GqlOrder
  ): Promise<Array<GetByOrderSelectType>> {
    return this.orderedItems.getBy(id);
  }
}
