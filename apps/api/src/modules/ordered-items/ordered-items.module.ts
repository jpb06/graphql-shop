import { Module } from '@nestjs/common';

import { DatabaseModule } from '@backend/database';

import { GetByOrder } from './closures/get-by-order.closure';
import { OrderedItemsService } from './ordered-items.service';

@Module({
  imports: [DatabaseModule],
  providers: [OrderedItemsService, GetByOrder],
  exports: [OrderedItemsService],
})
export class OrderedItemsModule {}
