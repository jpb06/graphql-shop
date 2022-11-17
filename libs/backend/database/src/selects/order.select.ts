import { Prisma } from '@prisma/client';

export const selectOrder = <T extends Prisma.OrderSelect>(
  select: Prisma.Subset<T, Prisma.OrderSelect>
): T => {
  return select;
};
