import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';

import {
  PlaceOrderMutationArgs,
  GqlPlaceOrderOutput,
} from '../types/api-types';
import { useFetchData } from './../../useFetchData';

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
