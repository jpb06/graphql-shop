import { UseGuards, UseInterceptors } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { LoggedUserContext } from '../auth/contexts/logged-user.context';
import { JwtPayload } from '../auth/dtos/jwt-payload.dto';
import { GqlAuthGuard } from '../auth/guards/graphql-auth.guard';
import { GetByOrderSelectType } from '../ordered-items/closures/get-by-order.closure';
import { GqlOrderedItem } from '../ordered-items/dtos/gql.ordered-item.dto';
import { OrderedItemsService } from '../ordered-items/ordered-items.service';
import { GetUserOrdersSelectType } from './closures/get-user-orders.closure';
import { GqlNewOrderedItem } from './dtos/gql.new-ordered-item.dto';
import { GqlOrder } from './dtos/gql.order.dto';
import { GqlPlaceOrderInput } from './dtos/gql.place-order-input.dto';
import { GqlPlaceOrderOutput } from './dtos/gql.place-order-output.dto';
import { OrdersService } from './orders.service';
import { GetOrderItemsTransform } from './transform/get-order-items.transform';
import { GetUserOrdersTransform } from './transform/get-user-orders.transform';

@Resolver(GqlOrder)
export class OrdersResolver {
  constructor(
    private orders: OrdersService,
    private orderedItems: OrderedItemsService
  ) {}

  @Query(() => [GqlOrder], { name: 'myOrders' })
  @UseGuards(GqlAuthGuard)
  @UseInterceptors(new GetUserOrdersTransform())
  async getMyOrders(
    @LoggedUserContext() { id }: JwtPayload
  ): Promise<Array<GetUserOrdersSelectType>> {
    return this.orders.getUserOrders(id);
  }

  @ResolveField('items', () => [GqlOrderedItem])
  @UseInterceptors(new GetOrderItemsTransform())
  async getOrderItems(
    @Parent() { id }: GqlOrder
  ): Promise<Array<GetByOrderSelectType>> {
    return this.orderedItems.getBy(id);
  }

  @Mutation(() => GqlPlaceOrderOutput)
  @UseGuards(GqlAuthGuard)
  async placeOrder(
    @Args({ name: 'creditCard', type: () => GqlPlaceOrderInput })
    creditCard: GqlPlaceOrderInput,
    @Args({ name: 'orderedItems', type: () => [GqlNewOrderedItem] })
    orderedItems: GqlNewOrderedItem[],
    @LoggedUserContext() { id }: JwtPayload
  ): Promise<GqlPlaceOrderOutput> {
    const orderId = await this.orders.placeOrder(id, creditCard, orderedItems);

    return {
      orderId,
    };
  }
}
