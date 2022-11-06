import { useAtom } from 'jotai';

import { authState } from '@front/state';

import { endpointUrl } from './fetch-config';

const delay = async (ms: number): Promise<unknown> =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const useFetchData = <TData, TVariables>(
  query: string,
  options?: RequestInit['headers']
): ((variables?: TVariables) => Promise<TData>) => {
  const [auth] = useAtom(authState);

  return async (variables?: TVariables) => {
    const fetchPromise = fetch(endpointUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: auth?.token,
        ...options,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    // Adding an artificial delay
    const [res] = await Promise.all([fetchPromise, delay(500)]);

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0] || {};
      throw new Error(message || 'Error…');
    }

    return json.data;
  };
};
