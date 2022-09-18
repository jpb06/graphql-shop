import { PrismaClient } from '@prisma/client';

import { seedCategoriesAndProducts } from './datasets/seed.categories';
import { seedUsers } from './datasets/seed.users';

const seedDb = async (): Promise<void> => {
  const prisma = new PrismaClient();

  const main = async (): Promise<void> => {
    await seedCategoriesAndProducts(prisma);
    await seedUsers(prisma);
  };

  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
};

void seedDb();
