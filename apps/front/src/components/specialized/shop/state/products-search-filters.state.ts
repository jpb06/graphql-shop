import { atom } from 'jotai';

type PriceCondition = 'gte' | 'lte';

export type ProductsSearchFilters = {
  categoriesIds: number;
  text?: string;
  price?: number;
  priceCondition: PriceCondition;
};

export const productsSearchFiltersAtom = atom<ProductsSearchFilters>({
  categoriesIds: -1,
  priceCondition: 'lte',
});
