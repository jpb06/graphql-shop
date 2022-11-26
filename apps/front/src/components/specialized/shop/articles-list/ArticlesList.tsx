import { Fragment } from 'react';

import { ProductsByPageQuery } from '@front/api';

import {
  LoadMoreProducts,
  LoadMoreProductsProps,
} from '../load-more-products/LoadMoreProducts';
import { Article } from './article/Article';

interface ArticlesListProps extends Omit<LoadMoreProductsProps, 'hasMoreData'> {
  pages?: ProductsByPageQuery[];
}

export const ArticlesList = ({
  pages,
  pageParams,
  fetchNextPage,
  hasNextPage,
  isLoading,
}: ArticlesListProps) => {
  if (!pages) {
    return null;
  }

  return (
    <>
      <div className="grid place-content-center gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {pages.map(({ productsByPage }) => (
          <Fragment key={productsByPage.id}>
            {productsByPage.data.map((p) => (
              <Article key={p.id} {...p} />
            ))}
          </Fragment>
        ))}
      </div>
      <LoadMoreProducts
        hasMoreData={pages.at(-1)?.productsByPage.hasMoreData}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        pageParams={pageParams}
        isLoading={isLoading}
      />
    </>
  );
};
