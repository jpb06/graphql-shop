import { faker } from '@faker-js/faker';

import { seedProducts } from './seed.products';
import { PrismaDb } from '../types/prisma-db.type';
import { range } from '../util/range';

export const seedCategoriesAndProducts = async (
  prisma: PrismaDb
): Promise<Array<number>> => {
  const promises = range(6).map(async (idCategory) => {
    const data = {
      name: faker.commerce.department(),
    };

    await prisma.category.upsert({
      where: { id: idCategory },
      update: data,
      create: {
        id: idCategory,
        ...data,
      },
    });

    return seedProducts(prisma, idCategory);
  });

  const ids = await Promise.all(promises);
  await prisma.$queryRaw`select setval('"public"."Category_id_seq"', 7)`;

  return ids.flat();
};
