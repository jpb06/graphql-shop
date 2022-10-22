import { useAtom } from 'jotai';

import { modalStateAtom } from '@front/components';

import { useLocalStorage } from '../../../../../../hooks/useLocalStorage';
import { ordersAtom } from '../../../../../../state/orders.state';

export const useOrderSummaryActions = () => {
  const [, setOrders] = useAtom(ordersAtom);
  const [, setPersistedOrders] = useLocalStorage('orders', []);
  const [, setModalState] = useAtom(modalStateAtom);

  const handleStartPayment = () => {
    void setModalState(() => 'opened');
  };

  const handleCancelPayment = () => {
    setPersistedOrders([]);
    setOrders([]);
  };

  return { handleCancelPayment, handleStartPayment };
};