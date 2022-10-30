import { faker } from '@faker-js/faker';

import { PrismaDb } from '../types/prisma-db.type';
import { randomNumberBetween } from '../util/random-number-between';

export const seedProducts = async (
  prisma: PrismaDb,
  idCategory: number
): Promise<Array<number>> => {
  await prisma.product.deleteMany();

  const ids: Array<number> = [];

  const productsCount = randomNumberBetween(4, 50);
  for (let i = 0; i < productsCount; i++) {
    const product = await prisma.product.create({
      data: {
        idCategory,
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        image: faker.image.image(640, 480, true),
        price: faker.commerce.price(),
        stock: randomNumberBetween(0, 12),
      },
    });
    ids.push(product.id);
  }

  return ids;
};
