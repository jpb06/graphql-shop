import { useAtom } from 'jotai';

import { useProductsByPageInfiniteQuery } from '@front/api';
import ErrorCircle from '@front/assets/icons/error-circle.svg';
import {
  PageTitle,
  GlobalIndicator,
  GlobalCircularLoader,
} from '@front/components/design-system';

import { ArticlesList } from './articles-list/ArticlesList';
import { ProductsSearchFilters } from './filters/ProductsSearchFilters';
import { productsSearchFiltersAtom } from './state/products-search-filters.state';

export const ShopRoot = () => {
  const [{ categoriesIds, priceCondition, ...filters }] = useAtom(
    productsSearchFiltersAtom
  );

  const { status, data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useProductsByPageInfiniteQuery(
      {
        data: {
          id: true,
          idCategory: true,
          name: true,
          image: true,
          description: true,
          price: true,
          stock: true,
          category: {
            id: true,
            name: true,
          },
        },
        hasMoreData: true,
        id: true,
      },
      {
        input: {
          offset: 0,
          limit: 25,
          direction: 'desc',
          field: 'price',
          categoriesIds: categoriesIds === -1 ? undefined : [categoriesIds],
          priceCondition,
          ...filters,
        },
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
        <ProductsSearchFilters isLoading={status === 'loading'} />
        {
          {
            loading: <GlobalCircularLoader>Loading</GlobalCircularLoader>,
            success: (
              <ArticlesList
                pages={data?.pages}
                pageParams={data?.pageParams}
                fetchNextPage={fetchNextPage}
                hasNextPage={hasNextPage}
                isLoading={isFetchingNextPage}
              />
            ),
            error: (
              <GlobalIndicator Icon={ErrorCircle}>
                An error occured while fetching articles
              </GlobalIndicator>
            ),
          }[status]
        }
      </div>
    </div>
  );
};
