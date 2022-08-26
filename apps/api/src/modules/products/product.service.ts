import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@backend/database';

@Injectable()
export class ProductsService {
  constructor(private readonly db: DatabaseService) {}

  async getAll() {
    return this.db.product.findMany();
  }

  async getBy(id: number) {
    return this.db.product.findFirst({
      where: {
        id,
      },
      include: {
        Category: true,
      },
    });
  }

  async getByCategory(id: number) {
    return this.db.product.findMany({
      where: {
        idCategory: id,
      },
    });
  }
}
