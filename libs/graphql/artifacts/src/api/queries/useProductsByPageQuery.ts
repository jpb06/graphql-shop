import {
  useQuery,
  UseQueryResult,
  UseQueryOptions,
} from '@tanstack/react-query';

import { namedQuerySelectorToDocument } from '../logic/named-query-selector-to-document';
import { ProductsByPageQueryArgs } from '../types/api-types';
import { DeepReplace } from '../types/deep-replace.type';
import { QuerySelector } from '../types/query-selector';
import { QuerySelectorResult } from '../types/query-selector-result';
import { useFetchData } from './../../useFetchData';

type ProductsByPageSelectorResult = Pick<
  QuerySelectorResult,
  'productsByPage'
>['productsByPage'];

export type ProductsByPageResult<Selector> = {
  productsByPage: DeepReplace<Selector, ProductsByPageSelectorResult>;
};

export const useProductsByPagePartialQuery = <
  Selector extends Pick<QuerySelector, 'productsByPage'>['productsByPage']
>(
  selector: Selector,
  variables: ProductsByPageQueryArgs,
  options?: Omit<
    UseQueryOptions<
      ProductsByPageResult<Selector>,
      unknown,
      ProductsByPageResult<Selector>
    >,
    'queryFn' | 'queryKey'
  >
): UseQueryResult<ProductsByPageResult<Selector>> => {
  const document = namedQuerySelectorToDocument(
    'productsByPage',
    selector,
    variables
  );

  return useQuery<
    ProductsByPageResult<Selector>,
    unknown,
    ProductsByPageResult<Selector>
  >({
    queryKey: ['productsByPage', ...Object.values(variables)],
    queryFn: useFetchData<ProductsByPageResult<Selector>>(document).bind(
      null,
      variables
    ),
    ...options,
  });
};

type ProductsByPageSelector = {
  id: boolean;
  data: {
    id: boolean;
    idCategory: boolean;
    name: boolean;
    description: boolean;
    image: boolean;
    price: boolean;
    stock: boolean;
    category: { id: boolean; name: boolean };
  };
  hasMoreData: boolean;
};

export const useProductsByPageQuery = (
  variables: ProductsByPageQueryArgs,
  options?: Omit<
    UseQueryOptions<
      ProductsByPageResult<ProductsByPageSelector>,
      unknown,
      ProductsByPageResult<ProductsByPageSelector>
    >,
    'queryFn' | 'queryKey'
  >
): UseQueryResult<ProductsByPageResult<ProductsByPageSelector>> =>
  useProductsByPagePartialQuery(
    {
      id: true,
      data: {
        id: true,
        idCategory: true,
        name: true,
        description: true,
        image: true,
        price: true,
        stock: true,
        category: { id: true, name: true },
      },
      hasMoreData: true,
    },
    variables,
    options
  );
