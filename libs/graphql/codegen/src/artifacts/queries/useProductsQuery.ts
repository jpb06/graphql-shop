import {
  useQuery,
  UseQueryResult,
  UseQueryOptions,
} from '@tanstack/react-query';

import { useFetchData } from './../../useFetchData';
import { namedQuerySelectorToDocument } from '../logic/named-query-selector-to-document';
import { DeepReplace } from '../types/deep-replace.type';
import { QuerySelector } from '../types/query-selector';
import { QuerySelectorResult } from '../types/query-selector-result';

type ProductsSelectorResult = Pick<QuerySelectorResult, 'products'>['products'];

export type ProductsResult<Selector> = {
  products: DeepReplace<Selector, ProductsSelectorResult>;
};

export const useProductsPartialQuery = <
  Selector extends Pick<QuerySelector, 'products'>['products']
>(
  selector: Selector,
  options?: Omit<
    UseQueryOptions<
      ProductsResult<Selector>,
      unknown,
      ProductsResult<Selector>
    >,
    'queryFn' | 'queryKey'
  >
): UseQueryResult<ProductsResult<Selector>> => {
  const document = namedQuerySelectorToDocument('products', selector);

  return useQuery<ProductsResult<Selector>, unknown, ProductsResult<Selector>>({
    queryKey: ['products'],
    queryFn: useFetchData<ProductsResult<Selector>>(document),
    ...options,
  });
};

type ProductsSelector = {
  id: boolean;
  idCategory: boolean;
  name: boolean;
  description: boolean;
  image: boolean;
  price: boolean;
  stock: boolean;
  category: { id: boolean; name: boolean };
};

export const useProductsQuery = (
  options?: Omit<
    UseQueryOptions<
      ProductsResult<ProductsSelector>,
      unknown,
      ProductsResult<ProductsSelector>
    >,
    'queryFn' | 'queryKey'
  >
): UseQueryResult<ProductsResult<ProductsSelector>> =>
  useProductsPartialQuery(
    {
      id: true,
      idCategory: true,
      name: true,
      description: true,
      image: true,
      price: true,
      stock: true,
      category: { id: true, name: true },
    },
    options
  );
