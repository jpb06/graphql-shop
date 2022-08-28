import { faker } from '@faker-js/faker';

import { PrismaDb } from '../types/prisma-db.type';
import { range } from '../util/range';
import { seedProducts } from './seed.products';

export const seedCategoriesAndProducts = async (prisma: PrismaDb) => {
  const promises = range(6).map(async (idCategory) => {
    await prisma.category.upsert({
      where: { id: idCategory },
      update: {},
      create: {
        id: idCategory,
        name: faker.commerce.department(),
      },
    });

    await seedProducts(prisma, idCategory);
  });

  await Promise.all(promises);
};
