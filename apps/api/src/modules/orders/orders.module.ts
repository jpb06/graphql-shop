import { Module } from '@nestjs/common';

import { DatabaseModule } from '@backend/database';

import { CreditCardsModule } from '../credit-cards/credit-cards.module';
import { OrderedItemsModule } from '../ordered-items/ordered-items.module';
import { GetUserOrdersClosure } from './closures/get-user-orders.closure';
import { OrdersResolver } from './orders.resolver';
import { OrdersService } from './orders.service';

@Module({
  imports: [DatabaseModule, OrderedItemsModule, CreditCardsModule],
  providers: [OrdersService, OrdersResolver, GetUserOrdersClosure],
  exports: [OrdersService, OrdersResolver],
})
export class OrdersModule {}
