import { Prisma } from '@prisma/client';

export const selectProduct = <T extends Prisma.ProductSelect>(
  select: Prisma.Subset<T, Prisma.ProductSelect>
): T => {
  return select;
};
