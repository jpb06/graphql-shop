import { useAtom } from 'jotai';

import { authStateAtom } from '@front/state';

import { endpointUrl } from './fetch-config';

export const useFetchData = <TData>(
  query: string
): ((variables?: unknown) => Promise<TData>) => {
  const [auth] = useAtom(authStateAtom);

  return async (variables?: unknown) => {
    const result = await fetch(endpointUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth?.token}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await result.json();

    if (json.errors) {
      const { message } = json.errors[0] || {};
      throw new Error(message || 'Error…');
    }

    return json.data;
  };
};
