import { useAtom } from 'jotai';

import { OrderData, ordersAtom } from '@front/state';

import { useLocalStorage } from '../../../../../../hooks/useLocalStorage';

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
      if (maybeExistingOrder.quantity === 1) {
        newOrders = v.filter((el) => el.id !== maybeExistingOrder.id);
      } else {
        maybeExistingOrder.quantity -= 1;
        newOrders = [...v];
      }

      setLocalStorage(newOrders);

      return newOrders;
    });

  const handleBumpOrder = () =>
    setOrders((v) => {
      const maybeExistingOrder = getOrder(v);
      if (!maybeExistingOrder) {
        const newOrders = [...v, { ...targetOrder, quantity: 1 }];

        setLocalStorage(newOrders);
        return newOrders;
      }

      if (
        targetOrder.stock === 0 ||
        maybeExistingOrder.quantity >= targetOrder.stock
      ) {
        return v;
      }

      maybeExistingOrder.quantity += 1;

      setLocalStorage([...v]);

      return [...v];
    });

  return {
    quantity: orders.find((el) => el.id === targetOrder.id)?.quantity,
    handleCancelOrder,
    handleBumpOrder,
  };
};
