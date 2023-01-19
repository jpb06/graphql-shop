import { useQuery, UseQueryResult, UseQueryOptions } from '@tanstack/react-query';

import { useFetchData } from './../../useFetchData';
import { namedQuerySelectorToDocument } from '../logic/named-query-selector-to-document';
import { DeepReplace } from '../types/deep-replace.type';
import { QuerySelector } from '../types/query-selector';
import { QuerySelectorResult } from '../types/query-selector-result';
import { CategoryQueryArgs } from '../types/api-types';

type CategorySelectorResult = Pick<QuerySelectorResult, 'category'>['category'];

export type CategoryResult<Selector> = {
  category: DeepReplace<Selector, CategorySelectorResult>;
};

export const useCategoryPartialQuery = <Selector extends Pick<QuerySelector, 'category'>['category']>(
  selector: Selector, variables: CategoryQueryArgs,
  options?: Omit<
  UseQueryOptions<
    CategoryResult<Selector>,
    unknown,
    CategoryResult<Selector>
  >,
  'queryFn' | 'queryKey'
>
): UseQueryResult<CategoryResult<Selector>> => {
  const document = namedQuerySelectorToDocument('category', selector, variables);

  return useQuery<CategoryResult<Selector>, unknown, CategoryResult<Selector>>({
    queryKey: ['category', ...Object.values(variables)],
    queryFn: useFetchData<CategoryResult<Selector>>(document).bind(null, variables),
    ...options
  });
};

type CategorySelector = {
   id: boolean; name: boolean; products: { id: boolean; idCategory: boolean; name: boolean; description: boolean; image: boolean; price: boolean; stock: boolean;  }; 
};

export const useCategoryQuery = (
  variables: CategoryQueryArgs,
  options?: Omit<
    UseQueryOptions<
      CategoryResult<CategorySelector>,
      unknown,
      CategoryResult<CategorySelector>
    >,
    'queryFn' | 'queryKey'
  >
): UseQueryResult<CategoryResult<CategorySelector>> =>
  useCategoryPartialQuery(
    {
       id: true, name: true, products: { id: true, idCategory: true, name: true, description: true, image: true, price: true, stock: true,  }, 
    }, variables
    ,options
  );
