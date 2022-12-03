import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';

import { DatabaseService } from '@backend/database';

import { GqlPaginationArgs } from '../dtos/pagination-args.dto';
import { GetAllClosure, GetAllSelectType } from './closures/get-all.closure';
import { GetByClosure, GetBySelectType } from './closures/get-by.closure';
import { GetPaginatedClosure } from './closures/get-paginated.closure';
import { GqlPaginatedProductsFiltersInput } from './dtos/gql.paginated-products-filters.input.dto';
import { GqlPaginatedProductsSortingInput } from './dtos/gql.paginated-products-sorting.input.dto';
import { GqlPaginatedProductsOutput } from './dtos/gql.paginated-products.output.dto';

@Injectable()
export class ProductsService {
  constructor(
    private readonly db: DatabaseService,
    private readonly getAllClosure: GetAllClosure,
    private readonly getPaginatedClosure: GetPaginatedClosure,
    private readonly getByClosure: GetByClosure
  ) {}

  async getAll(): Promise<Array<GetAllSelectType>> {
    return this.getAllClosure.fetch();
  }

  async getPaginated(
    pagination: GqlPaginationArgs,
    filters: GqlPaginatedProductsFiltersInput,
    sorting: GqlPaginatedProductsSortingInput
  ): Promise<GqlPaginatedProductsOutput> {
    const [data, count] = await this.getPaginatedClosure.fetch(
      pagination,
      filters,
      sorting
    );

    return {
      id: data.length > 0 ? data.at(0).id : -1,
      data: data.map((product) => {
        const { price, ...data } = product;

        return { ...data, price: Number(price) };
      }),
      hasMoreData: data.length + pagination.offset < count,
    };
  }

  async getByIds(ids: Array<number>): Promise<Array<Product>> {
    return this.db.product.findMany({
      where: {
        id: { in: ids },
      },
    });
  }

  async getBy(id: number): Promise<GetBySelectType> {
    return this.getByClosure.from(id);
  }

  async getByCategory(id: number): Promise<Array<Product>> {
    return this.db.product.findMany({
      where: {
        idCategory: id,
      },
    });
  }
}
