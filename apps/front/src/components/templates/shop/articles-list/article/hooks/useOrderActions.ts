import { useAtom } from 'jotai';

import { useLocalStorage } from '../../../../../../hooks/useLocalStorage';
import { OrderData, ordersAtom } from '../../../../../state/orders.state';

export const useOrderActions = (targetOrder: OrderData) => {
  const [orders, setOrders] = useAtom(ordersAtom);
  const [, setLocalStorage] = useLocalStorage('orders', orders);

  const getOrder = (v: OrderData[]) => v.find((el) => el.id === targetOrder.id);

  const handleCancelOrder = () =>
    setOrders((v) => {
      const maybeExistingOrder = getOrder(v);
      if (!maybeExistingOrder) {
        return v;
      }

      let newOrders: Array<OrderData>;
      if (maybeExistingOrder.count === 1) {
        newOrders = v.filter((el) => el.id !== maybeExistingOrder.id);
      } else {
        maybeExistingOrder.count -= 1;
        newOrders = [...v];
      }

      setLocalStorage(newOrders);

      return newOrders;
    });

  const handleBumpOrder = () =>
    setOrders((v) => {
      const maybeExistingOrder = getOrder(v);
      if (!maybeExistingOrder) {
        const newOrders = [...v, { ...targetOrder, count: 1 }];

        setLocalStorage(newOrders);
        return newOrders;
      }

      if (
        targetOrder.stock === 0 ||
        maybeExistingOrder.count >= targetOrder.stock
      ) {
        return v;
      }

      maybeExistingOrder.count += 1;

      setLocalStorage([...v]);

      return [...v];
    });

  return {
    count: orders.find((el) => el.id === targetOrder.id)?.count,
    handleCancelOrder,
    handleBumpOrder,
  };
};
