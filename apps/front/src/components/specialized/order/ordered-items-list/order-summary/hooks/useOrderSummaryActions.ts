import { useAtom } from 'jotai';

import { modalStateAtom } from '@front/components';
import { ordersAtom } from '@front/state';

import { useLocalStorage } from '../../../../../../hooks/useLocalStorage';
import { orderModalAtom } from '../../../state/order-modal.state';

export const useOrderSummaryActions = () => {
  const [, setOrders] = useAtom(ordersAtom);
  const [, setPersistedOrders] = useLocalStorage('orders', []);
  const [ordelModal, setOrderModal] = useAtom(orderModalAtom);
  const [, setModalState] = useAtom(modalStateAtom);

  const handleStartPayment = () => {
    if (ordelModal.step === 'complete') {
      setOrderModal(() => ({ step: 'auth' }));
    }
    void setModalState(() => 'opened');
  };

  const handleCancelPayment = () => {
    setPersistedOrders([]);
    setOrders([]);
  };

  return { handleCancelPayment, handleStartPayment };
};
