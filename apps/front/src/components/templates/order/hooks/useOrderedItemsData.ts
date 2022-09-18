import { useAtom } from 'jotai';

import { useProductsWithIdsQuery } from '@front/api';

import { ordersAtom } from '../../shop/articles-list/state/orders.state';
import { useProductsQueryCache } from './useProductsQueryCache';

export const useOrderedItemsData = () => {
  const [orders] = useAtom(ordersAtom);

  const ids = Object.keys(orders).map((el) => Number(el));
  const cache = useProductsQueryCache(ids);
  const { status, data } = useProductsWithIdsQuery(
    { ids },
    {
      enabled: ids.length > 0,
      initialData: cache,
    }
  );

  return { status, data };
};
