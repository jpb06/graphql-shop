import { Role } from '@prisma/client';
import { hash } from 'bcrypt';

import { seedAddresses } from './seed.addresses';
import { seedCreditCards } from './seed.credit-cards';
import { seedOrders } from './seed.orders';
import { PrismaDb } from '../types/prisma-db.type';

const seedAdmin = async (prisma: PrismaDb): Promise<void> => {
  const adminData = {
    firstName: 'Yolo',
    lastName: 'Bro',
    password: await hash('admin', 11),
    role: 'ADMIN' as Role,
  };
  await prisma.user.upsert({
    where: { email: 'admin@cool.org' },
    update: adminData,
    create: {
      email: `admin@cool.org`,
      ...adminData,
    },
  });

  const adminAddress = {
    idAddress: 1,
    idUser: 1,
  };
  await prisma.joinUserAddress.upsert({
    where: { id: 1 },
    update: adminAddress,
    create: {
      id: 1,
      ...adminAddress,
    },
  });
};

const seedAlice = async (prisma: PrismaDb): Promise<void> => {
  const userData = {
    firstName: 'Alice',
    lastName: 'Hartmann',
    password: await hash('alice', 11),
  };
  await prisma.user.upsert({
    where: { email: 'alice@cool.org' },
    update: userData,
    create: {
      email: `alice@cool.org`,
      ...userData,
    },
  });

  const userAddress = {
    idAddress: 2,
    idUser: 1,
  };
  await prisma.joinUserAddress.upsert({
    where: { id: 2 },
    update: userAddress,
    create: {
      id: 2,
      ...userAddress,
    },
  });
};

const seedBob = async (prisma: PrismaDb): Promise<void> => {
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

export const seedUsers = async (
  prisma: PrismaDb,
  productsIds: Array<number>
): Promise<void> => {
  await seedAddresses(prisma);
  await seedAdmin(prisma);
  await seedAlice(prisma);
  await seedBob(prisma);
  await seedCreditCards(prisma);
  await seedOrders(prisma, productsIds);

  await prisma.$queryRaw`select setval('"public"."JoinUserAddress_id_seq"', 4)`;
  await prisma.$queryRaw`select setval('"public"."User_id_seq"', 3)`;
};
