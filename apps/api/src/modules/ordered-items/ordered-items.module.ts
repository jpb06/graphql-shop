import { Module } from '@nestjs/common';

import { DatabaseModule } from '@backend/database';

import { GetByOrderClosure } from './closures/get-by-order.closure';
import { OrderedItemsService } from './ordered-items.service';

@Module({
  imports: [DatabaseModule],
  providers: [OrderedItemsService, GetByOrderClosure],
  exports: [OrderedItemsService],
})
export class OrderedItemsModule {}
