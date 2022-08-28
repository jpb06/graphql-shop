import { PrismaClient } from '@prisma/client';

import { seedCategoriesAndProducts } from './datasets/seed.categories';
import { seedUsers } from './datasets/seed.users';

const seedDb = async () => {
  const prisma = new PrismaClient();

  const main = async () => {
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

seedDb();
