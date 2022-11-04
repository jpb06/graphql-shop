import { faker } from '@faker-js/faker';

import { PrismaDb } from '../types/prisma-db.type';
import { range } from '../util/range';

export const seedAddresses = async (prisma: PrismaDb): Promise<void> => {
  const promises = range(3).map(async (idAddress) => {
    const data = {
      street: faker.address.street(),
      zipCode: faker.address.zipCode(),
      city: faker.address.city(),
      country: faker.address.country(),
    };

    return prisma.address.upsert({
      where: { id: idAddress },
      update: data,
      create: {
        id: idAddress,
        ...data,
      },
    });
  });

  await Promise.all(promises);
  await prisma.$queryRaw`select setval('"public"."Address_id_seq"', 4)`;
};
