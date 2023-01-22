import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { DatabaseService, selectProduct } from '@backend/database';

import { GetAllSelectType } from './get-all.closure';
import { GqlPaginatedProductsInput } from '../dtos/gql.paginated-products.input.dto';

@Injectable()
export class GetPaginatedClosure {
  public static Include = selectProduct({
    Category: true,
  });

  constructor(private readonly db: DatabaseService) {}

  async fetch({
    limit,
    offset,
    categoriesIds,
    text,
    price,
    priceCondition,
    availableStock,
    direction,
    field,
  }: GqlPaginatedProductsInput): Promise<[GetAllSelectType[], number]> {
    const where: Prisma.ProductWhereInput = {
      OR: text && [
        {
          name: { contains: text, mode: 'insensitive' },
        },
        { description: { contains: text, mode: 'insensitive' } },
      ],
      Category: categoriesIds && {
        id: {
          in: categoriesIds,
        },
      },
      stock:
        availableStock === true
          ? {
              gt: 0,
            }
          : undefined,
      price: price &&
        priceCondition !== undefined && {
          [priceCondition]: price,
        },
    };

    return this.db.$transaction([
      this.db.product.findMany({
        include: GetPaginatedClosure.Include,
        where,
        skip: offset,
        take: limit,
        orderBy: {
          [field]: direction,
        },
      }),
      this.db.product.count({
        where,
      }),
    ]);
  }
}
