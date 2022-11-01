import { Prisma } from '@prisma/client';

export const selectOrderedItem = <T extends Prisma.OrderedItemSelect>(
  select: Prisma.Subset<T, Prisma.OrderedItemSelect>
): T => {
  return select;
};
