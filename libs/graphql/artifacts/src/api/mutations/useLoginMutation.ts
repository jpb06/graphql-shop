import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';

import { LoginMutationArgs, GqlAuthOutput } from '../types/api-types';
import { useFetchData } from './../../useFetchData';

export type LoginResult = {
  login: GqlAuthOutput;
};

export const useLoginMutation = (
  options?: UseMutationOptions<LoginResult, unknown, LoginMutationArgs>
): UseMutationResult<LoginResult, unknown, LoginMutationArgs> => {
  const mutation = `mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
email
lastName
firstName
joinDate
role
token
    }
  }`;

  return useMutation<LoginResult, unknown, LoginMutationArgs>({
    mutationFn: useFetchData(mutation),
    ...options,
  });
};
