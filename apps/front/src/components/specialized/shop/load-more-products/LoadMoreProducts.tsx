import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import { useCallback, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { ProductsByPageQuery, ProductsByPageQueryVariables } from '@front/api';
import ProductIcon from '@front/assets/icons/product-2.svg';
import { Button } from '@front/components';

export interface LoadMoreProductsProps {
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<ProductsByPageQuery, unknown>>;
  pageParams: unknown[] | undefined;
  isLoading: boolean;
  hasNextPage: boolean | undefined;
}

export const LoadMoreProducts = ({
  fetchNextPage,
  pageParams,
  isLoading,
  hasNextPage,
}: LoadMoreProductsProps) => {
  const { ref, inView } = useInView();

  const loadMore = useCallback(() => {
    const lastPageParam = pageParams?.at(-1) as
      | ProductsByPageQueryVariables
      | undefined;
    void fetchNextPage({
      pageParam: lastPageParam
        ? {
            offset: lastPageParam.offset + 20,
            limit: lastPageParam.limit,
          }
        : {
            offset: 20,
            limit: 20,
          },
    });
  }, [fetchNextPage, pageParams]);

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
    false: (
      <div className="mt-4 grid w-full justify-center rounded-lg p-5 text-slate-400">
        <ProductIcon className="w-40 pb-2" />
        <div>Nothing more to display</div>
      </div>
    ),
    undefined: null,
  }[`${hasNextPage}`];
};
