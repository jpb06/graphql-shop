import { faker } from '@faker-js/faker';

import { PrismaDb } from '../types/prisma-db.type';
import { range } from '../util/range';
import { seedProducts } from './seed.products';

export const seedCategoriesAndProducts = async (
  prisma: PrismaDb
): Promise<Array<number>> => {
  const promises = range(6).map(async (idCategory) => {
    await prisma.category.upsert({
      where: { id: idCategory },
      update: {},
      create: {
        id: idCategory,
        name: faker.commerce.department(),
      },
    });

    return seedProducts(prisma, idCategory);
  });

  const ids = await Promise.all(promises);

  return ids.flat();
};
