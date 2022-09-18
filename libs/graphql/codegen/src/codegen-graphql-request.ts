import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'apps/api/src/graphql/schema.graphql',
  documents: ['apps/front/src/graphql/**/*.graphql'],
  generates: {
    'libs/graphql/types/src/index.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
      ],
      config: {
        pureMagicComment: true, // enforce tree-shaking
        exposeQueryKeys: true, // to prefetch queries (SSR)
        exposeMutationKeys: true,
        fetcher: 'graphql-request',
      },
    },
  },
};

export default config;
