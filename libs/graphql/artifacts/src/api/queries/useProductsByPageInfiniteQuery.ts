import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
} from '@tanstack/react-query';

import { deepMerge } from '../logic/deep-merge';
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

export type ProductsByPageInfiniteResult<Selector> = {
  productsByPage: DeepReplace<Selector, ProductsByPageSelectorResult>;
};

export const useProductsByPageInfiniteQuery = <
  Selector extends Pick<QuerySelector, 'productsByPage'>['productsByPage']
>(
  selector: Selector,
  variables: ProductsByPageQueryArgs,
  options?: Omit<
    UseInfiniteQueryOptions<
      ProductsByPageInfiniteResult<Selector>,
      unknown,
      ProductsByPageInfiniteResult<Selector>
    >,
    'queryFn' | 'queryKey'
  >
): UseInfiniteQueryResult<ProductsByPageInfiniteResult<Selector>> => {
  const initialDocument = namedQuerySelectorToDocument(
    'productsByPage',
    selector,
    variables
  );

  const queryKey = ['productsByPageInfiniteQuery', ...Object.values(variables)];
  const fetchFn =
    useFetchData<ProductsByPageInfiniteResult<Selector>>(initialDocument);

  return useInfiniteQuery<
    ProductsByPageInfiniteResult<Selector>,
    unknown,
    ProductsByPageInfiniteResult<Selector>
  >(
    queryKey,
    (metaData) => {
      const updatedVariables = deepMerge(variables, metaData.pageParam ?? {});
      const document = namedQuerySelectorToDocument(
        'productsByPage',
        selector,
        updatedVariables
      );

      return fetchFn(updatedVariables, document);
    },
    options
  );
};
