import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import { useCallback, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import {
  GqlPaginatedProductsOutput,
  GqlPaginatedProductsInput,
} from '@front/api';
import { Button } from '@front/components/design-system';

export interface LoadMoreProductsProps {
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<
    InfiniteQueryObserverResult<
      { productsByPage: GqlPaginatedProductsOutput },
      unknown
    >
  >;
  pageParams: { input?: { offset: number; limit: number } }[] | undefined;
  isLoading: boolean;
  hasNextPage: boolean | undefined;
  hasMoreData: boolean | undefined;
}

export const LoadMoreProducts = ({
  fetchNextPage,
  pageParams,
  isLoading,
  hasNextPage,
  hasMoreData,
}: LoadMoreProductsProps) => {
  const { ref, inView } = useInView();

  const loadMore = useCallback(() => {
    if (hasMoreData) {
      const lastPageParam = pageParams?.at(-1)?.input as Pick<
        GqlPaginatedProductsInput,
        'offset' | 'limit'
      >;

      void fetchNextPage({
        pageParam: lastPageParam
          ? {
              input: {
                offset: lastPageParam.offset + 20,
                limit: lastPageParam.limit,
              },
            }
          : {
              input: {
                offset: 20,
                limit: 20,
              },
            },
      });
    }
  }, [fetchNextPage, pageParams, hasMoreData]);

  const handleNext = () => {
    loadMore();
  };

  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView, loadMore]);

  return {
    true: (
      <div className="mt-4">
        <Button
          isLoading={isLoading}
          ref={ref}
          variant="neutral"
          onClick={handleNext}
          className="w-full"
        >
          See more products
        </Button>
      </div>
    ),
    false: null,
    undefined: null,
  }[`${hasNextPage}`];
};
