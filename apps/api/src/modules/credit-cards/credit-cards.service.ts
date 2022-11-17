import { Injectable } from '@nestjs/common';
import { CreditCard } from '@prisma/client';

import { DatabaseService } from '@backend/database';

import { GqlCreditCard } from './dtos/gql.credit-card.dto';

@Injectable()
export class CreditCardsService {
  constructor(private readonly db: DatabaseService) {}

  async ensureCreditCard(creditCard: GqlCreditCard): Promise<CreditCard> {
    const maybeCreditCard = await this.db.creditCard.findFirst({
      where: creditCard,
    });

    if (!maybeCreditCard) {
      return this.db.creditCard.create({
        data: creditCard,
      });
    }

    return maybeCreditCard;
  }
}
