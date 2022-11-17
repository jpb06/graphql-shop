import { faker } from '@faker-js/faker';
import { format } from 'date-fns';

import { PrismaDb } from '../types/prisma-db.type';
import { range } from '../util/range';

export const seedCreditCards = async (prisma: PrismaDb): Promise<void> => {
  const promises = range(2).map(async (idCreditCard) => {
    const data = {
      number: faker.finance.creditCardNumber('visa'),
      name: faker.name.fullName(),
      expires: format(faker.date.future(), 'MM/yy'),
      cvc: faker.finance.creditCardCVV(),
    };

    return prisma.creditCard.upsert({
      where: { id: idCreditCard },
      update: data,
      create: {
        id: idCreditCard,
        ...data,
      },
    });
  });

  await Promise.all(promises);

  await prisma.$queryRaw`select setval('"public"."CreditCard_id_seq"', 3)`;
};
