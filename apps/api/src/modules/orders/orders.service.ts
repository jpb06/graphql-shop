import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@backend/database';

import { CreditCardsService } from '../credit-card/credit-cards.service';
import { GqlCreditCard } from '../credit-card/dtos/gql.credit-card.dto';
import {
  GetUserOrdersClosure,
  GetUserOrdersSelectType,
} from './closures/get-user-orders.closure';
import { GqlNewOrderedItem } from './dtos/gql.new-ordered-item.dto';

@Injectable()
export class OrdersService {
  constructor(
    private readonly getUserOdersClosure: GetUserOrdersClosure,
    private readonly creditCardService: CreditCardsService,
    private readonly db: DatabaseService
  ) {}

  async getUserOrders(userId: number): Promise<Array<GetUserOrdersSelectType>> {
    return this.getUserOdersClosure.from(userId);
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

    const cool = orderedItems.map((item) => ({
      ...item,
      idOrder: order.id,
    }));

    console.log('ordered items', cool);

    await this.db.orderedItem.createMany({
      data: cool,
    });

    return order.id;
  }
}
