import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';

import { DatabaseService, selectProduct } from '@backend/database';

export type GetBySelectType = Product & {
  Category: {
    id: number;
    name: string;
  };
};

@Injectable()
export class GetBy {
  public static Include = selectProduct({
    Category: true,
  });

  constructor(private readonly db: DatabaseService) {}

  async from(id: number): Promise<GetBySelectType> {
    return this.db.product.findFirst({
      where: {
        id,
      },
      include: GetBy.Include,
    });
  }
}
