import { useAtom } from 'jotai';

import { useLocalStorage } from '../../../../../../hooks/useLocalStorage';
import { ordersAtom } from '../../../../../../state/orders.state';
import { modalStateAtom } from '../../../../../generic/modal/modal.state';

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
