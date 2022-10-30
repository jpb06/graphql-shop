import { PrismaDb } from '../types/prisma-db.type';

export const seedOrders = async (
  prisma: PrismaDb,
  productsIds: Array<number>
): Promise<void> => {
  await prisma.order.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      idCreditCard: 1,
      idUser: 1,
    },
  });
  await prisma.orderedItem.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      idOrder: 1,
      idProduct: productsIds[0],
      quantity: 4,
    },
  });
  await prisma.orderedItem.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      idOrder: 1,
      idProduct: productsIds[1],
      quantity: 10,
    },
  });
  await prisma.orderedItem.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      idOrder: 1,
      idProduct: productsIds[2],
      quantity: 2,
    },
  });

  await prisma.order.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      idCreditCard: 1,
      idUser: 1,
    },
  });
  await prisma.orderedItem.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      idOrder: 2,
      idProduct: productsIds[3],
      quantity: 5,
    },
  });
  await prisma.orderedItem.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      idOrder: 2,
      idProduct: productsIds[2],
      quantity: 12,
    },
  });

  await prisma.order.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      idCreditCard: 2,
      idUser: 2,
    },
  });
  await prisma.orderedItem.upsert({
    where: { id: 6 },
    update: {},
    create: {
      id: 6,
      idOrder: 3,
      idProduct: productsIds[0],
      quantity: 1,
    },
  });
};
