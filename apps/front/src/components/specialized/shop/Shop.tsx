import { useInfiniteProductsByPageQuery } from '@front/api';
import ErrorCircle from '@front/assets/icons/error-circle.svg';
import {
  PageTitle,
  GlobalIndicator,
  GlobalCircularLoader,
} from '@front/components';

import { ArticlesList } from './articles-list/ArticlesList';
import { LoadMoreProducts } from './load-more-products/LoadMoreProducts';

export const ShopRoot = () => {
  const { status, data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteProductsByPageQuery(
      {
        offset: 0,
        limit: 20,
      },
      {
        getNextPageParam: (lastPage) =>
          lastPage.productsByPage.hasMoreData === true ? true : undefined,
      }
    );

  return (
    <div className="z-10 flex-grow p-2 md:p-4">
      <div className="mt-3 flex flex-col">
        <PageTitle>Articles</PageTitle>
        {
          {
            loading: <GlobalCircularLoader>Loading</GlobalCircularLoader>,
            success: <ArticlesList pages={data?.pages} />,
            error: (
              <GlobalIndicator Icon={ErrorCircle}>
                An error occured while fetching articles
              </GlobalIndicator>
            ),
          }[status]
        }
      </div>
      <LoadMoreProducts
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        pageParams={data?.pageParams}
        isLoading={isFetchingNextPage}
      />
    </div>
  );
};
