import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'apps/api/src/graphql/schema.graphql',
  documents: [
    'apps/front/src/**/*.graphql',
    'libs/frontend/components/src/**/*.graphql',
  ],
  generates: {
    'libs/graphql/types/src/api.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
      ],
      config: {
        addInfiniteQuery: true,
        pureMagicComment: true, // enforce tree-shaking
        fetcher: {
          func: './fetcher#useFetchData',
          isReactHook: true,
        },
      },
    },
  },
};

export default config;
