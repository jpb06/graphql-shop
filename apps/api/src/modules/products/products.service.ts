import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';

import { DatabaseService } from '@backend/database';

@Injectable()
export class ProductsService {
  constructor(private readonly db: DatabaseService) {}

  async getAll(): Promise<Array<Product>> {
    return this.db.product.findMany({
      include: {
        Category: true,
      },
    });
  }

  async getBy(id: number): Promise<Product> {
    return this.db.product.findFirst({
      where: {
        id,
      },
      include: {
        Category: true,
      },
    });
  }

  async getByCategory(id: number): Promise<Array<Product>> {
    return this.db.product.findMany({
      where: {
        idCategory: id,
      },
    });
  }
}
