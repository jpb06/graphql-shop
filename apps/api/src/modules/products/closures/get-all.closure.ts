import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';

import { DatabaseService, selectProduct } from '@backend/database';

export type GetAllSelectType = Product & {
  Category: {
    id: number;
    name: string;
  };
};

@Injectable()
export class GetAll {
  public static Include = selectProduct({
    Category: true,
  });

  constructor(private readonly db: DatabaseService) {}

  async fetch(): Promise<Array<GetAllSelectType>> {
    return this.db.product.findMany({
      include: GetAll.Include,
    });
  }
}
