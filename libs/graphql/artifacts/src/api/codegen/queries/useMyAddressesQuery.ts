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

type MyAddressesSelectorResult = Pick<
  QuerySelectorResult,
  'myAddresses'
>['myAddresses'];

export type MyAddressesResult<Selector> = {
  myAddresses: DeepReplace<Selector, MyAddressesSelectorResult>;
};

export const useMyAddressesPartialQuery = <
  Selector extends Pick<QuerySelector, 'myAddresses'>['myAddresses']
>(
  selector: Selector,
  options?: Omit<
    UseQueryOptions<
      MyAddressesResult<Selector>,
      unknown,
      MyAddressesResult<Selector>
    >,
    'queryFn' | 'queryKey'
  >
): UseQueryResult<MyAddressesResult<Selector>> => {
  const document = namedQuerySelectorToDocument('myAddresses', selector);

  return useQuery<
    MyAddressesResult<Selector>,
    unknown,
    MyAddressesResult<Selector>
  >({
    queryKey: ['myAddresses'],
    queryFn: useFetchData<MyAddressesResult<Selector>>(document),
    ...options,
  });
};

type MyAddressesSelector = {
  id: boolean;
  street: boolean;
  zipCode: boolean;
  city: boolean;
  country: boolean;
};

export const useMyAddressesQuery = (
  options?: Omit<
    UseQueryOptions<
      MyAddressesResult<MyAddressesSelector>,
      unknown,
      MyAddressesResult<MyAddressesSelector>
    >,
    'queryFn' | 'queryKey'
  >
): UseQueryResult<MyAddressesResult<MyAddressesSelector>> =>
  useMyAddressesPartialQuery(
    {
      id: true,
      street: true,
      zipCode: true,
      city: true,
      country: true,
    },
    options
  );
