import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';

import { DatabaseService } from '@backend/database';

import { GetAll, GetAllSelectType } from './closures/get-all.closure';
import { GetBy, GetBySelectType } from './closures/get-by.closure';

@Injectable()
export class ProductsService {
  constructor(
    private readonly db: DatabaseService,
    private readonly getAllClosure: GetAll,
    private readonly getByClosure: GetBy
  ) {}

  async getAll(): Promise<Array<GetAllSelectType>> {
    return this.getAllClosure.fetch();
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
