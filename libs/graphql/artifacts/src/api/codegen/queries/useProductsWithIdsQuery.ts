import { useQuery, UseQueryResult, UseQueryOptions } from '@tanstack/react-query';

import { useFetchData } from './../../useFetchData';
import { namedQuerySelectorToDocument } from '../logic/named-query-selector-to-document';
import { DeepReplace } from '../types/deep-replace.type';
import { QuerySelector } from '../types/query-selector';
import { QuerySelectorResult } from '../types/query-selector-result';
import { ProductsWithIdsQueryArgs } from '../types/api-types';

type ProductsWithIdsSelectorResult = Pick<QuerySelectorResult, 'productsWithIds'>['productsWithIds'];

export type ProductsWithIdsResult<Selector> = {
  productsWithIds: DeepReplace<Selector, ProductsWithIdsSelectorResult>;
};

export const useProductsWithIdsPartialQuery = <Selector extends Pick<QuerySelector, 'productsWithIds'>['productsWithIds']>(
  selector: Selector, variables: ProductsWithIdsQueryArgs,
  options?: Omit<
  UseQueryOptions<
    ProductsWithIdsResult<Selector>,
    unknown,
    ProductsWithIdsResult<Selector>
  >,
  'queryFn' | 'queryKey'
>
): UseQueryResult<ProductsWithIdsResult<Selector>> => {
  const document = namedQuerySelectorToDocument('productsWithIds', selector, variables);

  return useQuery<ProductsWithIdsResult<Selector>, unknown, ProductsWithIdsResult<Selector>>({
    queryKey: ['productsWithIds', ...Object.values(variables)],
    queryFn: useFetchData<ProductsWithIdsResult<Selector>>(document).bind(null, variables, undefined),
    ...options
  });
};

type ProductsWithIdsSelector = {
   id: boolean; idCategory: boolean; name: boolean; description: boolean; image: boolean; price: boolean; stock: boolean; category: { id: boolean; name: boolean;  }; 
};

export const useProductsWithIdsQuery = (
  variables: ProductsWithIdsQueryArgs,
  options?: Omit<
    UseQueryOptions<
      ProductsWithIdsResult<ProductsWithIdsSelector>,
      unknown,
      ProductsWithIdsResult<ProductsWithIdsSelector>
    >,
    'queryFn' | 'queryKey'
  >
): UseQueryResult<ProductsWithIdsResult<ProductsWithIdsSelector>> =>
  useProductsWithIdsPartialQuery(
    {
       id: true, idCategory: true, name: true, description: true, image: true, price: true, stock: true, category: { id: true, name: true,  }, 
    }, variables
    ,options
  );
