import { useProductsQuery } from '@front/api';

import ErrorCircle from '../../../../public/icons/error-circle.svg';
import { usePersistedOrders } from '../../../hooks/usePersistedOrders';
import { GlobalCircularLoader } from '../../generic/global-circular-loader/GlobalCircularLoader';
import { GlobalIndicator } from '../../generic/global-indicator/GlobalIndicator';
import { PageTitle } from '../../generic/page-title/PageTitle';
import { ArticlesList } from './articles-list/ArticlesList';

export const ShopRoot = () => {
  usePersistedOrders();
  const { status, data } = useProductsQuery();

  return (
    <div className="flex-grow p-2 md:p-4">
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
