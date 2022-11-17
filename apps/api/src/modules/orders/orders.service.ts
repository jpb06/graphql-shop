import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@backend/database';

import { CreditCardsService } from '../credit-cards/credit-cards.service';
import { GqlCreditCard } from '../credit-cards/dtos/gql.credit-card.dto';
import {
  GetUserOrderClosure,
  GetUserOrderSelectType,
} from './closures/get-user-order.closure';
import {
  GetUserOrdersClosure,
  GetUserOrdersSelectType,
} from './closures/get-user-orders.closure';
import { GqlNewOrderedItem } from './dtos/gql.new-ordered-item.dto';

@Injectable()
export class OrdersService {
  constructor(
    private readonly getUserOrderClosure: GetUserOrderClosure,
    private readonly getUserOrdersClosure: GetUserOrdersClosure,
    private readonly creditCardService: CreditCardsService,
    private readonly db: DatabaseService
  ) {}

  async getUserOrder(
    userId: number,
    orderId: number
  ): Promise<GetUserOrderSelectType> {
    return this.getUserOrderClosure.for(userId, orderId);
  }

  async getUserOrders(userId: number): Promise<Array<GetUserOrdersSelectType>> {
    return this.getUserOrdersClosure.for(userId);
  }

  async placeOrder(
    userId: number,
    creditCardInput: GqlCreditCard,
    orderedItems: Array<GqlNewOrderedItem>
  ): Promise<number> {
    const creditCard = await this.creditCardService.ensureCreditCard(
      creditCardInput
    );

    const order = await this.db.order.create({
      data: {
        idUser: userId,
        idCreditCard: creditCard.id,
      },
    });

    await this.db.orderedItem.createMany({
      data: orderedItems.map((item) => ({
        ...item,
        idOrder: order.id,
      })),
    });

    return order.id;
  }
}
