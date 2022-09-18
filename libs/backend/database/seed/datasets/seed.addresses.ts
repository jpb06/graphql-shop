import { faker } from '@faker-js/faker';

import { PrismaDb } from '../types/prisma-db.type';
import { range } from '../util/range';

export const seedAddresses = async (prisma: PrismaDb): Promise<void> => {
  const promises = range(3).map(async (idAddress) =>
    prisma.address.upsert({
      where: { id: idAddress },
      update: {},
      create: {
        id: idAddress,
        street: faker.address.street(),
        zipCode: faker.address.zipCode(),
        city: faker.address.city(),
        country: faker.address.country(),
      },
    })
  );

  await Promise.all(promises);
};
