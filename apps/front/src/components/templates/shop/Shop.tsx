import { useProductsQuery } from '@front/api';

import { usePersistedOrders } from '../../../hooks/usePersistedOrders';
import { GlobalCircularLoader } from '../../generic/global-circular-loader/GlobalCircularLoader';
import { GlobalError } from '../../generic/global-error/GlobalError';
import { Title } from '../../generic/title/Title';
import { ArticlesList } from './articles-list/ArticlesList';

export const ShopRoot = () => {
  usePersistedOrders();
  const { status, data } = useProductsQuery();

  return (
    <div className="p-2 md:p-4 flex-grow">
      <div className="flex flex-col mt-3">
        <Title>Articles</Title>
        {
          {
            loading: <GlobalCircularLoader>Loading</GlobalCircularLoader>,
            success: <ArticlesList products={data?.products} />,
            error: (
              <GlobalError>
                An error occured while fetching articles
              </GlobalError>
            ),
          }[status]
        }
      </div>
    </div>
  );
};
