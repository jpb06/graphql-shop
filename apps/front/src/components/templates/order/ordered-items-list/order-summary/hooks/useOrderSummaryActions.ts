import { useAtom } from 'jotai';

import { useLocalStorage } from '../../../../../../hooks/useLocalStorage';
import { modalStateAtom } from '../../../../../generic/modal/modal.state';
import { ordersAtom } from '../../../../../state/orders.state';

export const useOrderSummaryActions = () => {
  const [, setOrders] = useAtom(ordersAtom);
  const [, setPersistedOrders] = useLocalStorage('orders', []);
  const [, setModalState] = useAtom(modalStateAtom);

  const handleStartPayment = () => {
    setModalState(() => 'opened');
  };

  const handleCancelPayment = () => {
    setPersistedOrders([]);
    setOrders([]);
  };

  return { handleCancelPayment, handleStartPayment };
};
