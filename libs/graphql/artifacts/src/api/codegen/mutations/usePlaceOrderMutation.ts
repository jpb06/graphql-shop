import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';

import { useFetchData } from './../../useFetchData';
import {
  PlaceOrderMutationArgs,
  GqlPlaceOrderOutput,
} from '../types/api-types';

export type PlaceOrderResult = {
  placeOrder: GqlPlaceOrderOutput;
};

export const usePlaceOrderMutation = (
  options?: UseMutationOptions<
    PlaceOrderResult,
    unknown,
    PlaceOrderMutationArgs
  >
): UseMutationResult<PlaceOrderResult, unknown, PlaceOrderMutationArgs> => {
  const mutation = `mutation PlaceOrder($creditCard: GqlPlaceOrderInput!, $orderedItems: [GqlNewOrderedItem!]!) {
    placeOrder(creditCard: $creditCard, orderedItems: $orderedItems) {
      orderId
    }
  }`;

  return useMutation<PlaceOrderResult, unknown, PlaceOrderMutationArgs>({
    mutationFn: useFetchData(mutation),
    ...options,
  });
};
