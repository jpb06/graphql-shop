import { useAtom } from 'jotai';

import { useLocalStorage } from '../../../../../../hooks/useLocalStorage';
import { ordersAtom } from '../../../../../state/orders.state';

export const useOrderSummaryActions = () => {
  const [, setOrders] = useAtom(ordersAtom);
  const [, setPersistedOrders] = useLocalStorage('orders', []);

  const handleStartPayment = () => {};

  const handleCancelPayment = () => {
    setPersistedOrders([]);
    setOrders([]);
  };

  return { handleCancelPayment, handleStartPayment };
};
