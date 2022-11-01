import { Module } from '@nestjs/common';

import { DatabaseModule } from '@backend/database';

import { OrderedItemsService } from './OrderedItems.service';
import { GetByOrder } from './closures/get-by-order.closure';

@Module({
  imports: [DatabaseModule],
  providers: [OrderedItemsService, GetByOrder],
  exports: [OrderedItemsService],
})
export class OrderedItemsModule {}
