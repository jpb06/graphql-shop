import {
  useQuery,
  UseQueryResult,
  UseQueryOptions,
} from '@tanstack/react-query';

import { useFetchData } from './../../useFetchData';
import { namedQuerySelectorToDocument } from '../logic/named-query-selector-to-document';
import { GetOrderQueryArgs } from '../types/api-types';
import { DeepReplace } from '../types/deep-replace.type';
import { QuerySelector } from '../types/query-selector';
import { QuerySelectorResult } from '../types/query-selector-result';

type GetOrderSelectorResult = Pick<QuerySelectorResult, 'getOrder'>['getOrder'];

export type GetOrderResult<Selector> = {
  getOrder: DeepReplace<Selector, GetOrderSelectorResult>;
};

export const useGetOrderPartialQuery = <
  Selector extends Pick<QuerySelector, 'getOrder'>['getOrder']
>(
  selector: Selector,
  variables: GetOrderQueryArgs,
  options?: Omit<
    UseQueryOptions<
      GetOrderResult<Selector>,
      unknown,
      GetOrderResult<Selector>
    >,
    'queryFn' | 'queryKey'
  >
): UseQueryResult<GetOrderResult<Selector>> => {
  const document = namedQuerySelectorToDocument(
    'getOrder',
    selector,
    variables
  );

  return useQuery<GetOrderResult<Selector>, unknown, GetOrderResult<Selector>>({
    queryKey: ['getOrder', ...Object.values(variables)],
    queryFn: useFetchData<GetOrderResult<Selector>>(document).bind(
      null,
      variables,
      undefined
    ),
    ...options,
  });
};

type GetOrderSelector = {
  createdAt: boolean;
  creditCard: { number: boolean; expires: boolean };
  items: { id: boolean; quantity: boolean; name: boolean; price: boolean };
};

export const useGetOrderQuery = (
  variables: GetOrderQueryArgs,
  options?: Omit<
    UseQueryOptions<
      GetOrderResult<GetOrderSelector>,
      unknown,
      GetOrderResult<GetOrderSelector>
    >,
    'queryFn' | 'queryKey'
  >
): UseQueryResult<GetOrderResult<GetOrderSelector>> =>
  useGetOrderPartialQuery(
    {
      createdAt: true,
      creditCard: { number: true, expires: true },
      items: { id: true, quantity: true, name: true, price: true },
    },
    variables,
    options
  );
