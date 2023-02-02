import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';

import { useFetchData } from './../../useFetchData';
import {
  CreateAddressMutationArgs,
  GqlNewAddressOutput,
} from '../types/api-types';

export type CreateAddressResult = {
  createAddress: GqlNewAddressOutput;
};

export const useCreateAddressMutation = (
  options?: UseMutationOptions<
    CreateAddressResult,
    unknown,
    CreateAddressMutationArgs
  >
): UseMutationResult<
  CreateAddressResult,
  unknown,
  CreateAddressMutationArgs
> => {
  const mutation = `mutation CreateAddress($street: String!, $zipCode: String!, $city: String!, $country: String!) {
    createAddress(street: $street, zipCode: $zipCode, city: $city, country: $country) {
      id
street
zipCode
city
country
    }
  }`;

  return useMutation<CreateAddressResult, unknown, CreateAddressMutationArgs>({
    mutationFn: useFetchData(mutation),
    ...options,
  });
};
