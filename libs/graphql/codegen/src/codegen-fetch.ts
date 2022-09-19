import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'apps/api/src/graphql/schema.graphql',
  documents: ['apps/front/src/graphql/**/*.graphql'],
  generates: {
    'libs/graphql/types/src/index.ts': {
      plugins: [
        {
          add: {
            content:
              "import { endpointUrl, fetchParams } from './fetch-config';",
          },
        },
        'typescript',
        'typescript-operations',
        'typescript-react-query',
      ],
      config: {
        pureMagicComment: true, // enforce tree-shaking
        exposeQueryKeys: true, // to prefetch queries (SSR)
        exposeMutationKeys: true,
        exposeFetcher: true,
        fetcher: {
          endpoint: 'endpointUrl',
          fetchParams: 'fetchParams',
          //endpoint: process.env.NEXT_PUBLIC_GQL_API_URL,
          // fetchParams: {
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          // },
        },
      },
    },
  },
};

export default config;
