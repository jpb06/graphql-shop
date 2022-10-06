import { useAtom } from 'jotai';
import { useEffect } from 'react';

import { ordersAtom } from '../state/orders.state';
import { useLocalStorage } from './useLocalStorage';

export const usePersistedOrders = () => {
  const [orders, setOrders] = useAtom(ordersAtom);
  const [savedOrders] = useLocalStorage('orders', orders);

  useEffect(() => {
    if (savedOrders) {
      setOrders(savedOrders);
    }
  }, [savedOrders, setOrders]);
};
