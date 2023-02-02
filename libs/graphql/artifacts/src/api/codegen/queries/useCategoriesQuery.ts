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

type CategoriesSelectorResult = Pick<
  QuerySelectorResult,
  'categories'
>['categories'];

export type CategoriesResult<Selector> = {
  categories: DeepReplace<Selector, CategoriesSelectorResult>;
};

export const useCategoriesPartialQuery = <
  Selector extends Pick<QuerySelector, 'categories'>['categories']
>(
  selector: Selector,
  options?: Omit<
    UseQueryOptions<
      CategoriesResult<Selector>,
      unknown,
      CategoriesResult<Selector>
    >,
    'queryFn' | 'queryKey'
  >
): UseQueryResult<CategoriesResult<Selector>> => {
  const document = namedQuerySelectorToDocument('categories', selector);

  return useQuery<
    CategoriesResult<Selector>,
    unknown,
    CategoriesResult<Selector>
  >({
    queryKey: ['categories'],
    queryFn: useFetchData<CategoriesResult<Selector>>(document),
    ...options,
  });
};

type CategoriesSelector = {
  id: boolean;
  name: boolean;
  products: {
    id: boolean;
    idCategory: boolean;
    name: boolean;
    description: boolean;
    image: boolean;
    price: boolean;
    stock: boolean;
  };
};

export const useCategoriesQuery = (
  options?: Omit<
    UseQueryOptions<
      CategoriesResult<CategoriesSelector>,
      unknown,
      CategoriesResult<CategoriesSelector>
    >,
    'queryFn' | 'queryKey'
  >
): UseQueryResult<CategoriesResult<CategoriesSelector>> =>
  useCategoriesPartialQuery(
    {
      id: true,
      name: true,
      products: {
        id: true,
        idCategory: true,
        name: true,
        description: true,
        image: true,
        price: true,
        stock: true,
      },
    },
    options
  );
