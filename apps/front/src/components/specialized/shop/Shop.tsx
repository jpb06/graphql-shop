import { useProductsQuery } from '@front/api';
import ErrorCircle from '@front/assets/icons/error-circle.svg';
import {
  PageTitle,
  GlobalIndicator,
  GlobalCircularLoader,
} from '@front/components';

import { ArticlesList } from './articles-list/ArticlesList';

export const ShopRoot = () => {
  const { status, data } = useProductsQuery();

  return (
    <div className="z-10 flex-grow p-2 md:p-4">
      <div className="mt-3 flex flex-col">
        <PageTitle>Articles</PageTitle>
        {
          {
            loading: <GlobalCircularLoader>Loading</GlobalCircularLoader>,
            success: <ArticlesList products={data?.products} />,
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
