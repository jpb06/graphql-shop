import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';

import { DatabaseService } from '@backend/database';

import { GqlPaginationArgs } from '../dtos/pagination-args.dto';
import { GetAllClosure, GetAllSelectType } from './closures/get-all.closure';
import { GetByClosure, GetBySelectType } from './closures/get-by.closure';
import { GetPaginatedClosure } from './closures/get-paginated.closure';
import { GqlPaginatedProducts } from './dtos/gql.paginated-products.dto';

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

  async getPaginated(input: GqlPaginationArgs): Promise<GqlPaginatedProducts> {
    const [data, count] = await this.getPaginatedClosure.fetch(input);

    return {
      id: data.at(0).id,
      data: data.map((product) => {
        const { price, ...data } = product;

        return { ...data, price: Number(price) };
      }),
      hasMoreData: data.length + input.offset < count,
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
