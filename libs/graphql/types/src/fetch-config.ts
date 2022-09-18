//import { queryClient } from './../../../front/src/pages/_app';

//queryClient.getQueryData("")

export const endpointUrl = process.env.NEXT_PUBLIC_GQL_API_URL;
export const fetchParams = {
  headers: {
    'Content-Type': 'application/json',
  },
};
