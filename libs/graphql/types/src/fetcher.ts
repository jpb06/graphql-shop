import { endpointUrl, fetchParams } from './fetch-config';

const delay = async (ms: number): Promise<unknown> =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const fetcher = <TData, TVariables>(
  query: string,
  variables?: TVariables
) => {
  return async (): Promise<TData> => {
    const fetchPromise = fetch(endpointUrl as string, {
      method: 'POST',
      ...fetchParams,
      body: JSON.stringify({ query, variables }),
    });

    // Adding an artificial delay
    const [res] = await Promise.all([fetchPromise, delay(500)]);

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
};
