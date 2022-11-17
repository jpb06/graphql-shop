import { PrismaDb } from '../types/prisma-db.type';
import { randomNumberBetween } from '../util/random-number-between';
import { range } from '../util/range';

const seedOrder = async (
  prisma: PrismaDb,
  orderId: number,
  creditCardId: number,
  userId: number,
  productsIds: Array<number>
): Promise<number> => {
  const orderData = {
    idCreditCard: creditCardId,
    idUser: userId,
  };

  await prisma.order.upsert({
    where: { id: orderId },
    update: orderData,
    create: {
      id: orderId,
      ...orderData,
    },
  });

  const itemsCount = randomNumberBetween(2, 8);
  const promises = range(itemsCount).map(async () =>
    prisma.orderedItem.create({
      data: {
        idOrder: orderId,
        idProduct: productsIds[randomNumberBetween(0, productsIds.length - 1)],
        quantity: randomNumberBetween(3, 12),
      },
    })
  );

  await Promise.all(promises);

  return itemsCount;
};

export const seedOrders = async (
  prisma: PrismaDb,
  productsIds: Array<number>
): Promise<void> => {
  const orderedItemsCount = (
    await Promise.all([
      seedOrder(prisma, 1, 1, 1, productsIds),
      seedOrder(prisma, 2, 1, 1, productsIds),
      seedOrder(prisma, 3, 2, 2, productsIds),
    ])
  ).reduce((prev, curr) => prev + curr, 0);

  await prisma.$queryRaw`select setval('"public"."Order_id_seq"', 4)`;
  await prisma.$queryRaw`select setval('"public"."OrderedItem_id_seq"', ${orderedItemsCount})`;
};
