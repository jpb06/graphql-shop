import { useAtom } from 'jotai';

import { ordersAtom } from '../../../../../../state/orders.state';

export const useOrdersData = () => {
  const [orders] = useAtom(ordersAtom);

  const articlesCount = orders.reduce((sum, { count }) => sum + count, 0);
  const totalCost = orders.reduce(
    (sum, { price, count }) => sum + price * count,
    0
  );

  return { articlesCount, totalCost };
};
