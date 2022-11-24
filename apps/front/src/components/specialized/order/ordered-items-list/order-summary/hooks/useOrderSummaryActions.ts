import { useAtom } from 'jotai';

import { modalStateAtom } from '@front/components';
import { ordersAtom } from '@front/state';

import { useLocalStorage } from '../../../../../../hooks/useLocalStorage';
import { AuthModal } from '../../../modals/auth-modal';
import { orderModalAtom } from '../../../state/order-modal.state';

export const useOrderSummaryActions = () => {
  const [, setOrders] = useAtom(ordersAtom);
  const [, setPersistedOrders] = useLocalStorage('orders', []);
  const [, setOrderModalState] = useAtom(orderModalAtom);
  const [, setModalState] = useAtom(modalStateAtom);

  const handleStartPayment = () => {
    setOrderModalState(() => ({ step: 'auth' }));
    setModalState(() => ({
      status: 'opened',
      content: AuthModal,
    }));
  };

  const handleCancelPayment = () => {
    setPersistedOrders([]);
    setOrders([]);
  };

  return { handleCancelPayment, handleStartPayment };
};
