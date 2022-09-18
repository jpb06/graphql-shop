import { useAtom } from 'jotai';

import { useLocalStorage } from '../../../../../../hooks/useLocalStorage';
import { ordersAtom, OrdersIndexerType } from '../../state/orders.state';

export const useOrderActions = (id: string) => {
  const [orders, setOrders] = useAtom(ordersAtom);
  const [, setLocalStorage] = useLocalStorage<OrdersIndexerType>(
    'orders',
    orders
  );

  const handleCancelOrder = () =>
    setOrders((v) => {
      const newValue = v[id] === 1 ? 0 : --v[id];
      const newOrders = { ...v, [id]: newValue };

      if (newOrders[id] === 0) {
        delete newOrders[id];
      }

      setLocalStorage(newOrders);

      return newOrders;
    });

  const handleBumpOrder = () =>
    setOrders((v) => {
      const newValue = isNaN(v[id]) ? 1 : ++v[id];
      const newOrders = { ...v, [id]: newValue };

      setLocalStorage(newOrders);

      return newOrders;
    });

  return {
    count: isNaN(orders[id]) ? 0 : orders[id],
    handleCancelOrder,
    handleBumpOrder,
  };
};
