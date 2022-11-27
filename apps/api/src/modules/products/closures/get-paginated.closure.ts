import { Injectable } from '@nestjs/common';

import { DatabaseService, selectProduct } from '@backend/database';

import { GqlPaginationArgs } from '../../dtos/pagination-args.dto';
import { GqlPaginatedProductsFiltersInput } from '../dtos/gql.paginated-products-filters.input.dto';
import { GqlPaginatedProductsSortingInput } from '../dtos/gql.paginated-products-sorting.input.dto';
import { GetAllSelectType } from './get-all.closure';

@Injectable()
export class GetPaginatedClosure {
  public static Include = selectProduct({
    Category: true,
  });

  constructor(private readonly db: DatabaseService) {}

  async fetch(
    { limit, offset }: GqlPaginationArgs,
    {
      categoriesIds,
      text,
      price,
      priceCondition,
      availableStock,
    }: GqlPaginatedProductsFiltersInput,
    { direction, field }: GqlPaginatedProductsSortingInput
  ): Promise<[GetAllSelectType[], number]> {
    return this.db.$transaction([
      this.db.product.findMany({
        include: GetPaginatedClosure.Include,
        where: {
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
        },
        skip: offset,
        take: limit,
        orderBy: {
          [field]: direction,
        },
      }),
      this.db.product.count(),
    ]);
  }
}
