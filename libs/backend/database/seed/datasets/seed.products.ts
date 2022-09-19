import { faker } from '@faker-js/faker';

import { PrismaDb } from '../types/prisma-db.type';
import { randomNumberBetween } from '../util/random-number-between';

export const seedProducts = async (
  prisma: PrismaDb,
  idCategory: number
): Promise<void> => {
  await prisma.product.deleteMany();

  const productsCount = randomNumberBetween(4, 50);
  for (let i = 0; i < productsCount; i++) {
    await prisma.product.create({
      data: {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        image: faker.image.image(),
        price: faker.commerce.price(),
        idCategory,
      },
    });
  }
};
