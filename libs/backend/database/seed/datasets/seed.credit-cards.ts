import { faker } from '@faker-js/faker';
import { format } from 'date-fns';

import { PrismaDb } from '../types/prisma-db.type';
import { range } from '../util/range';

export const seedCreditCards = async (prisma: PrismaDb): Promise<void> => {
  const promises = range(2).map(async (idCreditCard) =>
    prisma.creditCard.upsert({
      where: { id: idCreditCard },
      update: {},
      create: {
        id: idCreditCard,
        number: faker.finance.creditCardNumber('visa'),
        expires: format(faker.date.future(), 'MM/yy'),
        cvc: faker.finance.creditCardCVV(),
      },
    })
  );

  await Promise.all(promises);
};
