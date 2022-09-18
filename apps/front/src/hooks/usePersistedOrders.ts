import { useAtom } from 'jotai';
import { useEffect } from 'react';

import {
  ordersAtom,
  OrdersIndexerType,
} from '../components/templates/shop/articles-list/state/orders.state';
import { useLocalStorage } from './useLocalStorage';

export const usePersistedOrders = () => {
  const [orders, setOrders] = useAtom(ordersAtom);
  const [savedOrders] = useLocalStorage<OrdersIndexerType>('orders', orders);

  useEffect(() => {
    if (savedOrders) {
      setOrders(savedOrders);
    }
  }, [savedOrders, setOrders]);
};
