import { Injectable } from '@nestjs/common';

import { DatabaseService, selectProduct } from '@backend/database';

import { GqlPaginationArgs } from '../../dtos/pagination-args.dto';
import { GetAllSelectType } from './get-all.closure';

@Injectable()
export class GetPaginatedClosure {
  public static Include = selectProduct({
    Category: true,
  });

  constructor(private readonly db: DatabaseService) {}

  async fetch({
    limit,
    offset,
  }: GqlPaginationArgs): Promise<[GetAllSelectType[], number]> {
    return this.db.$transaction([
      this.db.product.findMany({
        include: GetPaginatedClosure.Include,
        skip: offset,
        take: limit,
      }),
      this.db.product.count(),
    ]);
  }
}
