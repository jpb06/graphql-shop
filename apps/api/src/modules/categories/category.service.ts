import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@backend/database';

@Injectable()
export class CategoriesService {
  constructor(private readonly db: DatabaseService) {}

  async getAll() {
    return this.db.category.findMany();
  }

  async getBy(id: number) {
    return this.db.category.findFirst({
      where: {
        id,
      },
    });
  }
}
