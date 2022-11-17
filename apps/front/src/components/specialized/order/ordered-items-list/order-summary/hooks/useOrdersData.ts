import { useAtom } from 'jotai';

import { ordersAtom } from '@front/state';

export const useOrdersData = () => {
  const [orders] = useAtom(ordersAtom);

  const articlesCount = orders.reduce((sum, { quantity }) => sum + quantity, 0);
  const totalCost = orders.reduce(
    (sum, { price, quantity }) => sum + price * quantity,
    0
  );

  return { articlesCount, totalCost };
};
