import { Module } from '@nestjs/common';

import { DatabaseModule } from '@backend/database';

import { CreditCardsService } from './credit-cards.service';

@Module({
  imports: [DatabaseModule],
  providers: [CreditCardsService],
  exports: [CreditCardsService],
})
export class CreditCardsModule {}
