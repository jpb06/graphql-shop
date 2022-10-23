import { hash } from 'bcrypt';

import { PrismaDb } from '../types/prisma-db.type';
import { seedAddresses } from './seed.addresses';

const seedUserOne = async (prisma: PrismaDb): Promise<void> => {
  await prisma.user.upsert({
    where: { email: 'admin@cool.org' },
    update: {},
    create: {
      email: `admin@cool.org`,
      firstName: 'Yolo',
      lastName: 'Bro',
      password: await hash('admin', 11),
      role: 'ADMIN',
    },
  });

  await prisma.user.upsert({
    where: { email: 'alice@cool.org' },
    update: {},
    create: {
      email: `alice@cool.org`,
      firstName: 'Alice',
      lastName: 'Hartmann',
      password: await hash('alice', 11),
    },
  });

  await prisma.joinUserAddress.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      idAddress: 1,
      idUser: 1,
    },
  });
  await prisma.joinUserAddress.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      idAddress: 2,
      idUser: 1,
    },
  });
};

const seedUserTwo = async (prisma: PrismaDb): Promise<void> => {
  await prisma.user.upsert({
    where: { email: 'bob@cool.org' },
    update: {},
    create: {
      email: `bob@cool.org`,
      firstName: 'Bob',
      lastName: 'Cool',
      password: await hash('bob', 11),
    },
  });

  await prisma.joinUserAddress.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      idAddress: 3,
      idUser: 1,
    },
  });
};

export const seedUsers = async (prisma: PrismaDb): Promise<void> => {
  await seedAddresses(prisma);
  await seedUserOne(prisma);
  await seedUserTwo(prisma);
};
