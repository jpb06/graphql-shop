import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';

import { SignupMutationArgs, GqlAuthOutput } from '../types/api-types';
import { useFetchData } from './../../useFetchData';

export type SignupResult = {
  signup: GqlAuthOutput;
};

export const useSignupMutation = (
  options?: UseMutationOptions<SignupResult, unknown, SignupMutationArgs>
): UseMutationResult<SignupResult, unknown, SignupMutationArgs> => {
  const mutation = `mutation Signup($email: String!, $lastName: String!, $firstName: String!, $password: String!) {
    signup(email: $email, lastName: $lastName, firstName: $firstName, password: $password) {
      id
email
lastName
firstName
joinDate
role
token
    }
  }`;

  return useMutation<SignupResult, unknown, SignupMutationArgs>({
    mutationFn: useFetchData(mutation),
    ...options,
  });
};
