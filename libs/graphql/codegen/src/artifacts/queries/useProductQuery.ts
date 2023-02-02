import {
  useQuery,
  UseQueryResult,
  UseQueryOptions,
} from '@tanstack/react-query';

import { useFetchData } from './../../useFetchData';
import { namedQuerySelectorToDocument } from '../logic/named-query-selector-to-document';
import { ProductQueryArgs } from '../types/api-types';
import { DeepReplace } from '../types/deep-replace.type';
import { QuerySelector } from '../types/query-selector';
import { QuerySelectorResult } from '../types/query-selector-result';

type ProductSelectorResult = Pick<QuerySelectorResult, 'product'>['product'];

export type ProductResult<Selector> = {
  product: DeepReplace<Selector, ProductSelectorResult>;
};

export const useProductPartialQuery = <
  Selector extends Pick<QuerySelector, 'product'>['product']
>(
  selector: Selector,
  variables: ProductQueryArgs,
  options?: Omit<
    UseQueryOptions<ProductResult<Selector>, unknown, ProductResult<Selector>>,
    'queryFn' | 'queryKey'
  >
): UseQueryResult<ProductResult<Selector>> => {
  const document = namedQuerySelectorToDocument('product', selector, variables);

  return useQuery<ProductResult<Selector>, unknown, ProductResult<Selector>>({
    queryKey: ['product', ...Object.values(variables)],
    queryFn: useFetchData<ProductResult<Selector>>(document).bind(
      null,
      variables,
      undefined
    ),
    ...options,
  });
};

type ProductSelector = {
  id: boolean;
  idCategory: boolean;
  name: boolean;
  description: boolean;
  image: boolean;
  price: boolean;
  stock: boolean;
  category: { id: boolean; name: boolean };
};

export const useProductQuery = (
  variables: ProductQueryArgs,
  options?: Omit<
    UseQueryOptions<
      ProductResult<ProductSelector>,
      unknown,
      ProductResult<ProductSelector>
    >,
    'queryFn' | 'queryKey'
  >
): UseQueryResult<ProductResult<ProductSelector>> =>
  useProductPartialQuery(
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
    variables,
    options
  );
