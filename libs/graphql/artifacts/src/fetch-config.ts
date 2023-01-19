export const endpointUrl =
  process.env.NEXT_PUBLIC_GQL_API_URL || 'gql-api-url-not-set';

export const fetchParams = {
  headers: {
    'Content-Type': 'application/json',
  },
};
