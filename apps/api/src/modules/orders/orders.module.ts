import { Module } from '@nestjs/common';

import { DatabaseModule } from '@backend/database';

import { OrderedItemsModule } from '../ordered-items/OrderedItems.module';
import { OrdersResolver } from './orders.resolver';
import { OrdersService } from './orders.service';

@Module({
  imports: [DatabaseModule, OrderedItemsModule],
  providers: [OrdersService, OrdersResolver],
  exports: [OrdersService, OrdersResolver],
})
export class OrdersModule {}
