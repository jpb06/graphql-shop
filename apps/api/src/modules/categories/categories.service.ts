import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';

import { DatabaseService } from '@backend/database';

@Injectable()
export class CategoriesService {
  constructor(private readonly db: DatabaseService) {}

  async getAll(): Promise<Array<Category>> {
    return this.db.category.findMany();
  }

  async getBy(id: number): Promise<Category> {
    return this.db.category.findFirst({
      where: {
        id,
      },
    });
  }
}
