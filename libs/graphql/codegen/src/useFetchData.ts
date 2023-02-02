import { useAtom } from 'jotai';

import { authStateAtom } from '@front/state';

const endpointUrl =
  process.env.NEXT_PUBLIC_GQL_API_URL || 'NEXT_PUBLIC_GQL_API_URL_NOT_SET';

export const useFetchData = <TData>(
  initialQuery: string
): ((variables?: unknown, query?: string) => Promise<TData>) => {
  const [auth] = useAtom(authStateAtom);

  return async (variables?: unknown, query?: string) => {
    const result = await fetch(endpointUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth?.token}`,
      },
      body: JSON.stringify({
        query: query ? query : initialQuery,
        variables,
      }),
    });

    const json = await result.json();

    if (json.errors) {
      const { message } = json.errors[0] || {};
      throw new Error(message || 'Error ...');
    }

    return json.data;
  };
};
