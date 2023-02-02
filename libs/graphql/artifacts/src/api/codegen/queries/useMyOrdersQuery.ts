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

type MyOrdersSelectorResult = Pick<QuerySelectorResult, 'myOrders'>['myOrders'];

export type MyOrdersResult<Selector> = {
  myOrders: DeepReplace<Selector, MyOrdersSelectorResult>;
};

export const useMyOrdersPartialQuery = <
  Selector extends Pick<QuerySelector, 'myOrders'>['myOrders']
>(
  selector: Selector,
  options?: Omit<
    UseQueryOptions<
      MyOrdersResult<Selector>,
      unknown,
      MyOrdersResult<Selector>
    >,
    'queryFn' | 'queryKey'
  >
): UseQueryResult<MyOrdersResult<Selector>> => {
  const document = namedQuerySelectorToDocument('myOrders', selector);

  return useQuery<MyOrdersResult<Selector>, unknown, MyOrdersResult<Selector>>({
    queryKey: ['myOrders'],
    queryFn: useFetchData<MyOrdersResult<Selector>>(document),
    ...options,
  });
};

type MyOrdersSelector = {
  id: boolean;
  idUser: boolean;
  idCreditCard: boolean;
  createdAt: boolean;
  creditCardNumber: boolean;
  items: {
    id: boolean;
    quantity: boolean;
    name: boolean;
    image: boolean;
    price: boolean;
  };
};

export const useMyOrdersQuery = (
  options?: Omit<
    UseQueryOptions<
      MyOrdersResult<MyOrdersSelector>,
      unknown,
      MyOrdersResult<MyOrdersSelector>
    >,
    'queryFn' | 'queryKey'
  >
): UseQueryResult<MyOrdersResult<MyOrdersSelector>> =>
  useMyOrdersPartialQuery(
    {
      id: true,
      idUser: true,
      idCreditCard: true,
      createdAt: true,
      creditCardNumber: true,
      items: { id: true, quantity: true, name: true, image: true, price: true },
    },
    options
  );
